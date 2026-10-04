# DARK MAFIA CUSTOMS — Premium Automotive Ecommerce & Customization Platform
### Built with Next.js 15 (App Router), React 19, TypeScript & Tailwind CSS
### Headless WordPress + WooCommerce Architecture

---

## ⚡ Overview
**Dark Mafia Customs** is a bespoke automotive lighting and performance customization platform engineered for **Cars** and **Motorcycles (Bikes)** across India.

- **Frontend**: Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS
- **CMS**: WordPress 6.x (Custom Post Types: Services, Vehicles, Builds, Enquiries)
- **Ecommerce Engine**: WooCommerce REST API (Products, Variations, Inventory, Orders, Cart)
- **Database**: MySQL on Hostinger

---

## 🏎️ The 7 Certified Customization Services
Derived strictly from the official Dark Mafia Customs service blueprint:
1. **Headlight Restoration**: Multi-stage wet sanding, compound polishing, and aerospace UV clear coat sealing.
2. **Custom Headlight Modifications**: Bespoke housings, dynamic sequential indicators, internal shroud paint styling.
3. **Devil Eyes Installation**: Smartphone app-controlled Bluetooth RGB Demon Eyes with auto-cutoff safety triggers.
4. **DRL Upgrades & Installation**: High-density dotless silicone DRL light pipes with ceremonial startup greeting sweeps.
5. **LED Projector Retrofits**: Converting stock reflectors to high-output 75W Bi-LED optical projectors with razor cutoffs.
6. **Fog Lamp Upgrades**: Submersible IP68 waterproof die-cast aluminum Bi-LED fog light projectors with dual high/low beams.
7. **Vehicle Styling & Aesthetics**: Precision de-chroming stealth black-out packages, carbon fiber wraps, and 64-color ambient interior cockpits.

---

## 🛠️ Key Features
- **Vehicle Finder**: Cascading Make ➔ Model ➔ Generation ➔ Year compatibility filter with persistent garage memory.
- **"Build Your Ride" Configurator**: 5-step signature vehicle builder calculating real-time parts + labor estimates with 1-click cart/quote export.
- **Before/After Transformation Slider**: Interactive comparison tool contrasting stock OEM reflectors with Dark Mafia Bi-LED beams.
- **Completed Builds Portfolio**: Deep-dive transformation stories linking directly to WooCommerce parts and booking services.
- **Automotive Knowledge Hub (AEO/GEO)**: Direct-answer technical guides optimized for AI search engines (Perplexity, Google, ChatGPT).
- **Headless Checkout & Sliding Cart**: Instant cart drawer with *"Recommended for your build"* cross-sells and multi-step checkout (UPI, Cards, COD).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Node.js 20+ or 24 LTS recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/anishilluz/darkmafia.git
cd darkmafia
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```

---

## 🌐 Environment Variables (Hostinger Deployment)
Copy `.env.example` to `.env.local` or configure in your deployment dashboard:
```bash
NEXT_PUBLIC_WORDPRESS_URL=https://cms.yourdomain.com
WC_CONSUMER_KEY=ck_xxxxxxxxxxxxxxxxxxxxxxxx
WC_CONSUMER_SECRET=cs_xxxxxxxxxxxxxxxxxxxxxxxx
REVALIDATION_SECRET=dmc_super_secure_revalidation_secret_2026
NEXT_PUBLIC_SITE_URL=https://www.darkmafiacustoms.com
```

---

## 📄 License
© 2026 Dark Mafia Customs. All rights reserved.
