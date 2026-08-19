import { NextRequest, NextResponse } from 'next/server';
import { connectDB, ensureDB } from '@/lib/mongodb';
import { OrderModel, AuditLogModel } from '@/server/models';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * GET /api/orders?email=
 *
 * Returns all orders (optionally filtered by customer email), newest first.
 * Returns an empty array if MongoDB is unreachable so the storefront keeps
 * working in degraded mode.
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');
  const filter = email ? { customerEmail: email } : {};

  const { ok } = await ensureDB();
  if (!ok) return NextResponse.json([]);

  try {
    const orders = await OrderModel.find(filter).sort({ createdAt: -1 }).lean();
    return NextResponse.json(orders);
  } catch (err: any) {
    console.error('[API /orders error]:', err);
    return NextResponse.json([]);
  }
}

/**
 * POST /api/orders
 *
 * Persists a new order and enriches each line item with a generated license
 * key (for instant digital fulfillment) or courier tracking note (for
 * hardware). Also writes an audit log entry.
 */
export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const orderData = await req.json();
    if (!orderData.id) orderData.id = `ord-${Date.now()}`;
    if (!orderData.orderNumber) {
      orderData.orderNumber = `PB-${Date.now().toString().slice(-6)}`;
    }

    // Enrich line items with auto-generated license keys / instructions.
    orderData.items = (orderData.items || []).map((item: any) => {
      const prod = item.product || {};
      const keys: string[] =
        item.licenseKeys && item.licenseKeys.length > 0
          ? item.licenseKeys
          : [
              `PB-${prod.type === 'HARDWARE' ? 'HW-TRACKING' : 'KEY'}-${Math.random()
                .toString(36)
                .substring(2, 7)
                .toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
            ];
      return {
        ...item,
        licenseKeys: keys,
        instructions:
          prod.type === 'HARDWARE'
            ? 'Track your courier dispatch parcel via TCS Pakistan.'
            : 'Enter this official license key in your software activation portal.',
      };
    });

    const created = await OrderModel.create(orderData);

    // Best-effort audit log (non-blocking on failure).
    AuditLogModel.create({
      id: `aud-${Date.now()}`,
      userId: orderData.customerEmail || 'customer',
      userName: orderData.customerName || 'Customer',
      userRole: 'CUSTOMER',
      action: 'ORDER_PLACED',
      targetType: 'ORDER',
      targetId: created.orderNumber,
      details: `Order ${created.orderNumber} placed for Rs ${orderData.totalAmountPKR}`,
      timestamp: new Date().toISOString(),
    }).catch(() => {});

    return NextResponse.json(created, { status: 201 });
  } catch (err: any) {
    console.error('[API /orders POST error]:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
