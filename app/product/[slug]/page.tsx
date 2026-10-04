import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductBySlug, getProducts, getServices } from '@/lib/api/wordpress';
import ProductDetailClient from '@/components/product/ProductDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: 'Product Not Found | Dark Mafia Customs' };

  return {
    title: `${product.name} | Dark Mafia Customs`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | Dark Mafia Customs`,
      description: product.shortDescription,
      images: [{ url: product.images[0] || '/images/dark-mafia-logo.png' }]
    }
  };
}

export const revalidate = 1800; // 30 mins

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const allProducts = await getProducts();
  const allServices = await getServices();

  const relatedProducts = allProducts.filter(p => p.id !== product.id).slice(0, 3);
  const relatedServices = allServices.slice(0, 2);

  const productJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': product.name,
    'image': product.images,
    'description': product.description,
    'sku': product.sku,
    'offers': {
      '@type': 'Offer',
      'url': `https://darkmafiacustoms.com/product/${product.slug}`,
      'priceCurrency': 'INR',
      'price': product.salePrice ?? product.price,
      'availability': product.stockStatus === 'instock' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      'itemCondition': 'https://schema.org/NewCondition'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': product.rating,
      'reviewCount': product.reviewCount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <ProductDetailClient
        product={product}
        relatedProducts={relatedProducts}
        relatedServices={relatedServices}
      />
    </>
  );
}
