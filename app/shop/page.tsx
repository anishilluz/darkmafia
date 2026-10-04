import React from 'react';
import { Metadata } from 'next';
import { getProducts } from '@/lib/api/wordpress';
import ShopClient from '@/components/shop/ShopClient';

export const metadata: Metadata = {
  title: 'Automotive Ecommerce Shop | Dark Mafia Customs',
  description: 'Shop premium DSR Bi-LED projector headlights, app-controlled Devil Eyes, waterproof fog lights, and high-temp ceramic wiring looms for cars and bikes.',
};

export const revalidate = 1800; // 30 min ISR

export default async function ShopPage() {
  const products = await getProducts();
  return <ShopClient initialProducts={products} />;
}
