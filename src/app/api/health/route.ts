import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * GET /api/health
 *
 * Reports MongoDB Atlas connection status. The storefront uses this to
 * decide whether to render live remote data or fall back to local/seeded
 * state.
 */
export async function GET() {
  try {
    await connectDB();
    return NextResponse.json({
      status: 'ok',
      database: 'MongoDB Atlas',
      cluster: 'cluster0.75ddnhu.mongodb.net',
      dbName: 'playbeat_store',
      connected: true,
      timestamp: new Date().toISOString(),
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        status: 'degraded',
        database: 'MongoDB Atlas',
        connected: false,
        error: e?.message ?? 'unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 200 }, // 200 so the client can still parse the body
    );
  }
}
