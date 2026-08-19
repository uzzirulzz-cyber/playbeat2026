import { NextRequest, NextResponse } from 'next/server';
import { connectDB, ensureDB } from '@/lib/mongodb';
import { ProductModel } from '@/server/models';
import { INITIAL_PRODUCTS } from '@/data/initialData';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * GET /api/products?category=&type=&search=
 *
 * Returns the catalog sorted by salesCount desc. Falls back to the bundled
 * INITIAL_PRODUCTS seed if MongoDB is unreachable or the collection is empty.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  const search = searchParams.get('search');

  const filter: Record<string, unknown> = {};
  if (category && category !== 'all') filter['category.slug'] = category;
  if (type && type !== 'ALL') filter.type = type;
  if (search && search.trim()) {
    const regex = new RegExp(search.trim(), 'i');
    filter.$or = [
      { title: regex },
      { shortDescription: regex },
      { tags: regex },
      { sku: regex },
      { 'category.name': regex },
    ];
  }

  const { ok } = await ensureDB();
  if (!ok) {
    return NextResponse.json(INITIAL_PRODUCTS);
  }

  try {
    let products = await ProductModel.find(filter).sort({ salesCount: -1 }).lean();
    if (!products || products.length === 0) {
      products = INITIAL_PRODUCTS as any;
    }
    return NextResponse.json(products);
  } catch (err: any) {
    console.error('[API /products error]:', err);
    return NextResponse.json(INITIAL_PRODUCTS);
  }
}

/**
 * POST /api/products
 *
 * Creates a new product in the catalog. Used by the Admin Console product
 * editor.
 */
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const body = await req.json();
    if (!body.id) body.id = `prod-${Date.now()}`;
    const saved = await ProductModel.create(body);
    return NextResponse.json(saved, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
