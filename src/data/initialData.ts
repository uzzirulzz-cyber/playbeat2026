import { Product, Category, Coupon, NotificationItem, User } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'cat-all', name: 'All Products', slug: 'all', description: 'Browse our entire verified catalog — smart projectors, game top-ups, streaming, AI tools, and gift cards', icon: 'Grid', color: '#6366f1', productCount: 39 },
  { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', description: 'Magcubic HY300, HM103-A, HCS350-Pro, HT23, HY7 — verified PlayBeat 4K cinema projectors', icon: 'Projector', color: '#3b82f6', productCount: 7 },
  { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', description: 'PUBG UC, Valorant Points, Genshin Crystals, LoL RP — instant recharge', icon: 'Gamepad2', color: '#f97316', productCount: 18 },
  { id: 'cat-streaming', name: 'Video Streaming', slug: 'streaming', description: 'Netflix, Spotify, YouTube Premium, Disney+ — instant account access', icon: 'Tv', color: '#ec4899', productCount: 4 },
  { id: 'cat-ai', name: 'AI Tools', slug: 'ai-tools', description: 'ChatGPT Plus, Claude Pro, Gemini Advanced, Cursor Pro — verified account upgrades', icon: 'Sparkles', color: '#10b981', productCount: 4 },
  { id: 'cat-giftcards', name: 'Gift Cards', slug: 'gift-cards', description: 'Razer Gold (RBL) top-ups with instant digital delivery', icon: 'Gift', color: '#ef4444', productCount: 6 }
];

export const INITIAL_PRODUCTS: Product[] = [
  // =================================================================
  // 7 VERIFIED SMART PROJECTORS (PlayBeat Digital Catalog)
  // Prices sourced directly from playbeatdigital.store
  // =================================================================
  {
    id: 'prod-proj-hy300-pro',
    title: 'Magcubic HY300 PRO Smart Projector',
    slug: 'magcubic-hy300-pro-smart-projector',
    shortDescription: 'Native 720P / 1080P 4K Decoded Android 11 Smart Projector with 180° rotatable swivel stand & Dual WiFi 6.',
    description: 'The iconic Magcubic HY300 PRO delivers versatile ceiling and wall projection with its 180-degree flexible rotation bracket. Running smooth Android 11 with built-in YouTube, Netflix, and Prime Video. Features auto keystone correction, dual-band WiFi 6, and built-in Hi-Fi chamber audio.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 22500,
    costPrice: 2250,
    profit: 20250,
    currency: 'PKR',
    sku: 'MAGCUBIC-HY300-PRO',
    stock: 35,
    cover: {
      type: 'image',
      image: 'https://www.zerobyte.store/cdn/shop/files/S9fbe418fb0084a9a927f28e16a51bd25a.jpg?v=1770615428&width=1946',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['Magcubic', 'HY300 Pro', 'Smart Projector', 'Android 11', '180 Rotation', 'WiFi 6'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HY300 PRO (2026 Edition)',
    featured: true,
    rating: 4.9,
    reviewCount: 184,
    salesCount: 820,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#3b82f6' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Model': 'Magcubic HY300 PRO',
      'Resolution': 'Native 1280x720P (4K Ultra HD Decoding)',
      'Brightness': '260 ANSI Lumens',
      'OS': 'Android 11.0 with Google Play Store',
      'Projection Angle': '180° Free Swivel Rotation',
      'Audio': '5W Hi-Fi Chamber Stereo Speaker',
      'Connectivity': 'Dual-Band WiFi 6 (2.4G/5.8G), Bluetooth 5.0, HDMI, USB'
    },
    features: [
      '180° Flexible projection angle for instant ceiling cinema',
      'Auto-keystone vertical correction in real-time',
      'Pre-installed YouTube, Netflix, Disney+, and browser',
      'Ultra low noise cooling fan (<25dB operating sound)',
      'Includes smart Bluetooth remote, HDMI cable & power cord'
    ],
    deliveryType: 'POSTAL_SHIPPING',
    reviews: [
      { id: 'r-hy1', rating: 5, title: 'Unbeatable value for money', comment: 'Ceiling projection is a game changer in bedroom. Fast delivery via TCS.', verified: true, createdAt: '2 days ago', authorName: 'Zubair Shah', helpfulCount: 38 },
      { id: 'r-hy2', rating: 5, title: 'Colors are super vibrant', comment: 'Connected to WiFi 6 smoothly. Runs Netflix with zero lag.', verified: true, createdAt: '5 days ago', authorName: 'Ayesha Siddiqui', helpfulCount: 19 }
    ]
  },
  {
    id: 'prod-proj-hy300-plus',
    title: 'HY300 Plus Smart Projector',
    slug: 'hy300-plus-smart-projector',
    shortDescription: 'Upgraded high-lumen optical engine with Android TV OS, 180° rotatable gimbal & fast screen mirroring.',
    description: 'The upgraded HY300 Plus brings enhanced color saturation, higher contrast ratio, and rapid wireless AirPlay / Miracast screen mirroring. Perfect for gaming, presentations, and late-night binge watching on up to 150-inch screens.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 22500,
    costPrice: 2250,
    profit: 20250,
    currency: 'PKR',
    sku: 'HY300-PLUS-01',
    stock: 22,
    cover: {
      type: 'image',
      image: 'https://www.zerobyte.store/cdn/shop/files/Se6ca806a4e03461fb8748fff3d1c187eI.webp?v=1745826564&width=1946',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['HY300 Plus', 'Projector', 'Android TV', '180 Gimbal', 'WiFi 6'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HY300 Plus',
    featured: true,
    rating: 4.88,
    reviewCount: 98,
    salesCount: 430,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#3b82f6' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Model': 'HY300 Plus',
      'Resolution': 'Native 720P (Supports 1080P/4K video)',
      'Brightness': '280 ANSI Lumens',
      'Display Size': '40" to 150" Display',
      'Wireless': 'Dual WiFi 6 + Bluetooth 5.2',
      'Audio': 'Hi-Fi Stereo Acoustic Driver'
    },
    features: ['Upgraded optical light path', 'Wireless smartphone screen casting', 'Full 180° rotation gimbal mount'],
    deliveryType: 'POSTAL_SHIPPING'
  },
  {
    id: 'prod-proj-hy300pro-plus',
    title: 'Magcubic HY300Pro Plus Smart Projector',
    slug: 'magcubic-hy300pro-plus-smart-projector',
    shortDescription: 'High-performance edition with 300 ANSI lumens, electric motorized remote focus & 4K decoding chip.',
    description: 'Engineered for power users, the Magcubic HY300Pro Plus features precision motorized focus via remote control, upgraded 300 ANSI lumens LED light source, sealed dust-resistant optics, and rapid dual-band wireless throughput.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 26500,
    costPrice: 2650,
    profit: 23850,
    currency: 'PKR',
    sku: 'MAGCUBIC-HY300PRO-PLUS',
    stock: 28,
    cover: {
      type: 'image',
      image: 'https://www.zerobyte.store/cdn/shop/files/S6002d940582649c9be0292811be6b4e5I.jpg?v=1770636107&width=1946',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['Magcubic', 'HY300Pro Plus', 'Electric Focus', '4K Decoding', '300 ANSI'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HY300Pro Plus Flagship',
    featured: true,
    rating: 4.94,
    reviewCount: 132,
    salesCount: 650,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#3b82f6' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Model': 'Magcubic HY300Pro Plus',
      'Resolution': '1080P Decoded / 4K Playback Support',
      'Brightness': '300 ANSI Lumens',
      'Focus': 'Electric Remote-Controlled Motorized Focus',
      'OS': 'Android 11.0 Smart UI',
      'Port Array': 'HDMI 2.0, USB 2.0, 3.5mm AUX Audio'
    },
    features: [
      'Electric one-touch remote focus adjustment',
      'Sealed dust-resistant optical glass assembly',
      'Support for Bluetooth 5.2 headphones & home theater soundbars',
      'Rapid screen casting from iPhone, Android and Windows PC'
    ],
    deliveryType: 'POSTAL_SHIPPING'
  },
  {
    id: 'prod-proj-ht23',
    title: 'HT23 Smart Cinema Projector',
    slug: 'ht23-smart-cinema-projector',
    shortDescription: '350 ANSI Lumens with HDR10 contrast enhancement, dual stereo drivers & high-speed low-latency gaming.',
    description: 'The HT23 Cinema Projector offers enhanced color accuracy, deep blacks with HDR10 processing, and dual acoustic drivers for an immersive audio-visual home theater experience without external speakers.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 26500,
    costPrice: 2650,
    profit: 23850,
    currency: 'PKR',
    sku: 'HT23-CINEMA-01',
    stock: 18,
    cover: {
      type: 'image',
      image: 'https://www.zerobyte.store/cdn/shop/files/preview_images/1_d88162d0-7eb3-4d29-b282-3c3163dbfc89.png?v=1747500176&width=1946',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['HT23', 'Cinema Projector', 'HDR10', '350 ANSI', 'Dual Audio'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HT23 Cinema',
    featured: true,
    rating: 4.89,
    reviewCount: 74,
    salesCount: 320,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#3b82f6' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Model': 'HT23 Smart Cinema',
      'Resolution': 'Native 1080P Full HD (4K video input)',
      'Brightness': '350 ANSI Lumens',
      'Contrast Ratio': '3,000:1 Dynamic Contrast',
      'Audio': 'Dual 5W Stereo Subwoofer Chamber'
    },
    features: [
      'HDR10 dynamic range tuning',
      'Low latency game mode (18ms)',
      'Four-corner digital trapezoid correction'
    ],
    deliveryType: 'POSTAL_SHIPPING'
  },
  {
    id: 'prod-proj-hcs350pro',
    title: 'HCS350-Pro Smart Laser Projector',
    slug: 'hcs350-pro-smart-laser-projector',
    shortDescription: '500 ANSI Lumens powerhouse with native 1080P physical resolution, 4-point auto keystone & 4K decoding.',
    description: 'Step into commercial-grade brightness. The HCS350-Pro delivers 500 ANSI lumens of crystal-clear luminosity, ensuring crisp visuals even in ambient lit rooms. Features native physical 1080P resolution and smart auto-keystone sensors.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 34500,
    costPrice: 3450,
    profit: 31050,
    currency: 'PKR',
    sku: 'HCS350-PRO-4K',
    stock: 20,
    cover: {
      type: 'image',
      image: 'https://www.zerobyte.store/cdn/shop/files/HCS350_PRO_WHITE.png?v=1747890095&width=1946',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['HCS350-Pro', '500 ANSI', 'Native 1080P', '4K Support', 'Auto Keystone'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HCS350-Pro Cinema',
    featured: true,
    rating: 4.91,
    reviewCount: 78,
    salesCount: 340,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#3b82f6' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Model': 'HCS350-Pro',
      'Resolution': 'Native 1920x1080P Physical (4K UHD Decoded)',
      'Brightness': '500 ANSI Lumens',
      'Screen Size': '50" to 200" Display',
      'Audio': 'Dual 10W Subwoofer Chamber',
      'OS': 'Android TV 12.0'
    },
    features: [
      'Real-time 4-point automatic keystone calibration',
      '500 ANSI bright optical engine for cinema-level fidelity',
      'Sealed optics with 40,000 hrs LED lifespan'
    ],
    deliveryType: 'POSTAL_SHIPPING'
  },
  {
    id: 'prod-proj-hm103a',
    title: 'HM103-A Ultra-Bright Smart Cinema Projector',
    slug: 'hm103-a-ultra-bright-smart-projector',
    shortDescription: 'Native 1080P Full HD 650 ANSI Lumens home theater with instant 1-second AI auto-focus & dual chamber acoustic drivers.',
    description: 'Top-tier home theater immersion. The HM103-A packs 650 ANSI lumens of bright luminosity with instant 1-second laser autofocus and omnidirectional obstacle avoidance. Projects giant 200-inch screens effortlessly with deep contrast.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 39000,
    costPrice: 3900,
    profit: 35100,
    currency: 'PKR',
    sku: 'HM103-A-ULTRA',
    stock: 14,
    cover: {
      type: 'image',
      image: 'https://www.zerobyte.store/cdn/shop/files/preview_images/WHITE.png?v=1747500464&width=1946',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['HM103-A', '650 ANSI', 'AI Auto Focus', 'Native 1080P', '200 Inch'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HM103-A Flagship',
    featured: true,
    rating: 4.97,
    reviewCount: 96,
    salesCount: 410,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#3b82f6' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Model': 'HM103-A Ultra',
      'Resolution': 'Native 1920x1080P Full HD (8K Decoded)',
      'Brightness': '650 ANSI Lumens True Optical Output',
      'Focus': 'Instant 1-Second AI Laser Auto-Focus',
      'Audio': 'Dual 10W Bass Chamber Speakers',
      'OS': 'Android TV 11.0'
    },
    features: [
      '650 ANSI high-lumen optical engine for daytime viewing',
      'Fully sealed dust-proof optical block (Zero black spots)',
      'Real-time auto-obstacle avoidance and auto-screen fit',
      'Dual 10W high-power neodymium acoustic drivers'
    ],
    deliveryType: 'POSTAL_SHIPPING'
  },
  {
    id: 'prod-proj-hy7-battery',
    title: 'HY7 Built-in Battery Portable Outdoor Projector',
    slug: 'hy7-battery-portable-outdoor-projector',
    shortDescription: 'Built-in high-capacity rechargeable battery (3+ hrs playback), compact travel gimbal cinema & WiFi 6.',
    description: 'Take your cinema everywhere without cords. The HY7 Battery projector features a built-in heavy-duty rechargeable battery for up to 3 hours of continuous outdoor movie playback. Perfect for camping, rooftop parties, and mobile presentations.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 44500,
    costPrice: 4450,
    profit: 40050,
    currency: 'PKR',
    sku: 'HY7-BATTERY-PORTABLE',
    stock: 16,
    cover: {
      type: 'image',
      image: 'https://www.zerobyte.store/cdn/shop/files/S9b7d3e654ba04d26b500c9268f4fa0008.webp?v=1745468010&width=1946',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['HY7 Battery', 'Portable Projector', 'Rechargeable', 'Outdoor Cinema', 'WiFi 6'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HY7 Outdoor Battery Edition',
    featured: true,
    rating: 4.93,
    reviewCount: 64,
    salesCount: 290,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#3b82f6' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Model': 'HY7 Battery Pro',
      'Battery Capacity': 'Built-in 8,000mAh Battery (3+ Hours)',
      'Resolution': 'Native 720P / 1080P 4K Decoded',
      'Brightness': '320 ANSI Lumens',
      'Wireless': 'WiFi 6 + Bluetooth 5.2 Speaker Mode',
      'Weight': '920g Ultralight Carry'
    },
    features: [
      'Cordless freedom with built-in high density lithium cell',
      'Can be used as standalone Bluetooth speaker',
      '180-degree rotation bracket for ceiling projection anywhere'
    ],
    deliveryType: 'POSTAL_SHIPPING'
  },
  // =================================================================
  // GAME TOP-UPS + GIFT CARDS (sourced from g2g.com — prices +10% profit margin)
  // Source URL shows playbeat.digital only (g2g slug stripped per catalog owner)
  // =================================================================
  {
    id: 'prod-pubg-mobile-uc-top-up-8100-uc',
    title: "8100 UC \u2014 PUBG Mobile UC Top-Up",
    slug: '8100-uc-pubg-mobile-uc-top-up',
    shortDescription: "Official PUBG Mobile UC Top-Up \u2014 instant delivery of 8100 UC directly to your account.",
    description: "Verified PUBG Mobile UC Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 8100 UC credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 24350,
    currency: 'PKR',
    sku: 'PROD-PUBG-MOBILE-UC-TOP-UP-810',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["UC", "PUBG Mobile UC", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'UC Recharge',
    featured: false,
    rating: 4.83,
    reviewCount: 65,
    salesCount: 326,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '8100 UC',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-pubg-mobile-uc-top-up-4000-uc',
    title: "4000 UC \u2014 PUBG Mobile UC Top-Up",
    slug: '4000-uc-pubg-mobile-uc-top-up',
    shortDescription: "Official PUBG Mobile UC Top-Up \u2014 instant delivery of 4000 UC directly to your account.",
    description: "Verified PUBG Mobile UC Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 4000 UC credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 14600,
    currency: 'PKR',
    sku: 'PROD-PUBG-MOBILE-UC-TOP-UP-400',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["UC", "PUBG Mobile UC", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'UC Recharge',
    featured: false,
    rating: 4.59,
    reviewCount: 17,
    salesCount: 87,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '4000 UC',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-pubg-mobile-uc-top-up-9375-uc',
    title: "9375 UC \u2014 PUBG Mobile UC Top-Up",
    slug: '9375-uc-pubg-mobile-uc-top-up',
    shortDescription: "Official PUBG Mobile UC Top-Up \u2014 instant delivery of 9375 UC directly to your account.",
    description: "Verified PUBG Mobile UC Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 9375 UC credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 18500,
    currency: 'PKR',
    sku: 'PROD-PUBG-MOBILE-UC-TOP-UP-937',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["UC", "PUBG Mobile UC", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'UC Recharge',
    featured: false,
    rating: 4.58,
    reviewCount: 16,
    salesCount: 83,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '9375 UC',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-pubg-mobile-uc-top-up-3850-uc',
    title: "3850 UC \u2014 PUBG Mobile UC Top-Up",
    slug: '3850-uc-pubg-mobile-uc-top-up',
    shortDescription: "Official PUBG Mobile UC Top-Up \u2014 instant delivery of 3850 UC directly to your account.",
    description: "Verified PUBG Mobile UC Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 3850 UC credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 13500,
    currency: 'PKR',
    sku: 'PROD-PUBG-MOBILE-UC-TOP-UP-385',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["UC", "PUBG Mobile UC", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'UC Recharge',
    featured: false,
    rating: 4.69,
    reviewCount: 38,
    salesCount: 190,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '3850 UC',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-pubg-mobile-uc-top-up-1800-uc',
    title: "1800 UC \u2014 PUBG Mobile UC Top-Up",
    slug: '1800-uc-pubg-mobile-uc-top-up',
    shortDescription: "Official PUBG Mobile UC Top-Up \u2014 instant delivery of 1800 UC directly to your account.",
    description: "Verified PUBG Mobile UC Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 1800 UC credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 6800,
    currency: 'PKR',
    sku: 'PROD-PUBG-MOBILE-UC-TOP-UP-180',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["UC", "PUBG Mobile UC", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'UC Recharge',
    featured: false,
    rating: 4.8,
    reviewCount: 59,
    salesCount: 297,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '1800 UC',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-pubg-mobile-uc-top-up-6000-uc',
    title: "6000 UC \u2014 PUBG Mobile UC Top-Up",
    slug: '6000-uc-pubg-mobile-uc-top-up',
    shortDescription: "Official PUBG Mobile UC Top-Up \u2014 instant delivery of 6000 UC directly to your account.",
    description: "Verified PUBG Mobile UC Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 6000 UC credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 300,
    currency: 'PKR',
    sku: 'PROD-PUBG-MOBILE-UC-TOP-UP-600',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["UC", "PUBG Mobile UC", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'UC Recharge',
    featured: false,
    rating: 4.54,
    reviewCount: 10,
    salesCount: 40,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '6000 UC',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-valorant-points-top-up-475-points',
    title: "475 Points \u2014 Valorant Points Top-Up",
    slug: '475-points-valorant-points-top-up',
    shortDescription: "Official Valorant Points Top-Up \u2014 instant delivery of 475 Points directly to your account.",
    description: "Verified Valorant Points Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 475 Points credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 950,
    currency: 'PKR',
    sku: 'PROD-VALORANT-POINTS-TOP-UP-47',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Points", "Valorant Points", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Points Recharge',
    featured: false,
    rating: 5.0,
    reviewCount: 133,
    salesCount: 668,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '475 Points',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-genshin-impact-crystals-top-up-2200-crystals',
    title: "2200 Crystals \u2014 Genshin Impact Crystals Top-Up",
    slug: '2200-crystals-genshin-impact-crystals-top-up',
    shortDescription: "Official Genshin Impact Crystals Top-Up \u2014 instant delivery of 2200 Crystals directly to your account.",
    description: "Verified Genshin Impact Crystals Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 2200 Crystals credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 21500,
    currency: 'PKR',
    sku: 'PROD-GENSHIN-IMPACT-CRYSTALS-T',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Crystals", "Genshin Impact Crystals", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Crystals Recharge',
    featured: false,
    rating: 4.71,
    reviewCount: 43,
    salesCount: 215,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '2200 Crystals',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-genshin-impact-crystals-top-up-260-crystals',
    title: "260 Crystals \u2014 Genshin Impact Crystals Top-Up",
    slug: '260-crystals-genshin-impact-crystals-top-up',
    shortDescription: "Official Genshin Impact Crystals Top-Up \u2014 instant delivery of 260 Crystals directly to your account.",
    description: "Verified Genshin Impact Crystals Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 260 Crystals credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 6350,
    currency: 'PKR',
    sku: 'PROD-GENSHIN-IMPACT-CRYSTALS-T',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Crystals", "Genshin Impact Crystals", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Crystals Recharge',
    featured: false,
    rating: 5.0,
    reviewCount: 140,
    salesCount: 701,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '260 Crystals',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-genshin-impact-crystals-top-up-140-crystals',
    title: "140 Crystals \u2014 Genshin Impact Crystals Top-Up",
    slug: '140-crystals-genshin-impact-crystals-top-up',
    shortDescription: "Official Genshin Impact Crystals Top-Up \u2014 instant delivery of 140 Crystals directly to your account.",
    description: "Verified Genshin Impact Crystals Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 140 Crystals credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 6050,
    currency: 'PKR',
    sku: 'PROD-GENSHIN-IMPACT-CRYSTALS-T',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Crystals", "Genshin Impact Crystals", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Crystals Recharge',
    featured: false,
    rating: 4.85,
    reviewCount: 70,
    salesCount: 353,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '140 Crystals',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-genshin-impact-crystals-top-up-30-crystals',
    title: "30 Crystals \u2014 Genshin Impact Crystals Top-Up",
    slug: '30-crystals-genshin-impact-crystals-top-up',
    shortDescription: "Official Genshin Impact Crystals Top-Up \u2014 instant delivery of 30 Crystals directly to your account.",
    description: "Verified Genshin Impact Crystals Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 30 Crystals credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 1150,
    currency: 'PKR',
    sku: 'PROD-GENSHIN-IMPACT-CRYSTALS-T',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Crystals", "Genshin Impact Crystals", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Crystals Recharge',
    featured: false,
    rating: 5.0,
    reviewCount: 116,
    salesCount: 583,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '30 Crystals',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-genshin-impact-crystals-top-up-710-crystals',
    title: "710 Crystals \u2014 Genshin Impact Crystals Top-Up",
    slug: '710-crystals-genshin-impact-crystals-top-up',
    shortDescription: "Official Genshin Impact Crystals Top-Up \u2014 instant delivery of 710 Crystals directly to your account.",
    description: "Verified Genshin Impact Crystals Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 710 Crystals credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 13500,
    currency: 'PKR',
    sku: 'PROD-GENSHIN-IMPACT-CRYSTALS-T',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Crystals", "Genshin Impact Crystals", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Crystals Recharge',
    featured: false,
    rating: 4.71,
    reviewCount: 42,
    salesCount: 211,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '710 Crystals',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-league-of-legends-rp-top-up-10040-rp',
    title: "10040 RP \u2014 League of Legends RP Top-Up",
    slug: '10040-rp-league-of-legends-rp-top-up',
    shortDescription: "Official League of Legends RP Top-Up \u2014 instant delivery of 10040 RP directly to your account.",
    description: "Verified League of Legends RP Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 10040 RP credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 22500,
    currency: 'PKR',
    sku: 'PROD-LEAGUE-OF-LEGENDS-RP-TOP-',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["RP", "League of Legends RP", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'RP Recharge',
    featured: false,
    rating: 4.5,
    reviewCount: 10,
    salesCount: 0,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '10040 RP',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-league-of-legends-rp-top-up-4500-rp',
    title: "4500 RP \u2014 League of Legends RP Top-Up",
    slug: '4500-rp-league-of-legends-rp-top-up',
    shortDescription: "Official League of Legends RP Top-Up \u2014 instant delivery of 4500 RP directly to your account.",
    description: "Verified League of Legends RP Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 4500 RP credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 10550,
    currency: 'PKR',
    sku: 'PROD-LEAGUE-OF-LEGENDS-RP-TOP-',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["RP", "League of Legends RP", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'RP Recharge',
    featured: false,
    rating: 4.5,
    reviewCount: 10,
    salesCount: 0,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '4500 RP',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-league-of-legends-rp-top-up-1380-rp',
    title: "1380 RP \u2014 League of Legends RP Top-Up",
    slug: '1380-rp-league-of-legends-rp-top-up',
    shortDescription: "Official League of Legends RP Top-Up \u2014 instant delivery of 1380 RP directly to your account.",
    description: "Verified League of Legends RP Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 1380 RP credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 2700,
    currency: 'PKR',
    sku: 'PROD-LEAGUE-OF-LEGENDS-RP-TOP-',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["RP", "League of Legends RP", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'RP Recharge',
    featured: false,
    rating: 4.5,
    reviewCount: 10,
    salesCount: 0,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '1380 RP',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-league-of-legends-rp-top-up-5020-rp',
    title: "5020 RP \u2014 League of Legends RP Top-Up",
    slug: '5020-rp-league-of-legends-rp-top-up',
    shortDescription: "Official League of Legends RP Top-Up \u2014 instant delivery of 5020 RP directly to your account.",
    description: "Verified League of Legends RP Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 5020 RP credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 11400,
    currency: 'PKR',
    sku: 'PROD-LEAGUE-OF-LEGENDS-RP-TOP-',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["RP", "League of Legends RP", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'RP Recharge',
    featured: false,
    rating: 4.5,
    reviewCount: 10,
    salesCount: 0,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '5020 RP',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-league-of-legends-rp-top-up-1380-rp',
    title: "1380 RP \u2014 League of Legends RP Top-Up",
    slug: '1380-rp-league-of-legends-rp-top-up',
    shortDescription: "Official League of Legends RP Top-Up \u2014 instant delivery of 1380 RP directly to your account.",
    description: "Verified League of Legends RP Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 1380 RP credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 2700,
    currency: 'PKR',
    sku: 'PROD-LEAGUE-OF-LEGENDS-RP-TOP-',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["RP", "League of Legends RP", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'RP Recharge',
    featured: false,
    rating: 4.5,
    reviewCount: 10,
    salesCount: 0,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '1380 RP',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-league-of-legends-rp-top-up-1380-rp',
    title: "1380 RP \u2014 League of Legends RP Top-Up",
    slug: '1380-rp-league-of-legends-rp-top-up',
    shortDescription: "Official League of Legends RP Top-Up \u2014 instant delivery of 1380 RP directly to your account.",
    description: "Verified League of Legends RP Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 1380 RP credited to your account within minutes.",
    type: 'GAME',
    status: 'PUBLISHED',
    price: 3350,
    currency: 'PKR',
    sku: 'PROD-LEAGUE-OF-LEGENDS-RP-TOP-',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["RP", "League of Legends RP", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'RP Recharge',
    featured: false,
    rating: 4.5,
    reviewCount: 10,
    salesCount: 0,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-games', name: 'Games & Top-Ups', slug: 'games', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '1380 RP',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-razer-gold-top-up-22500-rbx',
    title: "22500 Rbx \u2014 Razer Gold Top-Up",
    slug: '22500-rbx-razer-gold-top-up',
    shortDescription: "Official Razer Gold Top-Up \u2014 instant delivery of 22500 Rbx directly to your account.",
    description: "Verified Razer Gold Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 22500 Rbx credited to your account within minutes.",
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 25600,
    currency: 'PKR',
    sku: 'PROD-RAZER-GOLD-TOP-UP-22500-R',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Rbx", "Razer Gold", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Rbx Recharge',
    featured: false,
    rating: 4.85,
    reviewCount: 70,
    salesCount: 354,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '22500 Rbx',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-razer-gold-top-up-32500-rbx',
    title: "32500 Rbx \u2014 Razer Gold Top-Up",
    slug: '32500-rbx-razer-gold-top-up',
    shortDescription: "Official Razer Gold Top-Up \u2014 instant delivery of 32500 Rbx directly to your account.",
    description: "Verified Razer Gold Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 32500 Rbx credited to your account within minutes.",
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 35200,
    currency: 'PKR',
    sku: 'PROD-RAZER-GOLD-TOP-UP-32500-R',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Rbx", "Razer Gold", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Rbx Recharge',
    featured: false,
    rating: 4.66,
    reviewCount: 31,
    salesCount: 159,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '32500 Rbx',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-razer-gold-top-up-10000-rbx',
    title: "10000 Rbx \u2014 Razer Gold Top-Up",
    slug: '10000-rbx-razer-gold-top-up',
    shortDescription: "Official Razer Gold Top-Up \u2014 instant delivery of 10000 Rbx directly to your account.",
    description: "Verified Razer Gold Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 10000 Rbx credited to your account within minutes.",
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 5700,
    currency: 'PKR',
    sku: 'PROD-RAZER-GOLD-TOP-UP-10000-R',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Rbx", "Razer Gold", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Rbx Recharge',
    featured: false,
    rating: 5.0,
    reviewCount: 132,
    salesCount: 664,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '10000 Rbx',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-razer-gold-top-up-4500-rbx',
    title: "4500 Rbx \u2014 Razer Gold Top-Up",
    slug: '4500-rbx-razer-gold-top-up',
    shortDescription: "Official Razer Gold Top-Up \u2014 instant delivery of 4500 Rbx directly to your account.",
    description: "Verified Razer Gold Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 4500 Rbx credited to your account within minutes.",
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 4250,
    currency: 'PKR',
    sku: 'PROD-RAZER-GOLD-TOP-UP-4500-RB',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Rbx", "Razer Gold", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Rbx Recharge',
    featured: false,
    rating: 5.0,
    reviewCount: 166,
    salesCount: 830,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '4500 Rbx',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-razer-gold-top-up-3700-rbx',
    title: "3700 Rbx \u2014 Razer Gold Top-Up",
    slug: '3700-rbx-razer-gold-top-up',
    shortDescription: "Official Razer Gold Top-Up \u2014 instant delivery of 3700 Rbx directly to your account.",
    description: "Verified Razer Gold Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 3700 Rbx credited to your account within minutes.",
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 5700,
    currency: 'PKR',
    sku: 'PROD-RAZER-GOLD-TOP-UP-3700-RB',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Rbx", "Razer Gold", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Rbx Recharge',
    featured: false,
    rating: 4.64,
    reviewCount: 28,
    salesCount: 142,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '3700 Rbx',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-razer-gold-top-up-3400-rbx',
    title: "3400 Rbx \u2014 Razer Gold Top-Up",
    slug: '3400-rbx-razer-gold-top-up',
    shortDescription: "Official Razer Gold Top-Up \u2014 instant delivery of 3400 Rbx directly to your account.",
    description: "Verified Razer Gold Top-Up top-up with instant direct recharge to your Player ID. Secure payment via JazzCash, EasyPaisa, Raast, or wallet balance. Receive exactly 3400 Rbx credited to your account within minutes.",
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 6150,
    currency: 'PKR',
    sku: 'PROD-RAZER-GOLD-TOP-UP-3400-RB',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Gamepad2'
    },
    tags: ["Rbx", "Razer Gold", "Instant Top-Up", "Direct Recharge"],
    licenseType: 'Instant Digital Delivery',
    version: 'Rbx Recharge',
    featured: false,
    rating: 4.54,
    reviewCount: 10,
    salesCount: 41,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Amount': '3400 Rbx',
      'Delivery': 'Instant Direct Top-Up',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant direct recharge to your Player ID',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global account top-up — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'INSTANT_KEY'
  }
,
  // =================================================================
  // VIDEO STREAMING + AI TOOLS (verified market prices — +10% profit margin)
  // =================================================================
  {
    id: 'prod-netflix-premium-uhd-4k-1-month-shared-ac',
    title: 'Netflix Premium UHD 4K — 1 Month Shared Account',
    slug: 'netflix-premium-uhd-4k-1-month-shared-account',
    shortDescription: 'Watch Netflix in stunning 4K Ultra HD with 4 simultaneous screens on the Premium plan.',
    description: 'Premium Netflix account upgrade to the UHD 4K plan with 4 simultaneous streams. Includes access to Netflix Originals, movies, TV shows, and mobile games. Verified shared account access with instant delivery.',
    type: 'STREAMING',
    status: 'PUBLISHED',
    price: 2450,
    currency: 'PKR',
    sku: 'NETFLIX-PREMIUM-4K-1M',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Tv'
    },
    tags: ['Netflix', '4K UHD', 'Streaming', 'Premium Plan'],
    licenseType: 'Instant Digital Delivery',
    version: '1 Month Premium',
    featured: false,
    rating: 4.95,
    reviewCount: 120,
    salesCount: 450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-streaming', name: 'Video Streaming', slug: 'streaming', icon: 'Tv', color: '#ec4899' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Plan': '1 Month Premium',
      'Delivery': 'Instant Account Access',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant account upgrade or shared access',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global access — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-spotify-premium-individual-1-month-subsc',
    title: 'Spotify Premium Individual — 1 Month Subscription',
    slug: 'spotify-premium-individual-1-month-subscription',
    shortDescription: 'Ad-free music streaming with offline downloads and high-quality audio.',
    description: 'Spotify Premium individual account upgrade with ad-free listening, unlimited skips, offline downloads, and high-fidelity audio streaming on up to 1 device at a time.',
    type: 'STREAMING',
    status: 'PUBLISHED',
    price: 3100,
    currency: 'PKR',
    sku: 'SPOTIFY-PREMIUM-1M',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Tv'
    },
    tags: ['Spotify', 'Premium', 'Music', 'Ad-free'],
    licenseType: 'Instant Digital Delivery',
    version: '1 Month Premium',
    featured: false,
    rating: 4.95,
    reviewCount: 120,
    salesCount: 450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-streaming', name: 'Video Streaming', slug: 'streaming', icon: 'Tv', color: '#ec4899' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Plan': '1 Month Premium',
      'Delivery': 'Instant Account Access',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant account upgrade or shared access',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global access — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-youtube-premium-family-1-month-subscript',
    title: 'YouTube Premium Family — 1 Month Subscription',
    slug: 'youtube-premium-family-1-month-subscription',
    shortDescription: 'Ad-free YouTube, YouTube Music, and offline downloads for up to 5 family members.',
    description: 'YouTube Premium Family plan with ad-free YouTube access, YouTube Music Premium, background play, and offline downloads for up to 5 family members in the same household.',
    type: 'STREAMING',
    status: 'PUBLISHED',
    price: 4600,
    currency: 'PKR',
    sku: 'YOUTUBE-PREMIUM-FAMILY-1M',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Tv'
    },
    tags: ['YouTube', 'Premium', 'Family', 'Music'],
    licenseType: 'Instant Digital Delivery',
    version: '1 Month Family',
    featured: false,
    rating: 4.95,
    reviewCount: 120,
    salesCount: 450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-streaming', name: 'Video Streaming', slug: 'streaming', icon: 'Tv', color: '#ec4899' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Plan': '1 Month Family',
      'Delivery': 'Instant Account Access',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant account upgrade or shared access',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global access — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-disney-premium-1-month-4k-access',
    title: 'Disney+ Premium — 1 Month 4K Access',
    slug: 'disney-premium-1-month-4k-access',
    shortDescription: 'Stream Disney, Pixar, Marvel, Star Wars, and National Geographic in 4K UHD.',
    description: 'Disney+ Premium account with 4K Ultra HD streaming, 4 simultaneous screens, and downloads on up to 10 devices. Includes the full Disney, Pixar, Marvel, Star Wars, and Nat Geo catalog.',
    type: 'STREAMING',
    status: 'PUBLISHED',
    price: 3400,
    currency: 'PKR',
    sku: 'DISNEY-PLUS-PREMIUM-1M',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Tv'
    },
    tags: ['Disney+', '4K UHD', 'Streaming', 'Premium'],
    licenseType: 'Instant Digital Delivery',
    version: '1 Month Premium',
    featured: false,
    rating: 4.95,
    reviewCount: 120,
    salesCount: 450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-streaming', name: 'Video Streaming', slug: 'streaming', icon: 'Tv', color: '#ec4899' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Plan': '1 Month Premium',
      'Delivery': 'Instant Account Access',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant account upgrade or shared access',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global access — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-chatgpt-plus-gpt-4o-1-month-private-acce',
    title: 'ChatGPT Plus (GPT-4o) — 1 Month Private Access',
    slug: 'chatgpt-plus-gpt-4o-1-month-private-access',
    shortDescription: 'OpenAI ChatGPT Plus with GPT-4o, DALL-E 3, Advanced Voice Mode, and Custom GPTs.',
    description: 'ChatGPT Plus 1-month private access with priority access to GPT-4o multimodal vision, DALL-E 3 image generation, Advanced Voice live conversational mode, real-time web browsing, and custom GPT builder. No token limits.',
    type: 'AI_TOOL',
    status: 'PUBLISHED',
    price: 6150,
    currency: 'PKR',
    sku: 'CHATGPT-PLUS-1M',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Sparkles'
    },
    tags: ['ChatGPT Plus', 'GPT-4o', 'OpenAI', 'AI'],
    licenseType: 'Instant Digital Delivery',
    version: '1 Month Plus',
    featured: false,
    rating: 4.95,
    reviewCount: 120,
    salesCount: 450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-ai', name: 'AI Tools', slug: 'ai-tools', icon: 'Sparkles', color: '#10b981' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Plan': '1 Month Plus',
      'Delivery': 'Instant Account Access',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant account upgrade or shared access',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global access — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-claude-3-5-sonnet-pro-1-month-access',
    title: 'Claude 3.5 Sonnet Pro — 1 Month Access',
    slug: 'claude-3-5-sonnet-pro-1-month-access',
    shortDescription: 'Anthropic Claude Pro with 200K token context window, advanced reasoning, and coding intelligence.',
    description: 'Claude Pro 1-month access with 5x higher usage capacity, 200K token context window for massive document analysis, priority access during peak periods, and advanced coding intelligence for programming tasks.',
    type: 'AI_TOOL',
    status: 'PUBLISHED',
    price: 6150,
    currency: 'PKR',
    sku: 'CLAUDE-PRO-1M',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Sparkles'
    },
    tags: ['Claude Pro', 'Anthropic', 'AI', 'Coding'],
    licenseType: 'Instant Digital Delivery',
    version: '1 Month Pro',
    featured: false,
    rating: 4.95,
    reviewCount: 120,
    salesCount: 450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-ai', name: 'AI Tools', slug: 'ai-tools', icon: 'Sparkles', color: '#10b981' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Plan': '1 Month Pro',
      'Delivery': 'Instant Account Access',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant account upgrade or shared access',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global access — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-gemini-advanced-google-one-ai-premium-1-',
    title: 'Gemini Advanced (Google One AI Premium) — 1 Month',
    slug: 'gemini-advanced-google-one-ai-premium-1-month',
    shortDescription: 'Google Gemini 1.5 Pro with 2TB Google One storage and integration with Workspace.',
    description: 'Gemini Advanced 1-month access via Google One AI Premium plan. Includes Gemini 1.5 Pro with 1M token context, integration with Gmail, Docs, and Sheets, plus 2TB Google One cloud storage.',
    type: 'AI_TOOL',
    status: 'PUBLISHED',
    price: 6150,
    currency: 'PKR',
    sku: 'GEMINI-ADVANCED-1M',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Sparkles'
    },
    tags: ['Gemini', 'Google One', 'AI', '2TB Storage'],
    licenseType: 'Instant Digital Delivery',
    version: '1 Month Advanced',
    featured: false,
    rating: 4.95,
    reviewCount: 120,
    salesCount: 450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-ai', name: 'AI Tools', slug: 'ai-tools', icon: 'Sparkles', color: '#10b981' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Plan': '1 Month Advanced',
      'Delivery': 'Instant Account Access',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant account upgrade or shared access',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global access — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-cursor-pro-ai-code-editor-1-month-develo',
    title: 'Cursor Pro AI Code Editor — 1 Month Developer Key',
    slug: 'cursor-pro-ai-code-editor-1-month-developer-key',
    shortDescription: 'Unlimited fast Claude 3.5 & GPT-4o autocomplete, full codebase chat, and terminal agent.',
    description: 'Cursor Pro 1-month developer key with 500 fast premium requests per month, unlimited slow requests, full codebase indexing, multi-file edits, and instant AI-powered bug fixes built on VS Code.',
    type: 'AI_TOOL',
    status: 'PUBLISHED',
    price: 6150,
    currency: 'PKR',
    sku: 'CURSOR-PRO-1M',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1f2937', '#374151'],
      icon: 'Sparkles'
    },
    tags: ['Cursor', 'AI Code Editor', 'Developer', 'Claude'],
    licenseType: 'Instant Digital Delivery',
    version: '1 Month Pro',
    featured: false,
    rating: 4.95,
    reviewCount: 120,
    salesCount: 450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-ai', name: 'AI Tools', slug: 'ai-tools', icon: 'Sparkles', color: '#10b981' },
    sourceUrl: 'https://playbeat.digital',
    specs: {
      'Plan': '1 Month Pro',
      'Delivery': 'Instant Account Access',
      'Region': 'GLOBAL',
      'Payment': 'JazzCash, EasyPaisa, Raast, Wallet',
      'Processing Time': 'Under 5 minutes'
    },
    features: [
      'Instant account upgrade or shared access',
      'Secure payment via JazzCash, EasyPaisa, Raast or wallet',
      'Verified global access — works in all regions',
      '24/7 WhatsApp + Telegram support'
    ],
    deliveryType: 'ACCOUNT_INVITE'
  }

];

export const INITIAL_COUPONS: Coupon[] = [
  { id: 'c-playbeat10', code: 'PLAYBEAT10', discountPercent: 10, minSpendPKR: 2000 },
  { id: 'c-playbeat-5', code: 'PLAYBEAT5', discountPercent: 5, minSpendPKR: 15000 },
  { id: 'c-flashsale', code: 'FLASH20', discountPercent: 20, minSpendPKR: 5000 }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: 'n1', title: 'Order Verified', message: 'Magcubic HY300 PRO parcel dispatched via TCS Express #TCS-892182', type: 'ORDER', createdAt: '10m ago', read: false },
  { id: 'n2', title: 'New Arrival', message: 'Magcubic HY300Pro Plus with motorized focus now in stock at PlayBeat digital.', type: 'SYSTEM', createdAt: '1h ago', read: false }
];

export const DEMO_USER: User = {
  id: 'u-admin-1',
  name: 'PlayBeat Super Admin',
  email: 'admin@playbeat.digital',
  role: 'ADMIN',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  balancePKR: 245000
};

export const INITIAL_USERS: User[] = [
  DEMO_USER,
  {
    id: 'u-cust-1',
    name: 'Hamza Khan',
    email: 'hamza.k@gmail.com',
    role: 'CUSTOMER',
    balancePKR: 12000
  }
];
