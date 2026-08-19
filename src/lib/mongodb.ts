import mongoose from 'mongoose';

/**
 * MongoDB connection URI.
 *
 * MUST be provided via the `MONGODB_URI` environment variable.
 * See `.env.example` for the expected format.
 *
 * The app gracefully falls back to bundled seed data when this is
 * not configured (see `ensureDB()` below), so the storefront keeps
 * rendering even if Atlas is unreachable.
 */
export const MONGODB_URI = process.env.MONGODB_URI || '';

export const MONGODB_DB = process.env.MONGODB_DB || 'playbeat_store';

/**
 * Cached mongoose connection so Next.js dev server / serverless functions
 * don't open a new connection pool on every hot-reload or request.
 *
 * `global.mongoose` survives HMR in development.
 */
type MongooseCache = { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };

declare global {
  // eslint-disable-next-line no-var
  var __playbeatMongoose: MongooseCache | undefined;
}

const cache: MongooseCache = global.__playbeatMongoose ?? (global.__playbeatMongoose = { conn: null, promise: null });

/**
 * Establish (or reuse) a Mongoose connection to MongoDB Atlas.
 * Returns the live mongoose instance.
 */
export async function connectDB(): Promise<typeof mongoose> {
  if (cache.conn) return cache.conn;

  if (!cache.promise) {
    const opts: mongoose.ConnectOptions = {
      dbName: MONGODB_DB,
      serverSelectionTimeoutMS: 10000,
      bufferCommands: false,
      maxPoolSize: 10,
    };

    cache.promise = mongoose.connect(MONGODB_URI, opts).then((m) => {
      console.log(`[MongoDB] Connected → cluster0.75ddnhu.mongodb.net / db: ${MONGODB_DB}`);
      return m;
    });
  }

  try {
    cache.conn = await cache.promise;
  } catch (err) {
    cache.promise = null; // allow a retry on the next request
    console.error('[MongoDB] Connection error:', err);
    throw err;
  }

  return cache.conn;
}

/**
 * Convenience helper for API routes — never throws, returns a boolean so
 * routes can gracefully fall back to local/seed data when Atlas is
 * unreachable (e.g. network blips or rate limits).
 */
export async function ensureDB(): Promise<{ ok: boolean; error?: string }> {
  try {
    await connectDB();
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message ?? 'unknown' };
  }
}
