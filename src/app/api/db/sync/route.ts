import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import { ProductModel } from '@/server/models';
import { seedDatabaseIfEmpty } from '@/server/seed';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * POST /api/db/sync
 *
 * Re-seeds the MongoDB catalog (products, categories, coupons) from the
 * bundled initialData so Atlas always reflects the latest official catalog.
 * Useful after schema changes or to recover from an empty cluster.
 */
export async function POST() {
  await connectDB();
  try {
    await seedDatabaseIfEmpty();
    const count = await ProductModel.countDocuments();
    return NextResponse.json({
      success: true,
      message: 'Database catalog synced with MongoDB Atlas',
      count,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
