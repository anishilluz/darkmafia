'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ShoppingBag, Car, Bike, ArrowRight, ShieldCheck, Zap, Flame } from 'lucide-react';
import { useGarage } from '@/lib/context/garage-context';

export default function Hero() {
  const { selectedVehicleType, setVehicleType } = useGarage();

  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-pitch-950 flex items-center justify-center overflow-hidden pt-8 pb-16">
      {/* Background Cinematic Gradients and Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan/15 via-purple/20 to-devil/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill Switcher */}
            <div className="inline-flex items-center space-x-2 bg-pitch-900/90 border border-pitch-700/80 rounded-full p-1 shadow-lg">
              <span className="px-3 py-1 rounded-full bg-cyan/20 border border-cyan/40 text-cyan text-[11px] font-mono font-bold tracking-wider uppercase">
                Est. 2026 Underworld Studio
              </span>
              <div className="flex space-x-1">
                <button
                  onClick={() => setVehicleType('car')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    selectedVehicleType === 'car'
                      ? 'bg-purple text-white shadow-[0_0_12px_rgba(157,0,255,0.6)]'
                      : 'text-chrome-400 hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Cars</span>
                </button>
                <button
                  onClick={() => setVehicleType('bike')}
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                    selectedVehicleType === 'bike'
                      ? 'bg-cyan text-black shadow-[0_0_12px_rgba(0,240,255,0.6)] font-bold'
                      : 'text-chrome-400 hover:text-white'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Bikes</span>
                </button>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase font-display leading-[1.05]">
              BUILT FOR THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-purple to-devil glow-cyan">BOLD.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-chrome-300 max-w-2xl font-light leading-relaxed">
              Premium automotive lighting, DSR Bi-LED projector conversions, app-controlled Devil Eyes, and bespoke custom modifications engineered for cars and superbikes.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 hover:bg-white transition-all shadow-[0_0_25px_rgba(0,240,255,0.5)] group"
              >
                <ShoppingBag className="w-4 h-4 font-bold" />
                <span>Shop Products</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/build-your-ride"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-pitch-900 text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center space-x-2.5 border border-purple hover:bg-purple/20 transition-all shadow-[0_0_20px_rgba(157,0,255,0.3)]"
              >
                <Sparkles className="w-4 h-4 text-purple animate-pulse" />
                <span>Build Your Ride</span>
              </Link>

              <Link
                href="/customization-request"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-transparent hover:bg-pitch-900 text-chrome-300 hover:text-white font-semibold text-sm transition-all border border-pitch-800"
              >
                <span>Request Custom Quote</span>
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-pitch-800/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center">
                  <span>12,000</span>
                  <span className="text-cyan text-sm ml-0.5">LM</span>
                </div>
                <div className="text-[11px] text-chrome-400 uppercase tracking-wider font-mono">
                  Optical Lumen Punch
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center">
                  <span>2</span>
                  <span className="text-purple text-sm ml-0.5">YRS</span>
                </div>
                <div className="text-[11px] text-chrome-400 uppercase tracking-wider font-mono">
                  Direct Replacement
                </div>
              </div>

              <div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono flex items-center">
                  <span>1,500+</span>
                </div>
                <div className="text-[11px] text-chrome-400 uppercase tracking-wider font-mono">
                  Completed Builds
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Centerpiece with Authentic Logo and Glow */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[440px] lg:h-[440px]">
              
              {/* Outer Pulsing Glow Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan via-purple to-devil opacity-40 blur-2xl animate-pulse-slow" />
              
              {/* Central Metallic Saw-Tooth Shield */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-b from-pitch-700 via-pitch-900 to-pitch-950 border border-pitch-600 shadow-2xl flex items-center justify-center">
                <Image
                  src="/images/dark-mafia-logo.png"
                  alt="Dark Mafia Customs Official Logo"
                  fill
                  priority
                  className="object-contain p-2 drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                />
              </div>

              {/* Floating Floating Micro Badges */}
              <div className="absolute -top-3 -right-3 bg-pitch-900/90 border border-cyan/60 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center space-x-2 text-xs">
                <Zap className="w-4 h-4 text-cyan" />
                <span className="font-bold text-white">Bi-LED Retrofits</span>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-pitch-900/90 border border-purple/60 rounded-xl px-3 py-1.5 shadow-xl backdrop-blur-md flex items-center space-x-2 text-xs">
                <Flame className="w-4 h-4 text-devil" />
                <span className="font-bold text-white">RGB Devil Eyes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
