# PlayBeat Digital — Premium Digital Goods Marketplace

A production-ready, fully responsive e-commerce marketplace for verified software keys, streaming passes, AI tools, smart projectors, game keys, and digital gift cards. Built with Next.js 16, TypeScript, Tailwind CSS 4, and MongoDB Atlas.

> Live storefront: `playbeat.digital` · Pakistan's premier digital goods marketplace.

---

## ✨ Features

### Storefront
- **Fully responsive** — mobile-first design with hamburger menu, full-screen mobile search, and 2-column product grid on small screens
- **Premium hero section** with live search, trust indicators, and stats
- **Featured categories** — Smart Projectors, Software Licenses, IPTV 4K, AI Tools, Gaming & Gift Cards
- **Flash deals** with live countdown timer
- **Limited-time offers**, trending products, and best-sellers sections
- **Smart projectors showcase** with filter tabs (Magcubic, Flagship, Battery, Budget)
- **Product catalog** with category pills, type filter, sort dropdown, and live search
- **Cart drawer** with multi-gateway checkout (JazzCash, Easypaisa, Bank, Raast, Card, Wallet)
- **Instant license key delivery** on successful payment
- **Customer dashboard**, wishlist, order lookup, and invoice modal
- **Multi-channel support** — WhatsApp (primary + secondary), Telegram, WeChat

### Admin Console (`#admin`)
- Dashboard with revenue trends, order breakdown, traffic sources
- Catalog & inventory management (CRUD)
- Orders, subscriptions, coupons, users, support tickets
- Finance, payment gateways, payment proofs
- Audit logs, analytics, website builder CMS
- WooCommerce, JazzCash, TikTok leads, email, social media views

### Theme System
Five built-in themes selectable from the navbar:
- Martfury Yellow (default)
- Cyber Obsidian
- Titanium Light
- Neon Cyberpunk
- Emerald FinTech

---

## 🛠 Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui (New York) + Lucide icons |
| Database | MongoDB Atlas (Mongoose ODM) |
| State | React Context + localStorage persistence |
| Fonts | Outfit (headings), Plus Jakarta Sans (body), JetBrains Mono (code) |

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
bun install
# or
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env and add your MongoDB Atlas connection string
```

### 3. Run the dev server

```bash
bun run dev
# or
npm run dev
```

Open <http://localhost:3000> in your browser.

### 4. Seed the database (optional)

If your MongoDB cluster is empty, the catalog is auto-seeded from `src/data/initialData.ts` on first load. You can also force a re-sync:

```bash
curl -X POST http://localhost:3000/api/db/sync
```

---

## 🔌 API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/api/health` | MongoDB connection status |
| `GET` | `/api/products?category=&type=&search=` | List products (with filters) |
| `GET` | `/api/products/:id` | Get single product |
| `POST` | `/api/products` | Create product (admin) |
| `PUT` | `/api/products/:id` | Update product (admin) |
| `DELETE` | `/api/products/:id` | Delete product (admin) |
| `GET` | `/api/orders?email=` | List orders |
| `POST` | `/api/orders` | Create order (auto-generates license keys) |
| `GET` | `/api/categories` | List categories |
| `GET` | `/api/coupons` | List coupons |
| `POST` | `/api/db/sync` | Re-seed catalog from `initialData.ts` |

All endpoints gracefully fall back to bundled seed data if MongoDB is unreachable.

---

## 📞 Contact Channels

| Channel | Handle |
|---|---|
| WhatsApp (Primary) | +92 332 1029333 |
| WhatsApp (Secondary) | +92 334 1079333 |
| Telegram | @playbeatdigital |
| WeChat | playbeatdigital |
| Email (General) | info@playbeat.digital |
| Email (Support) | support@playbeat.digital |

---

## 🔐 Admin Access

The admin panel is at `/#admin`. Login credentials are validated server-side and are **never** displayed in the UI. To override the defaults, set `ADMIN_EMAIL` and `ADMIN_PASSWORD` environment variables.

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/                # API routes (health, products, orders, ...)
│   ├── globals.css         # PlayBeat theme + shadcn tokens
│   ├── layout.tsx          # Root layout (fonts, viewport, metadata)
│   └── page.tsx            # Storefront entry
├── components/             # React components
│   ├── admin/              # Admin console views
│   ├── ui/                 # shadcn/ui primitives
│   ├── Navbar.tsx          # Mobile-friendly navbar with hamburger menu
│   ├── HeroSectionPremium.tsx
│   ├── ProductCard.tsx
│   ├── CartDrawer.tsx
│   ├── Footer.tsx
│   ├── WhatsAppFloatingButton.tsx   # Multi-channel contact FAB
│   └── ...
├── data/                   # Seed data (products, categories, coupons)
├── lib/                    # MongoDB connection + utils
├── server/                 # Mongoose models + seed function
├── store/                  # React Context store (SSR-safe)
└── types.ts                # TypeScript types
```

---

## 📝 License

Proprietary — © PlayBeat Digital. All rights reserved.
