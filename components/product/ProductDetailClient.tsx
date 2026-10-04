'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Sparkles,
  Share2,
  Check
} from 'lucide-react';
import { Product, Service } from '@/types';
import { formatINR } from '@/lib/utils';
import { useGarage } from '@/lib/context/garage-context';
import { useCart } from '@/lib/context/cart-context';
import { VEHICLES_DATABASE } from '@/lib/data';

export default function ProductDetailClient({ 
  product, 
  relatedProducts, 
  relatedServices 
}: { 
  product: Product; 
  relatedProducts: Product[]; 
  relatedServices: Service[]; 
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [includeInstallation, setIncludeInstallation] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const { activeVehicle, checkFitment, selectVehicle } = useGarage();
  const { addItem } = useCart();

  const fitment = checkFitment(product.compatibleVehicleIds, product.isUniversal);
  const currentPrice = product.salePrice ?? product.price;
  const installationCost = 2500; // Standard labor add-on option

  const handleAddToCart = () => {
    addItem(
      product, 
      quantity, 
      includeInstallation ? { id: 'prof-install', name: 'Professional Retrofit Installation', price: installationCost } : undefined
    );
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-xs font-mono text-chrome-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-white">Shop</Link>
          <span>/</span>
          <span className="text-cyan truncate max-w-xs">{product.name}</span>
        </div>

        {/* Product Master Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-pitch-900 border border-pitch-800 shadow-2xl">
              <Image
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              {product.onSale && (
                <div className="absolute top-4 left-4 bg-devil text-white font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  SALE DISCOUNT
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {product.images.length > 1 && (
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative w-24 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      selectedImage === idx ? 'border-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)]' : 'border-pitch-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} thumb ${idx}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Guaranteed Fitment Banner in Left Column */}
            <div className={`p-5 rounded-2xl border ${
              fitment.badgeColor === 'emerald'
                ? 'bg-emerald-950/20 border-emerald-500/40'
                : fitment.badgeColor === 'rose'
                ? 'bg-rose-950/20 border-rose-500/40'
                : 'bg-pitch-900 border-pitch-800'
            }`}>
              <div className="flex items-start space-x-3.5">
                {fitment.badgeColor === 'emerald' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                ) : fitment.badgeColor === 'rose' ? (
                  <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-cyan flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    Vehicle Compatibility Status
                  </h4>
                  <p className="text-xs text-chrome-300 mt-0.5">
                    {fitment.statusText}
                  </p>
                  {!activeVehicle && (
                    <div className="mt-2 flex items-center space-x-2">
                      <select
                        onChange={(e) => selectVehicle(e.target.value)}
                        className="bg-pitch-950 border border-pitch-700 rounded-lg px-2.5 py-1 text-xs text-white"
                        defaultValue=""
                      >
                        <option value="" disabled>Select your vehicle to test fit</option>
                        {VEHICLES_DATABASE.map(v => (
                          <option key={v.id} value={v.id}>{v.make} {v.model} ({v.generation})</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Purchasing & Specifications */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Title & SKU */}
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-chrome-400 mb-2">
                <span>SKU: {product.sku}</span>
                <button onClick={handleShare} className="flex items-center space-x-1 hover:text-cyan transition-colors">
                  {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copiedLink ? 'Copied' : 'Share'}</span>
                </button>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-tight leading-snug">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-white">{product.rating}</span>
                <span className="text-xs text-chrome-400">({product.reviewCount} verified reviews)</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-extrabold text-white font-mono">
                  {formatINR(currentPrice)}
                </span>
                {product.onSale && (
                  <span className="text-base text-chrome-500 line-through font-mono">
                    {formatINR(product.regularPrice)}
                  </span>
                )}
                {product.onSale && (
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Save {Math.round(((product.regularPrice - currentPrice) / product.regularPrice) * 100)}%
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-4 text-xs text-chrome-400 pt-1">
                <span className="flex items-center space-x-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>In Stock ({product.stockQuantity} units available)</span>
                </span>
                <span>•</span>
                <span>Taxes Included</span>
              </div>
            </div>

            {/* Optional Professional Installation Add-on Toggle */}
            <div className="p-4 rounded-xl bg-pitch-900/60 border border-purple/40 space-y-2">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeInstallation}
                  onChange={(e) => setIncludeInstallation(e.target.checked)}
                  className="mt-1 rounded border-pitch-700 text-purple focus:ring-purple bg-pitch-950 w-4 h-4"
                />
                <div className="flex-1 text-xs">
                  <div className="font-bold text-white flex justify-between">
                    <span>Include Professional Workshop Installation</span>
                    <span className="text-purple font-mono">+{formatINR(installationCost)}</span>
                  </div>
                  <p className="text-chrome-400 text-[11px] mt-0.5">
                    Oven-sealed assembly, laser beam cutoff alignment, and zero-condensation warranty in our studio.
                  </p>
                </div>
              </label>
            </div>

            {/* Quantity & Add to Cart Controls */}
            <div className="space-y-3 pt-2">
              <div className="flex space-x-4">
                {/* Quantity */}
                <div className="flex items-center bg-pitch-900 border border-pitch-700 rounded-xl px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-chrome-400 hover:text-white px-2 py-1"
                  >
                    -
                  </button>
                  <span className="px-3 font-mono font-bold text-white text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-chrome-400 hover:text-white px-2 py-1"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-6 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)]"
                >
                  <ShoppingBag className="w-4 h-4 font-bold" />
                  <span>Add To Build Cart ({formatINR((currentPrice + (includeInstallation ? installationCost : 0)) * quantity)})</span>
                </button>
              </div>

              {/* Direct Customization Booking */}
              <Link
                href="/customization-request"
                className="w-full py-3 px-6 rounded-xl bg-pitch-900 hover:bg-pitch-800 text-chrome-200 border border-pitch-700 font-semibold text-xs flex items-center justify-center space-x-2 transition-colors"
              >
                <Wrench className="w-3.5 h-3.5 text-purple" />
                <span>Book Full Vehicle Customization with this Part</span>
              </Link>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-pitch-800 text-xs text-chrome-400">
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4 text-cyan flex-shrink-0" />
                <span>{product.shipping}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{product.warranty}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Specifications & Engineering Breakdown */}
        <div className="mt-16 pt-12 border-t border-pitch-800 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-xl font-bold text-white uppercase font-display tracking-wide mb-3">
                Engineering & Optical Overview
              </h2>
              <p className="text-sm text-chrome-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-base font-bold text-white uppercase font-display tracking-wide mb-3">
                Key Performance Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-chrome-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs Table */}
            <div>
              <h3 className="text-base font-bold text-white uppercase font-display tracking-wide mb-3">
                Technical Specifications
              </h3>
              <div className="rounded-xl border border-pitch-800 overflow-hidden bg-pitch-900/60 divide-y divide-pitch-800 text-xs">
                {product.specs.map((spec, idx) => (
                  <div key={idx} className="flex px-4 py-3">
                    <span className="w-1/3 font-mono text-chrome-400">{spec.label}</span>
                    <span className="w-2/3 font-semibold text-white">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Certified Services */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-base font-bold text-white uppercase font-display tracking-wide">
              Compatible Workshop Services
            </h3>
            <div className="space-y-4">
              {relatedServices.map((service) => (
                <div key={service.id} className="p-4 rounded-xl bg-pitch-900 border border-pitch-800 space-y-2">
                  <h4 className="text-xs font-bold text-white uppercase">
                    {service.title}
                  </h4>
                  <p className="text-[11px] text-chrome-400 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs text-cyan hover:underline font-semibold inline-flex items-center space-x-1"
                  >
                    <span>View Service Procedure</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
