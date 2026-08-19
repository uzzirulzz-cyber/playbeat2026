import { Product, Category, Coupon, NotificationItem, User } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'cat-all', name: 'All Products', slug: 'all', description: 'Browse our entire verified catalog of ZeroByte smart projectors', icon: 'Grid', color: '#6366f1', productCount: 7 },
  { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', description: 'Magcubic HY300, HY320, HM103-A, HCS350-Pro, HT23, HY7 — verified ZeroByte 4K cinema projectors', icon: 'Projector', color: '#fcb800', productCount: 7 }
];

export const INITIAL_PRODUCTS: Product[] = [
  // =================================================================
  // 7 VERIFIED SMART PROJECTORS (ZeroByte Store Catalog — playbeatdigital.store)
  // Prices sourced directly from playbeatdigital.store / zerobyte.store
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
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80',
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
    vendor: { id: 'v-zerobyte', storeName: 'ZeroByte Official Store', slug: 'zerobyte-store', verified: true, rating: 4.96, salesCount: 4200 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://www.zerobyte.store/products/hy300-pro',
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
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
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
    vendor: { id: 'v-zerobyte', storeName: 'ZeroByte Official Store', slug: 'zerobyte-store', verified: true, rating: 4.96, salesCount: 4200 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://www.zerobyte.store/products/hy300-plus',
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
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80',
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
    vendor: { id: 'v-zerobyte', storeName: 'ZeroByte Official Store', slug: 'zerobyte-store', verified: true, rating: 4.96, salesCount: 4200 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://www.zerobyte.store/products/hy300pro',
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
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=80',
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
    vendor: { id: 'v-zerobyte', storeName: 'ZeroByte Official Store', slug: 'zerobyte-store', verified: true, rating: 4.96, salesCount: 4200 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://www.zerobyte.store/products/ht23',
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
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80',
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
    vendor: { id: 'v-zerobyte', storeName: 'ZeroByte Official Store', slug: 'zerobyte-store', verified: true, rating: 4.96, salesCount: 4200 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://www.zerobyte.store/products/hcs350-pro',
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
      image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=1000&q=80',
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
    vendor: { id: 'v-zerobyte', storeName: 'ZeroByte Official Store', slug: 'zerobyte-store', verified: true, rating: 4.96, salesCount: 4200 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://www.zerobyte.store/products/hm103-a',
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
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=80',
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
    vendor: { id: 'v-zerobyte', storeName: 'ZeroByte Official Store', slug: 'zerobyte-store', verified: true, rating: 4.96, salesCount: 4200 },
    category: { id: 'cat-projectors', name: 'Smart Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://www.zerobyte.store/products/hy7-battery',
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
  }
];

export const INITIAL_COUPONS: Coupon[] = [
  { id: 'c-playbeat10', code: 'PLAYBEAT10', discountPercent: 10, minSpendPKR: 2000 },
  { id: 'c-zerobyte', code: 'ZEROBYTE5', discountPercent: 5, minSpendPKR: 15000 },
  { id: 'c-flashsale', code: 'FLASH20', discountPercent: 20, minSpendPKR: 5000 }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: 'n1', title: 'Order Verified', message: 'Magcubic HY300 PRO parcel dispatched via TCS Express #TCS-892182', type: 'ORDER', createdAt: '10m ago', read: false },
  { id: 'n2', title: 'New Arrival', message: 'Magcubic HY300Pro Plus with motorized focus now in stock at ZeroByte store.', type: 'SYSTEM', createdAt: '1h ago', read: false }
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
