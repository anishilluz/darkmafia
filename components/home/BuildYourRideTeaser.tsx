import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Sliders, CheckCircle } from 'lucide-react';

export default function BuildYourRideTeaser() {
  return (
    <section className="py-20 bg-pitch-900 border-t border-pitch-800 relative overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-purple/20 via-cyan/15 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-pitch-950 border border-pitch-700 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Signature Dark Mafia Experience</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight leading-[1.1]">
                BUILD YOUR RIDE <span className="text-cyan">CONFIGURATOR</span>
              </h2>

              <p className="text-sm sm:text-base text-chrome-300 font-light leading-relaxed max-w-xl">
                Don&apos;t just buy random parts. Configure your complete bespoke machine step-by-step. Select your Car or Bike, set your illumination and styling goals, bundle verified plug-and-play components with certified workshop installation, and preview real-time pricing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs text-chrome-300">
                <div className="flex items-center space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Guaranteed Socket Fitment</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                  <span>Itemized Parts + Labor Estimates</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-purple flex-shrink-0" />
                  <span>App-Controlled RGB Devil Eyes</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Instant 1-Click Cart or Workshop Quote</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/build-your-ride"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan to-purple text-black font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:scale-[1.02] transition-all shadow-[0_0_30px_rgba(0,240,255,0.4)]"
                >
                  <Sliders className="w-4 h-4 font-bold" />
                  <span>Launch 5-Step Configurator</span>
                  <ArrowRight className="w-4 h-4 font-bold ml-1" />
                </Link>

                <span className="text-xs text-chrome-500 font-mono">
                  Takes less than 60 seconds
                </span>
              </div>
            </div>

            {/* Right Interactive Mockup / Graphic */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-pitch-900 border border-pitch-700/80 p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between border-b border-pitch-800 pb-3">
                  <span className="text-xs font-mono text-cyan uppercase font-bold tracking-wider">
                    Interactive Build Summary
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
                    Live Calculator
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-pitch-950 border border-pitch-800">
                    <span className="text-chrome-300">1. Machine Selected</span>
                    <span className="font-bold text-white">BMW 3 Series (G20)</span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-pitch-950 border border-pitch-800">
                    <span className="text-chrome-300">2. Optical Core</span>
                    <span className="font-bold text-cyan">DSR 3.0&quot; Bi-LED (75W)</span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-pitch-950 border border-pitch-800">
                    <span className="text-chrome-300">3. Aesthetics</span>
                    <span className="font-bold text-purple">BLE RGB Devil Eyes</span>
                  </div>

                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-pitch-950 border border-pitch-800">
                    <span className="text-chrome-300">4. Professional Labor</span>
                    <span className="font-bold text-chrome-200">Retrofit & Laser Leveling</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-pitch-800 flex justify-between items-center">
                  <span className="text-xs text-chrome-400">Total Configured Build</span>
                  <span className="text-base font-extrabold text-cyan font-mono">₹21,998</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
