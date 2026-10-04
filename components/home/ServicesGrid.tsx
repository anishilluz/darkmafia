import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Wrench, 
  Flame, 
  Zap, 
  Compass, 
  CloudRain, 
  ShieldAlert, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CERTIFIED_SERVICES } from '@/lib/data';

export default function ServicesGrid() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'headlight-restoration': return <Sparkles className="w-6 h-6 text-cyan" />;
      case 'custom-headlight-modifications': return <Wrench className="w-6 h-6 text-purple" />;
      case 'devil-eyes-installation': return <Flame className="w-6 h-6 text-devil" />;
      case 'drl-upgrades-and-installation': return <Zap className="w-6 h-6 text-cyan" />;
      case 'led-projector-retrofits': return <Compass className="w-6 h-6 text-purple" />;
      case 'fog-lamp-upgrades': return <CloudRain className="w-6 h-6 text-cyan" />;
      case 'vehicle-styling-and-aesthetics': return <ShieldAlert className="w-6 h-6 text-purple" />;
      default: return <Wrench className="w-6 h-6 text-cyan" />;
    }
  };

  return (
    <section className="py-20 bg-pitch-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              <span>Dark Mafia Customization Studio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight">
              7 CERTIFIED CUSTOMIZATION SERVICES
            </h2>
            <p className="text-sm text-chrome-400 mt-2">
              Bespoke optical conversions and aggressive styling executed by master automotive technicians in our climate-controlled lab.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/customization-request"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-purple text-white text-xs font-bold uppercase tracking-wider hover:bg-purple/90 transition-all shadow-[0_0_20px_rgba(157,0,255,0.4)]"
            >
              <span>Book Custom Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFIED_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-2xl bg-pitch-900/90 border border-pitch-800 hover:border-cyan/70 transition-all duration-300 flex flex-col justify-between p-6 group hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] ${
                index === 6 ? 'lg:col-span-3 lg:flex-row lg:items-center' : ''
              }`}
            >
              <div className="space-y-4">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-pitch-950 border border-pitch-700/80 group-hover:border-cyan transition-colors">
                    {getIcon(service.slug)}
                  </div>
                  {service.highlightTag && (
                    <span className="px-2.5 py-0.5 rounded-full bg-pitch-950 text-cyan text-[10px] font-mono border border-cyan/30">
                      {service.highlightTag}
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-cyan transition-colors font-display tracking-wide uppercase">
                    {service.title}
                  </h3>
                  <p className="text-xs text-chrome-400 mt-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Specs / Meta Badges */}
                <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono text-chrome-400">
                  <span className="px-2 py-0.5 rounded bg-pitch-950 border border-pitch-800">
                    Est: <strong className="text-white">{service.estimatedDuration}</strong>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-pitch-950 border border-pitch-800">
                    Warranty: <strong className="text-emerald-400">{service.warranty.split(' ')[0]}</strong>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-pitch-950 border border-pitch-800 text-cyan">
                    {service.startingPrice}
                  </span>
                </div>
              </div>

              {/* Action Button: Matches exact "LEARN MORE ->" Cyan Pill from the uploaded screenshot */}
              <div className={`pt-6 ${index === 6 ? 'lg:pt-0 lg:pl-8' : ''}`}>
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-cyan text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:translate-x-0.5"
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
