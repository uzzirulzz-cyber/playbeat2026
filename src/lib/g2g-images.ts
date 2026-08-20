import type { Product } from '@/types';

/**
 * Verified G2G CDN images for product families already present in PlayBeat.
 * These are used only for matching products and keep the existing cover as a fallback.
 */
const G2G_IMAGE_RULES: Array<{ matches: string[]; image: string }> = [
  {
    matches: ['valorant', 'points'],
    image: 'https://assets.g2g.com/img/offer/kr_90015a0f-3983-4953-8368-96ac181d9e92_lgc_game_27301.webp',
  },
  {
    matches: ['genshin', 'crystals'],
    image: 'https://assets.g2g.com/img/offer/kr_90015a0f-3983-4953-8368-96ac181d9e92_lgc_game_28151.webp',
  },
  {
    matches: ['league', 'legends'],
    image: 'https://assets.g2g.com/img/offer/kr_90015a0f-3983-4953-8368-96ac181d9e92_lgc_game_22666.webp',
  },
  {
    matches: ['razer', 'gold'],
    image: 'https://assets.g2g.com/img/offer/kr_8f88b6fd-93df-4a07-b8b0-7d90b152b81f_lgc_game_24733.webp',
  },
  {
    matches: ['netflix'],
    image: 'https://assets.g2g.com/img/offer/kr_f6a1aba5-473a-4044-836a-8968bbab16d7_ec230c8b-f84d-4b1c-a2bb-579ec5b76077.webp',
  },
  {
    matches: ['claude'],
    image: 'https://assets.g2g.com/img/offer/kr_f6a1aba5-473a-4044-836a-8968bbab16d7_c02e28f8-b410-4656-b9ee-867cc711cb44.webp',
  },
  {
    matches: ['gemini', 'google'],
    image: 'https://assets.g2g.com/img/offer/kr_f6a1aba5-473a-4044-836a-8968bbab16d7_a63275a9-8e7e-4995-b655-133be79c74e9.webp',
  },
  {
    matches: ['cursor'],
    image: 'https://assets.g2g.com/img/offer/kr_f6a1aba5-473-4044-8368-96ac181d9e92_lgc_game_27301.webp',
  },
];

export function getG2GImage(product: Product): string {
  const searchable = `${product.title} ${product.shortDescription} ${product.category?.name || ''}`.toLowerCase();
  const rule = G2G_IMAGE_RULES.find(({ matches }) => matches.every((term) => searchable.includes(term)) || (matches.length === 1 && searchable.includes(matches[0])));
  return rule?.image || product.cover?.image || '';
}

export function applyG2GImages(products: Product[]): Product[] {
  return products.map((product) => {
    const image = getG2GImage(product);
    if (!image || image === product.cover?.image) return product;
    return {
      ...product,
      cover: { ...product.cover, type: 'image', image },
      sourceUrl: product.sourceUrl || 'https://www.g2g.com',
    };
  });
}
