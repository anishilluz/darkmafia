import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBuilds } from '@/lib/api/wordpress';
import { Sparkles, MapPin, ArrowRight, Wrench } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Completed Garage Builds | Dark Mafia Customs',
  description: 'Explore completed custom builds from Dark Mafia Customs. Inspect before and after transformations for BMW, Mahindra Thar, Yamaha R15, and more.',
};

export default async function BuildsPage() {
  const builds = await getBuilds();

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-purple text-xs font-mono tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Fabrication Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight">
            DARK MAFIA COMPLETED BUILDS
          </h1>
          <p className="text-sm text-chrome-400 mt-2 leading-relaxed">
            Real machines transformed in our studio. From daily street sleepers to menacing widebody builds and track-spec superbikes, inspect the parts and services utilized in every build.
          </p>
        </div>

        {/* Builds Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {builds.map((build) => (
            <div
              key={build.id}
              className="rounded-3xl bg-pitch-900 border border-pitch-800 hover:border-purple/70 transition-all duration-300 flex flex-col overflow-hidden group hover:shadow-[0_0_30px_rgba(157,0,255,0.2)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-pitch-950">
                <Image
                  src={build.heroImage}
                  alt={build.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-pitch-950/85 backdrop-blur-md border border-pitch-700 text-xs font-mono text-cyan uppercase">
                  {build.vehicleType === 'car' ? 'Car Overhaul' : 'Superbike Overhaul'}
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-pitch-950/85 backdrop-blur-md border border-pitch-700 text-[10px] text-chrome-300 flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-purple" />
                  <span>{build.location}</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-purple transition-colors font-display tracking-wide uppercase">
                    {build.title}
                  </h3>
                  <p className="text-xs text-chrome-400 mt-2 line-clamp-3 leading-relaxed">
                    {build.story}
                  </p>
                </div>

                <div>
                  <div className="text-[10px] font-mono uppercase text-chrome-500 tracking-wider mb-1.5">
                    Services Executed:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {build.servicesPerformed.map((srv, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-pitch-950 border border-pitch-800 text-[10px] text-chrome-300"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-pitch-800 flex items-center justify-between">
                  <Link
                    href={`/builds/${build.slug}`}
                    className="text-xs font-bold text-cyan hover:underline flex items-center space-x-1"
                  >
                    <span>Read Build Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/build-your-ride"
                    className="px-3 py-1.5 rounded-lg bg-pitch-950 hover:bg-purple/20 text-purple border border-purple/40 text-[11px] font-semibold transition-colors"
                  >
                    Replicate Build
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
