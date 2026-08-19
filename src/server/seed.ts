import { ProductModel, CategoryModel, CouponModel } from './models';
import { INITIAL_PRODUCTS, INITIAL_CATEGORIES, INITIAL_COUPONS } from '../data/initialData';

/**
 * Re-seeds the MongoDB catalog with the verified PlayBeat Digital
 * product list. Drops ALL existing products and categories first so the
 * database only contains the 7 verified smart projectors.
 *
 * This is destructive — any admin-created products will be removed. Call
 * POST /api/db/sync to trigger this from the admin console.
 */
export async function seedDatabaseIfEmpty() {
  try {
    const validProductIds = INITIAL_PRODUCTS.map((p) => p.id);
    const validCategoryIds = INITIAL_CATEGORIES.map((c) => c.id);

    // 1. Drop ALL products that are not in the verified catalog.
    //    This removes the previously-seeded software/AI/games/giftcards.
    const deletedProducts = await ProductModel.deleteMany({
      id: { $nin: validProductIds },
    });
    console.log(
      `[MongoDB Seed] Removed ${deletedProducts.deletedCount} non-verified products from catalog.`,
    );

    // 2. Drop ALL categories that are not in the verified catalog.
    const deletedCategories = await CategoryModel.deleteMany({
      id: { $nin: validCategoryIds },
    });
    console.log(
      `[MongoDB Seed] Removed ${deletedCategories.deletedCount} non-verified categories.`,
    );

    // 3. Upsert the 7 verified projectors.
    console.log(
      `[MongoDB Seed] Syncing ${INITIAL_PRODUCTS.length} verified projectors into MongoDB Atlas...`,
    );
    for (const prod of INITIAL_PRODUCTS) {
      await ProductModel.findOneAndUpdate(
        { id: prod.id },
        prod as any,
        { upsert: true, returnDocument: 'after' },
      );
    }
    console.log(
      `[MongoDB Seed] Upserted all ${INITIAL_PRODUCTS.length} verified projectors successfully.`,
    );

    // 4. Upsert the verified categories (all + smart-projectors).
    for (const cat of INITIAL_CATEGORIES) {
      await CategoryModel.findOneAndUpdate(
        { id: cat.id },
        cat as any,
        { upsert: true, returnDocument: 'after' },
      );
    }

    // 5. Upsert the verified coupons.
    for (const coup of INITIAL_COUPONS) {
      await CouponModel.findOneAndUpdate(
        { code: coup.code },
        coup as any,
        { upsert: true, returnDocument: 'after' },
      );
    }

    console.log(
      '[MongoDB] Database synchronized with verified PlayBeat catalog (7 projectors only).',
    );
  } catch (error) {
    console.error('[MongoDB Seed Error]:', error);
  }
}
