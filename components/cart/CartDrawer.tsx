'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useCart } from '@/lib/context/cart-context';
import { formatINR } from '@/lib/utils';
import { PRODUCTS_CATALOG } from '@/lib/data';

export default function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, subtotal, cartCount } = useCart();

  // Find relevant accessory cross-sells not already in cart
  const itemIds = new Set(items.map(i => i.product.id));
  const crossSellAccessories = PRODUCTS_CATALOG
    .filter(p => !itemIds.has(p.id))
    .slice(0, 2);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-pitch-950 border-l border-pitch-700/80 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 border-b border-pitch-800 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse"></span>
              <h2 className="text-base font-bold text-white tracking-wider font-display uppercase">
                Your Build Cart ({cartCount})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-lg text-chrome-400 hover:text-white hover:bg-pitch-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-pitch-900 border border-pitch-700 flex items-center justify-center mx-auto text-chrome-500">
                  <Sparkles className="w-8 h-8 text-cyan/40" />
                </div>
                <h3 className="text-sm font-semibold text-chrome-300">Your cart is currently empty</h3>
                <p className="text-xs text-chrome-500 max-w-xs mx-auto">
                  Browse our high-performance DSR lighting kits or launch the vehicle configurator.
                </p>
                <div className="pt-2">
                  <Link
                    href="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-block px-5 py-2.5 rounded-lg bg-cyan text-black font-bold text-xs uppercase tracking-wider hover:bg-cyan/90 transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                  >
                    Explore Shop Catalog
                  </Link>
                </div>
              </div>
            ) : (
              items.map((item) => {
                const currentPrice = item.product.salePrice ?? item.product.price;
                return (
                  <div 
                    key={item.product.id}
                    className="p-3.5 rounded-xl bg-pitch-900/80 border border-pitch-800 hover:border-pitch-700 transition-all flex space-x-3.5"
                  >
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-pitch-950 flex-shrink-0 border border-pitch-800">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-white line-clamp-1 hover:text-cyan">
                        <Link href={`/product/${item.product.slug}`} onClick={() => setIsCartOpen(false)}>
                          {item.product.name}
                        </Link>
                      </h4>
                      <p className="text-[10px] text-chrome-400 font-mono mt-0.5">
                        SKU: {item.product.sku}
                      </p>

                      {item.selectedServiceAddon && (
                        <div className="mt-1 px-2 py-0.5 rounded bg-purple/15 border border-purple/30 text-[10px] text-purple flex items-center justify-between">
                          <span>+ {item.selectedServiceAddon.name}</span>
                          <span className="font-semibold">{formatINR(item.selectedServiceAddon.price)}</span>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2 bg-pitch-950 rounded-lg border border-pitch-800 px-2 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="text-chrome-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono text-white font-bold px-1.5">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="text-chrome-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className="text-xs font-bold text-white font-mono">
                            {formatINR(currentPrice * item.quantity)}
                          </span>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-chrome-500 hover:text-devil transition-colors"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* "You May Also Need" Cross-Sell Section */}
            {items.length > 0 && crossSellAccessories.length > 0 && (
              <div className="pt-4 border-t border-pitch-800">
                <p className="text-[11px] font-mono uppercase text-chrome-400 tracking-wider mb-2 flex items-center space-x-1.5">
                  <Sparkles className="w-3 h-3 text-cyan" />
                  <span>Recommended for your build</span>
                </p>
                <div className="space-y-2">
                  {crossSellAccessories.map(acc => (
                    <div 
                      key={acc.id}
                      className="p-2.5 rounded-lg bg-pitch-900 border border-pitch-800 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2.5 min-w-0">
                        <div className="relative w-10 h-10 rounded overflow-hidden flex-shrink-0 bg-pitch-950">
                          <Image src={acc.images[0]} alt={acc.name} fill className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold text-white truncate">{acc.name}</div>
                          <div className="text-[10px] text-cyan font-mono">{formatINR(acc.price)}</div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          const { addItem } = useCart();
                          addItem(acc, 1);
                        }}
                        className="px-2.5 py-1 rounded bg-pitch-800 hover:bg-cyan hover:text-black text-chrome-200 text-[10px] font-semibold transition-all border border-pitch-700"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer & Checkout Call-to-action */}
          {items.length > 0 && (
            <div className="p-5 border-t border-pitch-800 bg-pitch-900/60 space-y-3">
              <div className="space-y-1.5 text-xs text-chrome-400">
                <div className="flex justify-between">
                  <span>Parts Subtotal</span>
                  <span className="font-mono text-white font-semibold">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Express Shipping</span>
                  <span className="text-emerald-400 font-semibold uppercase text-[10px]">Free Across India</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-pitch-800">
                  <span>Estimated Total</span>
                  <span className="font-mono text-cyan text-base">{formatINR(subtotal)}</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-cyan/90 transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  <span>Proceed to Secure Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center justify-center space-x-2 text-[10px] text-chrome-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Genuine Dark Mafia Warranty & Direct Technical Support</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
