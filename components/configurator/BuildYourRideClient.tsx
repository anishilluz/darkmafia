'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Car, 
  Bike, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Plus, 
  Check, 
  ShoppingBag, 
  Wrench, 
  Flame, 
  Zap, 
  Sliders 
} from 'lucide-react';
import { VEHICLES_DATABASE, PRODUCTS_CATALOG, CERTIFIED_SERVICES } from '@/lib/data';
import { formatINR } from '@/lib/utils';
import { useCart } from '@/lib/context/cart-context';
import { useGarage } from '@/lib/context/garage-context';

export default function BuildYourRideClient() {
  const { selectVehicle, activeVehicle } = useGarage();
  const { addItem, setIsCartOpen } = useCart();

  // Wizard state: 1: Type -> 2: Vehicle -> 3: Objective -> 4: Components -> 5: Summary
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [vehicleType, setVehicleType] = useState<'car' | 'bike'>('car');
  const [selectedVehicleId, setSelectedVehicleId] = useState<string>(activeVehicle?.id || 'car-bmw-3series-g20');
  const [objective, setObjective] = useState<'lighting' | 'stance' | 'overhaul'>('overhaul');

  // Selected components inside the build
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([
    'dmc-dsr-30-biled',
    'dmc-rgb-devil-eyes',
    'dmc-biled-fog-projector-3in'
  ]);

  // Selected services inside the build
  const [selectedServiceSlugs, setSelectedServiceSlugs] = useState<string[]>([
    'custom-headlight-modifications',
    'devil-eyes-installation'
  ]);

  const vehicles = VEHICLES_DATABASE.filter(v => v.type === vehicleType);
  const currentVehicle = VEHICLES_DATABASE.find(v => v.id === selectedVehicleId) || vehicles[0];

  const toggleProduct = (id: string) => {
    if (selectedProductIds.includes(id)) {
      setSelectedProductIds(selectedProductIds.filter(p => p !== id));
    } else {
      setSelectedProductIds([...selectedProductIds, id]);
    }
  };

  const toggleService = (slug: string) => {
    if (selectedServiceSlugs.includes(slug)) {
      setSelectedServiceSlugs(selectedServiceSlugs.filter(s => s !== slug));
    } else {
      setSelectedServiceSlugs([...selectedServiceSlugs, slug]);
    }
  };

  // Calculations
  const selectedProducts = PRODUCTS_CATALOG.filter(p => selectedProductIds.includes(p.id));
  const partsSubtotal = selectedProducts.reduce((sum, p) => sum + (p.salePrice ?? p.price), 0);

  // Approximate service labor rates
  const serviceLaborMap: Record<string, number> = {
    'headlight-restoration': 1999,
    'custom-headlight-modifications': 6499,
    'devil-eyes-installation': 3499,
    'drl-upgrades-and-installation': 4999,
    'led-projector-retrofits': 9999,
    'fog-lamp-upgrades': 6999,
    'vehicle-styling-and-aesthetics': 7999,
  };

  const laborSubtotal = selectedServiceSlugs.reduce((sum, slug) => sum + (serviceLaborMap[slug] || 3500), 0);
  const totalEstimatedAmount = partsSubtotal + laborSubtotal;

  const handleAddAllToCart = () => {
    selectedProducts.forEach(p => {
      addItem(p, 1);
    });
    setIsCartOpen(true);
  };

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Configurator Header & Stepper */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Machine Configurator</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight">
            BUILD YOUR RIDE
          </h1>
          <p className="text-xs sm:text-sm text-chrome-400">
            Tailor high-performance lighting, optics, and aesthetic upgrades designed specifically for your vehicle.
          </p>

          {/* Stepper Progress Bar */}
          <div className="flex items-center justify-center space-x-3 pt-4">
            {[1, 2, 3, 4, 5].map((step) => (
              <button
                key={step}
                onClick={() => setCurrentStep(step)}
                className={`w-10 h-10 rounded-full font-mono font-bold text-xs flex items-center justify-center transition-all ${
                  currentStep === step
                    ? 'bg-cyan text-black shadow-[0_0_15px_rgba(0,240,255,0.6)] scale-110'
                    : currentStep > step
                    ? 'bg-pitch-800 text-cyan border border-cyan/40'
                    : 'bg-pitch-900 text-chrome-600 border border-pitch-800'
                }`}
              >
                {step}
              </button>
            ))}
          </div>
          <div className="text-[11px] font-mono text-chrome-400 uppercase tracking-widest pt-1">
            {currentStep === 1 && 'Step 1: Machine Category (Car vs Bike)'}
            {currentStep === 2 && 'Step 2: Select Your Machine Specs'}
            {currentStep === 3 && 'Step 3: Define Customization Goal'}
            {currentStep === 4 && 'Step 4: Select Optics & Styling Upgrades'}
            {currentStep === 5 && 'Step 5: Review & Export Build'}
          </div>
        </div>

        {/* STEP 1: CAR OR BIKE */}
        {currentStep === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <button
              onClick={() => { setVehicleType('car'); setSelectedVehicleId('car-bmw-3series-g20'); setCurrentStep(2); }}
              className={`p-8 rounded-3xl border text-center space-y-4 transition-all group ${
                vehicleType === 'car'
                  ? 'bg-pitch-900 border-purple shadow-[0_0_30px_rgba(157,0,255,0.3)]'
                  : 'bg-pitch-950 border-pitch-800 hover:border-pitch-700'
              }`}
            >
              <div className="w-20 h-20 rounded-2xl bg-purple/10 border border-purple/30 flex items-center justify-center mx-auto text-purple group-hover:scale-110 transition-transform">
                <Car className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase font-display">
                  Four-Wheeler / Car
                </h3>
                <p className="text-xs text-chrome-400 mt-1">
                  Sedans, SUVs, Off-Road 4x4s, and German Tuners.
                </p>
              </div>
              <div className="inline-block px-5 py-2 rounded-xl bg-purple text-white text-xs font-bold uppercase tracking-wider">
                Select Four-Wheeler →
              </div>
            </button>

            <button
              onClick={() => { setVehicleType('bike'); setSelectedVehicleId('bike-yamaha-r15'); setCurrentStep(2); }}
              className={`p-8 rounded-3xl border text-center space-y-4 transition-all group ${
                vehicleType === 'bike'
                  ? 'bg-pitch-900 border-cyan shadow-[0_0_30px_rgba(0,240,255,0.3)]'
                  : 'bg-pitch-950 border-pitch-800 hover:border-pitch-700'
              }`}
            >
              <div className="w-20 h-20 rounded-2xl bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto text-cyan group-hover:scale-110 transition-transform">
                <Bike className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white uppercase font-display">
                  Two-Wheeler / Motorcycle
                </h3>
                <p className="text-xs text-chrome-400 mt-1">
                  Sportbikes, Cafe Racers, Roadsters, and Adventure Touring.
                </p>
              </div>
              <div className="inline-block px-5 py-2 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider">
                Select Two-Wheeler →
              </div>
            </button>
          </div>
        )}

        {/* STEP 2: SELECT VEHICLE */}
        {currentStep === 2 && (
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {vehicles.map((v) => (
                <button
                  key={v.id}
                  onClick={() => {
                    setSelectedVehicleId(v.id);
                    selectVehicle(v.id);
                  }}
                  className={`p-5 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                    selectedVehicleId === v.id
                      ? 'bg-pitch-900 border-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                      : 'bg-pitch-950 border-pitch-800 hover:border-pitch-700'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-cyan uppercase tracking-wider">{v.badge}</span>
                    <h4 className="text-sm font-bold text-white uppercase">{v.make} {v.model}</h4>
                    <p className="text-xs text-chrome-400 font-mono">{v.generation} ({v.yearRange})</p>
                  </div>
                  <div className="pt-4 border-t border-pitch-800/60 mt-4 flex justify-between items-center text-[11px] font-mono">
                    <span className="text-chrome-500">Socket: {v.headlightSocket.split(' ')[0]}</span>
                    {selectedVehicleId === v.id && (
                      <span className="text-cyan font-bold flex items-center space-x-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Selected</span>
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="flex items-center space-x-2 text-xs font-semibold text-chrome-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="px-8 py-3.5 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <span>Continue to Goals</span>
                <ArrowRight className="w-4 h-4 font-bold" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CUSTOMIZATION OBJECTIVE */}
        {currentStep === 3 && (
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <button
                onClick={() => setObjective('lighting')}
                className={`p-6 rounded-2xl border text-left space-y-3 transition-all ${
                  objective === 'lighting'
                    ? 'bg-pitch-900 border-cyan shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                    : 'bg-pitch-950 border-pitch-800'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white uppercase font-display">Stage 1: Midnight Illumination</h4>
                <p className="text-xs text-chrome-400 leading-relaxed">
                  Focus on surgical night road visibility, Bi-LED projector cutoffs, and long-throw fog floodlights.
                </p>
              </button>

              <button
                onClick={() => setObjective('stance')}
                className={`p-6 rounded-2xl border text-left space-y-3 transition-all ${
                  objective === 'stance'
                    ? 'bg-pitch-900 border-devil shadow-[0_0_20px_rgba(255,42,85,0.3)]'
                    : 'bg-pitch-950 border-pitch-800'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-devil/10 border border-devil/30 flex items-center justify-center text-devil">
                  <Flame className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white uppercase font-display">Stage 2: Menacing Street Stance</h4>
                <p className="text-xs text-chrome-400 leading-relaxed">
                  App-controlled RGB Devil Eyes, sequential DRL startup sweeps, and custom matte blackout bezels.
                </p>
              </button>

              <button
                onClick={() => setObjective('overhaul')}
                className={`p-6 rounded-2xl border text-left space-y-3 transition-all ${
                  objective === 'overhaul'
                    ? 'bg-pitch-900 border-purple shadow-[0_0_20px_rgba(157,0,255,0.3)]'
                    : 'bg-pitch-950 border-pitch-800'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-purple/10 border border-purple/30 flex items-center justify-center text-purple">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white uppercase font-display">Stage 3: Full Mafia Overhaul</h4>
                <p className="text-xs text-chrome-400 leading-relaxed">
                  Complete optics + aesthetics: DSR Bi-LED, Devil Eyes, Fog Projectors, De-chroming, and Ambient Cockpit.
                </p>
              </button>

            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="flex items-center space-x-2 text-xs font-semibold text-chrome-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setCurrentStep(4)}
                className="px-8 py-3.5 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <span>Customize Components</span>
                <ArrowRight className="w-4 h-4 font-bold" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: COMPONENTS SELECTION MATRIX */}
        {currentStep === 4 && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Products Matrix */}
            <div>
              <h3 className="text-sm font-mono text-cyan uppercase tracking-wider mb-4 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>Hardware Components (Compatible with {currentVehicle?.make} {currentVehicle?.model})</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PRODUCTS_CATALOG.map((p) => {
                  const isSelected = selectedProductIds.includes(p.id);
                  return (
                    <div
                      key={p.id}
                      onClick={() => toggleProduct(p.id)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3.5 ${
                        isSelected
                          ? 'bg-pitch-900 border-cyan shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                          : 'bg-pitch-950 border-pitch-800 hover:border-pitch-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border flex-shrink-0 ${
                        isSelected ? 'bg-cyan border-cyan text-black' : 'border-pitch-700'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 font-bold" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-white uppercase">{p.name}</div>
                        <div className="text-[11px] text-chrome-400 mt-1 line-clamp-1">{p.shortDescription}</div>
                        <div className="text-xs font-mono font-bold text-cyan mt-2">{formatINR(p.salePrice ?? p.price)}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Services Matrix */}
            <div className="pt-4 border-t border-pitch-800">
              <h3 className="text-sm font-mono text-purple uppercase tracking-wider mb-4 flex items-center space-x-2">
                <Wrench className="w-4 h-4" />
                <span>Workshop Labor & Installation Services</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CERTIFIED_SERVICES.map((s) => {
                  const isSelected = selectedServiceSlugs.includes(s.slug);
                  return (
                    <div
                      key={s.id}
                      onClick={() => toggleService(s.slug)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3.5 ${
                        isSelected
                          ? 'bg-pitch-900 border-purple shadow-[0_0_15px_rgba(157,0,255,0.2)]'
                          : 'bg-pitch-950 border-pitch-800 hover:border-pitch-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md mt-0.5 flex items-center justify-center border flex-shrink-0 ${
                        isSelected ? 'bg-purple border-purple text-white' : 'border-pitch-700'
                      }`}>
                        {isSelected && <Check className="w-3.5 h-3.5 font-bold" />}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-white uppercase">{s.title}</div>
                        <div className="text-[11px] text-chrome-400 mt-1 line-clamp-1">{s.shortDescription}</div>
                        <div className="text-xs font-mono font-bold text-purple mt-2">{s.startingPrice}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center pt-4">
              <button
                onClick={() => setCurrentStep(3)}
                className="flex items-center space-x-2 text-xs font-semibold text-chrome-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              <button
                onClick={() => setCurrentStep(5)}
                className="px-8 py-3.5 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center space-x-2 hover:bg-white shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <span>Generate Build Sheet</span>
                <ArrowRight className="w-4 h-4 font-bold" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: YOUR BUILD SHEET */}
        {currentStep === 5 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="rounded-3xl bg-pitch-900 border border-pitch-700 p-6 sm:p-10 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-pitch-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider">Official Custom Specification</span>
                  <h3 className="text-2xl font-black text-white uppercase font-display">
                    {currentVehicle?.make} {currentVehicle?.model} ({currentVehicle?.generation})
                  </h3>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/40 text-cyan text-xs font-mono uppercase font-bold">
                    Stage 3 Build
                  </span>
                </div>
              </div>

              {/* Hardware List */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-chrome-400">Selected Components:</div>
                <div className="divide-y divide-pitch-800/80 rounded-xl bg-pitch-950 p-4 border border-pitch-800">
                  {selectedProducts.map((p) => (
                    <div key={p.id} className="py-2.5 flex justify-between items-center text-xs">
                      <span className="text-white font-medium">{p.name}</span>
                      <span className="font-mono text-cyan font-bold">{formatINR(p.salePrice ?? p.price)}</span>
                    </div>
                  ))}
                  <div className="pt-3 flex justify-between items-center text-xs font-bold text-chrome-300">
                    <span>Parts Subtotal</span>
                    <span className="font-mono text-white">{formatINR(partsSubtotal)}</span>
                  </div>
                </div>
              </div>

              {/* Labor Services List */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase text-chrome-400">Selected Workshop Services:</div>
                <div className="divide-y divide-pitch-800/80 rounded-xl bg-pitch-950 p-4 border border-pitch-800">
                  {selectedServiceSlugs.map((slug) => {
                    const s = CERTIFIED_SERVICES.find(srv => srv.slug === slug);
                    return (
                      <div key={slug} className="py-2.5 flex justify-between items-center text-xs">
                        <span className="text-white font-medium">{s?.title || slug}</span>
                        <span className="font-mono text-purple font-bold">{s?.startingPrice}</span>
                      </div>
                    );
                  })}
                  <div className="pt-3 flex justify-between items-center text-xs font-bold text-chrome-300">
                    <span>Estimated Labor & Testing Subtotal</span>
                    <span className="font-mono text-white">{formatINR(laborSubtotal)}</span>
                  </div>
                </div>
              </div>

              {/* Total Summary */}
              <div className="p-5 rounded-2xl bg-pitch-950 border border-cyan/40 flex items-center justify-between">
                <div>
                  <div className="text-xs text-chrome-400 uppercase font-mono">Total Estimated Project Value</div>
                  <div className="text-xs text-emerald-400 font-semibold mt-0.5">Includes free nationwide shipping on all parts</div>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-cyan font-mono">
                  {formatINR(totalEstimatedAmount)}
                </div>
              </div>

              {/* Dual Actions: Add parts to cart OR Request Custom Build */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={handleAddAllToCart}
                  className="py-4 px-6 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  <ShoppingBag className="w-4 h-4 font-bold" />
                  <span>Add All Parts To Cart</span>
                </button>

                <Link
                  href={`/customization-request?build=${currentVehicle?.id}`}
                  className="py-4 px-6 rounded-xl bg-purple text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-purple/90 transition-all shadow-[0_0_20px_rgba(157,0,255,0.4)] text-center"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book Workshop Installation</span>
                </Link>
              </div>

            </div>

            <div className="text-center pt-2">
              <button
                onClick={() => setCurrentStep(4)}
                className="text-xs text-chrome-400 hover:text-white underline font-mono"
              >
                Modify Selected Components
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
