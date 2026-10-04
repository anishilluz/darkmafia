'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, Sparkles, Wrench, FileText } from 'lucide-react';
import { useCart } from '@/lib/context/cart-context';

export default function MobileBottomDock() {
  const pathname = usePathname();
  const { cartCount, setIsCartOpen } = useCart();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Shop', href: '/shop', icon: ShoppingBag },
    { label: 'Build', href: '/build-your-ride', icon: Sparkles, isHighlight: true },
    { label: 'Services', href: '/services', icon: Wrench },
    { label: 'Quote', href: '/customization-request', icon: FileText },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-pitch-950/95 backdrop-blur-xl border-t border-pitch-800 px-3 py-2 pb-safe">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.isHighlight) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="flex flex-col items-center -mt-5 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan via-purple to-cyan p-0.5 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
                  <div className="w-full h-full bg-pitch-950 rounded-full flex items-center justify-center text-cyan group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-cyan animate-pulse" />
                  </div>
                </div>
                <span className="text-[10px] font-bold text-cyan mt-1 tracking-wide">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center py-1 px-2 transition-colors ${
                isActive ? 'text-cyan font-semibold' : 'text-chrome-400 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] mt-1 tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
