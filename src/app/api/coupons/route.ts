import { NextResponse } from 'next/server';
import { ensureDB } from '@/lib/mongodb';
import { CouponModel } from '@/server/models';
import { INITIAL_COUPONS } from '@/data/initialData';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/** GET /api/coupons — falls back to seed data if Mongo is unreachable. */
export async function GET() {
  const { ok } = await ensureDB();
  if (!ok) return NextResponse.json(INITIAL_COUPONS);

  try {
    let coupons = await CouponModel.find({}).lean();
    if (!coupons || coupons.length === 0) {
      coupons = INITIAL_COUPONS as any;
    }
    return NextResponse.json(coupons);
  } catch (err: any) {
    console.error('[API /coupons error]:', err);
    return NextResponse.json(INITIAL_COUPONS);
  }
}
