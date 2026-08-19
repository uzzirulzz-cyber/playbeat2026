import { NextResponse } from 'next/server';
import { ensureDB } from '@/lib/mongodb';
import { CategoryModel } from '@/server/models';
import { INITIAL_CATEGORIES } from '@/data/initialData';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/** GET /api/categories — falls back to seed data if Mongo is unreachable. */
export async function GET() {
  const { ok } = await ensureDB();
  if (!ok) return NextResponse.json(INITIAL_CATEGORIES);

  try {
    let categories = await CategoryModel.find({}).lean();
    if (!categories || categories.length === 0) {
      categories = INITIAL_CATEGORIES as any;
    }
    return NextResponse.json(categories);
  } catch (err: any) {
    console.error('[API /categories error]:', err);
    return NextResponse.json(INITIAL_CATEGORIES);
  }
}
