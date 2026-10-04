'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star, CheckCircle, ShieldCheck } from 'lucide-react';
import { Product } from '@/types';
import { formatINR } from '@/lib/utils';
import { useGarage } from '@/lib/context/garage-context';
import { useCart } from '@/lib/context/cart-context';

export default function ProductCard({ product }: { product: Product }) {
  const { checkFitment, activeVehicle } = useGarage();
  const { addItem } = useCart();

  const fitment = checkFitment(product.compatibleVehicleIds, product.isUniversal);
  const currentPrice = product.salePrice ?? product.price;

  return (
    <div className="group rounded-2xl bg-pitch-900/90 border border-pitch-800 hover:border-cyan/60 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]">
      
      {/* Top Media & Badges */}
      <div className="relative aspect-[4/3] bg-pitch-950 overflow-hidden">
        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Category & Sale Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.onSale && (
            <span className="px-2.5 py-0.5 rounded-full bg-devil text-white font-black text-[10px] uppercase tracking-wider shadow-lg">
              SALE
            </span>
          )}
          <span className="px-2.5 py-0.5 rounded-full bg-pitch-950/80 backdrop-blur-md border border-pitch-700 text-chrome-300 font-mono text-[10px] uppercase">
            {product.categoryName}
          </span>
        </div>

        {/* Rating Pill */}
        <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-pitch-950/85 backdrop-blur-md border border-pitch-700 flex items-center space-x-1 text-[11px] text-amber-400 font-semibold">
          <Star className="w-3 h-3 fill-amber-400" />
          <span>{product.rating}</span>
          <span className="text-chrome-500 text-[10px]">({product.reviewCount})</span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Fitment Indicator */}
          <div className="mb-2">
            <span 
              className={`inline-flex items-center space-x-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${
                fitment.badgeColor === 'emerald'
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                  : fitment.badgeColor === 'rose'
                  ? 'border-rose-500/40 bg-rose-500/10 text-rose-400'
                  : 'border-pitch-700 bg-pitch-950 text-chrome-400'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                fitment.badgeColor === 'emerald' ? 'bg-emerald-400' : fitment.badgeColor === 'rose' ? 'bg-rose-400' : 'bg-chrome-400'
              }`} />
              <span className="truncate max-w-[200px]">{fitment.statusText}</span>
            </span>
          </div>

          <h3 className="text-sm font-bold text-white group-hover:text-cyan transition-colors line-clamp-2 leading-snug">
            <Link href={`/product/${product.slug}`}>
              {product.name}
            </Link>
          </h3>

          <p className="text-xs text-chrome-400 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="pt-3 border-t border-pitch-800/80 flex items-center justify-between">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-base font-extrabold text-white font-mono">
                {formatINR(currentPrice)}
              </span>
              {product.onSale && (
                <span className="text-xs text-chrome-500 line-through font-mono">
                  {formatINR(product.regularPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-400 font-medium">Free Express Shipping</span>
          </div>

          <button
            onClick={() => addItem(product, 1)}
            className="p-2.5 rounded-xl bg-cyan text-black hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)] flex items-center justify-center group-hover:scale-105"
            title="Add to Build Cart"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-4 h-4 font-bold" />
          </button>
        </div>
      </div>
    </div>
  );
}
