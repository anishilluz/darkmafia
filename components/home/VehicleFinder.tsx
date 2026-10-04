'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Car, Bike, Search, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useGarage } from '@/lib/context/garage-context';
import { VEHICLES_DATABASE } from '@/lib/data';

export default function VehicleFinder() {
  const { 
    selectedVehicleType, 
    setVehicleType, 
    activeVehicle, 
    selectVehicle, 
    clearVehicle 
  } = useGarage();

  const [selectedMake, setSelectedMake] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

  const currentVehicles = VEHICLES_DATABASE.filter(v => v.type === selectedVehicleType);
  const makes = Array.from(new Set(currentVehicles.map(v => v.make)));
  const availableModels = currentVehicles.filter(v => !selectedMake || v.make === selectedMake);

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    setSelectedModel('');
  };

  const handleModelSelect = (vehicleId: string) => {
    setSelectedModel(vehicleId);
    selectVehicle(vehicleId);
  };

  return (
    <section id="vehicle-finder" className="py-12 bg-pitch-900 border-y border-pitch-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Panel */}
        <div className="rounded-3xl bg-pitch-950 border border-pitch-700/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Precision Vehicle Compatibility Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase font-display tracking-tight">
              FIND PRODUCTS & SERVICES FOR YOUR VEHICLE
            </h2>
            <p className="text-xs sm:text-sm text-chrome-400 mt-1">
              Select your machine to instantly filter 100% compatible Bi-LED retrofits, devil eyes, socket harnesses, and styling mods.
            </p>
          </div>

          {/* Stepper / Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            {/* Step 1: Car / Bike Type */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-chrome-400 mb-1.5">
                1. Vehicle Type
              </label>
              <div className="grid grid-cols-2 gap-2 bg-pitch-900 p-1.5 rounded-xl border border-pitch-800">
                <button
                  type="button"
                  onClick={() => { setVehicleType('car'); setSelectedMake(''); setSelectedModel(''); }}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
                    selectedVehicleType === 'car'
                      ? 'bg-purple text-white shadow-[0_0_10px_rgba(157,0,255,0.4)]'
                      : 'text-chrome-400 hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Car</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setVehicleType('bike'); setSelectedMake(''); setSelectedModel(''); }}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 transition-all ${
                    selectedVehicleType === 'bike'
                      ? 'bg-cyan text-black font-bold shadow-[0_0_10px_rgba(0,240,255,0.4)]'
                      : 'text-chrome-400 hover:text-white'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Bike</span>
                </button>
              </div>
            </div>

            {/* Step 2: Make */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-chrome-400 mb-1.5">
                2. Select Make
              </label>
              <select
                value={selectedMake}
                onChange={(e) => handleMakeChange(e.target.value)}
                className="w-full bg-pitch-900 border border-pitch-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan"
              >
                <option value="">-- Choose Manufacturer --</option>
                {makes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Model & Year */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-chrome-400 mb-1.5">
                3. Model & Generation
              </label>
              <select
                value={activeVehicle?.id || selectedModel}
                onChange={(e) => handleModelSelect(e.target.value)}
                disabled={!selectedMake && !activeVehicle}
                className="w-full bg-pitch-900 border border-pitch-700 disabled:opacity-50 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan"
              >
                <option value="">-- Choose Model --</option>
                {availableModels.map((vehicle) => (
                  <option key={vehicle.id} value={vehicle.id}>
                    {vehicle.model} ({vehicle.generation})
                  </option>
                ))}
              </select>
            </div>

            {/* Step 4: CTA Action */}
            <div className="pt-5 md:pt-0">
              <Link
                href={activeVehicle ? `/shop?vehicle=${activeVehicle.id}` : '/shop'}
                className="w-full py-3.5 px-5 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <Search className="w-4 h-4 font-bold" />
                <span>Show Upgrades</span>
              </Link>
            </div>

          </div>

          {/* Active Vehicle Confirmed Bar */}
          {activeVehicle && (
            <div className="mt-6 pt-6 border-t border-pitch-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 bg-pitch-900/60 p-4 rounded-2xl border border-pitch-800">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    Active Garage Vehicle: <span className="text-cyan font-bold">{activeVehicle.make} {activeVehicle.model}</span> ({activeVehicle.generation} - {activeVehicle.yearRange})
                  </div>
                  <div className="text-[11px] text-chrome-400 font-mono mt-0.5">
                    Headlight Socket: <span className="text-white">{activeVehicle.headlightSocket}</span> | Fog Socket: <span className="text-white">{activeVehicle.fogSocket || 'N/A'}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={clearVehicle}
                  className="text-xs text-chrome-400 hover:text-rose-400 underline font-medium"
                >
                  Clear Vehicle
                </button>
                <Link
                  href={`/build-your-ride`}
                  className="px-4 py-2 rounded-lg bg-purple/20 border border-purple text-purple hover:bg-purple hover:text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Configure Full Build →
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
