import type { Metadata, Viewport } from 'next';
import './globals.css';
import { GarageProvider } from '@/lib/context/garage-context';
import { CartProvider } from '@/lib/context/cart-context';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import MobileBottomDock from '@/components/layout/MobileBottomDock';

export const metadata: Metadata = {
  title: {
    default: 'Dark Mafia Customs | Modified Vehicles & Lighting (Cars & Bikes)',
    template: '%s | Dark Mafia Customs'
  },
  description: 'Premium automotive lighting, DSR Bi-LED projector retrofits, app-controlled Devil Eyes, dynamic DRL upgrades, and bespoke vehicle customization for cars and bikes across India.',
  keywords: [
    'Dark Mafia Customs',
    'DSR Lights',
    'Bi-LED Projectors',
    'Devil Eyes Installation',
    'Custom Headlight Modifications',
    'Headlight Restoration',
    'DRL Upgrades',
    'Fog Lamp Projector',
    'Car Accessories India',
    'Superbike Lighting'
  ],
  authors: [{ name: 'Dark Mafia Customs' }],
  creator: 'Dark Mafia Customs',
  publisher: 'Dark Mafia Customs',
  metadataBase: new URL('https://darkmafiacustoms.com'),
  openGraph: {
    title: 'Dark Mafia Customs | Modified Vehicles & Lighting',
    description: 'High-performance DSR automotive lighting, Bi-LED retrofits, devil eyes, and bespoke customization for cars and bikes.',
    url: 'https://darkmafiacustoms.com',
    siteName: 'Dark Mafia Customs',
    images: [
      {
        url: '/images/dark-mafia-logo.png',
        width: 800,
        height: 800,
        alt: 'Dark Mafia Customs Logo',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport: Viewport = {
  themeColor: '#08080A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    'name': 'Dark Mafia Customs',
    'image': 'https://darkmafiacustoms.com/images/dark-mafia-logo.png',
    'description': 'Premier automotive lighting and custom vehicle modification studio specializing in Bi-LED projector retrofits, devil eyes, and bespoke styling.',
    'telephone': '+91-9876543210',
    'address': {
      '@type': 'PostalAddress',
      'addressCountry': 'IN'
    },
    'priceRange': '₹₹',
    'currenciesAccepted': 'INR',
    'paymentAccepted': 'Cash, Credit Card, UPI, NetBanking'
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-pitch-950 text-white min-h-screen flex flex-col antialiased selection:bg-cyan selection:text-black">
        <GarageProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <CartDrawer />
            <MobileBottomDock />
            <Footer />
          </CartProvider>
        </GarageProvider>
      </body>
    </html>
  );
}
