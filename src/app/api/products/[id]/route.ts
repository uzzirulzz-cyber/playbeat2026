import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { ProductModel } from '@/server/models';
import { INITIAL_PRODUCTS } from '@/data/initialData';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/** GET /api/products/:id */
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectDB();
  try {
    const product = await ProductModel.findOne({ id }).lean();
    if (!product) {
      const fallback = INITIAL_PRODUCTS.find((p) => p.id === id);
      if (fallback) return NextResponse.json(fallback);
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/** PUT /api/products/:id */
export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectDB();
  try {
    const body = await req.json();
    const updated = await ProductModel.findOneAndUpdate({ id }, { $set: body }, { new: true });
    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

/** DELETE /api/products/:id */
export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connectDB();
  try {
    await ProductModel.deleteOne({ id });
    return NextResponse.json({ success: true, id });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
