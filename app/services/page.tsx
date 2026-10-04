import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getServices } from '@/lib/api/wordpress';
import ServicesGrid from '@/components/home/ServicesGrid';
import { Sparkles, ArrowRight, ShieldCheck, Wrench, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Certified Automotive Customization Services | Dark Mafia Customs',
  description: 'Explore the 7 certified customization services offered by Dark Mafia Customs: Headlight Restoration, Custom Headlight Mods, Devil Eyes, DRL Upgrades, LED Projector Retrofits, Fog Upgrades, and Styling.',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase mb-2">
            <Wrench className="w-3.5 h-3.5" />
            <span>Master Automotive Workshop</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight">
            7 CERTIFIED CUSTOMIZATION SERVICES
          </h1>
          <p className="text-sm text-chrome-400 mt-2 leading-relaxed">
            From optical Bi-LED projector conversions to app-controlled RGB Devil Eyes and aggressive stealth de-chroming, every service is executed in our specialized climate-controlled facility with guaranteed waterproof seals.
          </p>
        </div>

        {/* The 7 Certified Services Grid */}
        <ServicesGrid />

        {/* Workshop Procedure & Quality Standards */}
        <div className="mt-20 pt-16 border-t border-pitch-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase font-display tracking-tight">
              THE 4-STAGE QUALITY LAB PROTOCOL
            </h2>
            <p className="text-xs sm:text-sm text-chrome-400 mt-1">
              How Dark Mafia Customs guarantees zero headlight fogging, flawless wiring integrity, and OEM-grade fitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-3">
              <span className="text-xs font-mono text-cyan font-bold">01 / DIAGNOSTIC</span>
              <h3 className="text-sm font-bold text-white uppercase">Optical Inspection</h3>
              <p className="text-xs text-chrome-400 leading-relaxed">
                Measuring factory lux output, alternator voltage drop, and lens degradation before dismantling.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-3">
              <span className="text-xs font-mono text-purple font-bold">02 / THERMAL</span>
              <h3 className="text-sm font-bold text-white uppercase">Controlled De-Housing</h3>
              <p className="text-xs text-chrome-400 leading-relaxed">
                Automated thermal ovens soften factory seals evenly, eliminating brittle tab cracking or housing warping.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-3">
              <span className="text-xs font-mono text-devil font-bold">03 / CALIBRATION</span>
              <h3 className="text-sm font-bold text-white uppercase">Laser Bench Cutoff</h3>
              <p className="text-xs text-chrome-400 leading-relaxed">
                Bi-LED projectors are squared and dialed against laser wall grids to ensure razor-sharp international cutoffs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold">04 / BUTYL CURE</span>
              <h3 className="text-sm font-bold text-white uppercase">Vacuum Pressure Seal</h3>
              <p className="text-xs text-chrome-400 leading-relaxed">
                New OEM synthetic butyl sealant is injected and clamped under pressure for a lifetime moisture-free seal.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-pitch-900 to-pitch-950 border border-pitch-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase font-display">
              Ready to Upgrade Your Ride&apos;s Illumination & Stance?
            </h3>
            <p className="text-xs sm:text-sm text-chrome-400 max-w-xl">
              Get an instant itemized quotation with estimated labor time and component options tailored to your car or bike.
            </p>
          </div>
          <Link
            href="/customization-request"
            className="px-8 py-4 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] whitespace-nowrap"
          >
            Request Quotation
          </Link>
        </div>

      </div>
    </div>
  );
}
