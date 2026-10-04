'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ShoppingBag, 
  Car, 
  Bike, 
  ChevronDown, 
  Search, 
  Wrench, 
  Sparkles, 
  X, 
  Menu,
  ShieldAlert,
  Flame,
  Zap,
  Compass,
  CloudRain
} from 'lucide-react';
import { useGarage } from '@/lib/context/garage-context';
import { useCart } from '@/lib/context/cart-context';
import { CERTIFIED_SERVICES } from '@/lib/data';

export default function Header() {
  const pathname = usePathname();
  const { activeVehicle, selectedVehicleType, setVehicleType, clearVehicle } = useGarage();
  const { cartCount, setIsCartOpen } = useCart();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vehicleSelectorModal, setVehicleSelectorModal] = useState(false);

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'headlight-restoration': return <Sparkles className="w-4 h-4 text-cyan" />;
      case 'custom-headlight-modifications': return <Wrench className="w-4 h-4 text-purple" />;
      case 'devil-eyes-installation': return <Flame className="w-4 h-4 text-devil" />;
      case 'drl-upgrades-and-installation': return <Zap className="w-4 h-4 text-cyan" />;
      case 'led-projector-retrofits': return <Compass className="w-4 h-4 text-purple" />;
      case 'fog-lamp-upgrades': return <CloudRain className="w-4 h-4 text-cyan" />;
      case 'vehicle-styling-and-aesthetics': return <ShieldAlert className="w-4 h-4 text-purple" />;
      default: return <Wrench className="w-4 h-4 text-cyan" />;
    }
  };

  return (
    <>
      {/* Top Technical Bar */}
      <div className="bg-pitch-950 border-b border-pitch-700/60 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-chrome-400">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-cyan">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              <span className="font-semibold tracking-wider uppercase text-[10px]">Headless Garage Engine</span>
            </span>
            <span className="text-chrome-500">|</span>
            <span>Premium Automotive Lighting & Customization Studio</span>
          </div>

          <div className="flex items-center space-x-6">
            {/* Quick Car / Bike Dual Toggle */}
            <div className="flex items-center bg-pitch-900 rounded-full p-0.5 border border-pitch-700">
              <button
                onClick={() => setVehicleType('car')}
                className={`flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                  selectedVehicleType === 'car'
                    ? 'bg-purple text-white shadow-[0_0_10px_rgba(157,0,255,0.5)]'
                    : 'text-chrome-400 hover:text-white'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>Cars</span>
              </button>
              <button
                onClick={() => setVehicleType('bike')}
                className={`flex items-center space-x-1.5 px-3 py-0.5 rounded-full text-[11px] font-medium transition-all ${
                  selectedVehicleType === 'bike'
                    ? 'bg-cyan text-black font-semibold shadow-[0_0_10px_rgba(0,240,255,0.5)]'
                    : 'text-chrome-400 hover:text-white'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                <span>Bikes</span>
              </button>
            </div>

            <Link href="/customization-request" className="text-cyan hover:underline font-medium text-[11px]">
              Direct Workshop Hotline: +91 98765 43210
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-pitch-950/95 backdrop-blur-md border-b border-pitch-700/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border border-pitch-600 group-hover:border-cyan transition-colors bg-pitch-900 flex-shrink-0">
              <Image
                src="/images/dark-mafia-logo.png"
                alt="Dark Mafia Customs - Modified Vehicles & Lighting"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <div className="font-extrabold text-base md:text-xl tracking-wider text-white flex items-center space-x-1.5 font-display">
                <span>DARK MAFIA</span>
                <span className="text-cyan">CUSTOMS</span>
              </div>
              <p className="text-[10px] md:text-[11px] tracking-widest uppercase text-chrome-400 font-mono">
                Modified Vehicles & Lighting
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <Link 
              href="/shop" 
              className={`transition-colors hover:text-cyan ${pathname === '/shop' ? 'text-cyan font-semibold' : 'text-chrome-300'}`}
            >
              Shop Catalog
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 text-chrome-300 hover:text-cyan transition-colors py-2"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Certified Services</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-pitch-900 border border-pitch-700 rounded-xl shadow-2xl py-3 px-2 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 border-b border-pitch-800 mb-1">
                    <p className="text-[11px] font-mono tracking-widest text-chrome-500 uppercase">
                      7 Certified Custom Services
                    </p>
                  </div>
                  {CERTIFIED_SERVICES.map(service => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-pitch-800 text-chrome-300 hover:text-white transition-all group"
                    >
                      <div className="p-1.5 rounded-md bg-pitch-950 border border-pitch-700 group-hover:border-cyan">
                        {getServiceIcon(service.slug)}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-chrome-200 group-hover:text-cyan">
                          {service.title}
                        </div>
                        <div className="text-[10px] text-chrome-400 line-clamp-1">
                          {service.subtitle}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="mt-2 pt-2 border-t border-pitch-800 px-3">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs text-cyan hover:underline flex items-center justify-between"
                    >
                      <span>View All Services Overview</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/build-your-ride" 
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-full border transition-all ${
                pathname === '/build-your-ride' 
                  ? 'border-cyan bg-cyan/10 text-cyan shadow-[0_0_15px_rgba(0,240,255,0.3)]' 
                  : 'border-purple/50 bg-purple/10 text-purple hover:border-purple hover:bg-purple/20'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Build Your Ride</span>
            </Link>

            <Link 
              href="/builds" 
              className={`transition-colors hover:text-cyan ${pathname === '/builds' ? 'text-cyan' : 'text-chrome-300'}`}
            >
              Completed Builds
            </Link>

            <Link 
              href="/blog" 
              className={`transition-colors hover:text-cyan ${pathname === '/blog' ? 'text-cyan' : 'text-chrome-300'}`}
            >
              Knowledge Hub
            </Link>
          </nav>

          {/* Right Action Icons & Vehicle Dock */}
          <div className="flex items-center space-x-3 md:space-x-4">
            
            {/* Active Vehicle Status Badge */}
            {activeVehicle ? (
              <div className="hidden sm:flex items-center space-x-2 bg-pitch-900 border border-pitch-700 px-3 py-1.5 rounded-lg text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-chrome-300">
                  <strong className="text-white">{activeVehicle.make} {activeVehicle.model}</strong>
                </span>
                <button 
                  onClick={clearVehicle} 
                  title="Remove vehicle" 
                  className="text-chrome-500 hover:text-rose-400 ml-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <Link
                href="/#vehicle-finder"
                className="hidden sm:flex items-center space-x-1.5 text-xs text-chrome-400 hover:text-cyan bg-pitch-900 hover:bg-pitch-800 border border-pitch-700 px-3 py-1.5 rounded-lg transition-colors"
              >
                <Car className="w-3.5 h-3.5 text-cyan" />
                <span>Select Ride</span>
              </Link>
            )}

            {/* Customization Quote CTA */}
            <Link
              href="/customization-request"
              className="hidden md:inline-flex items-center space-x-2 bg-pitch-900 hover:bg-purple/20 text-white border border-purple/60 hover:border-purple px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-[0_0_12px_rgba(157,0,255,0.25)]"
            >
              <Wrench className="w-3.5 h-3.5 text-purple" />
              <span>Get Quote</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-pitch-900 border border-pitch-700 hover:border-cyan text-chrome-200 hover:text-white transition-all"
              aria-label="View shopping cart"
            >
              <ShoppingBag className="w-5 h-5 text-cyan" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-devil text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-chrome-400 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-pitch-950 border-b border-pitch-800 px-4 pt-4 pb-8 space-y-4">
            {/* Quick Car/Bike selector for mobile */}
            <div className="flex rounded-lg overflow-hidden border border-pitch-700 bg-pitch-900">
              <button
                onClick={() => { setVehicleType('car'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-semibold flex items-center justify-center space-x-2 ${
                  selectedVehicleType === 'car' ? 'bg-purple text-white' : 'text-chrome-400'
                }`}
              >
                <Car className="w-4 h-4" />
                <span>Car Upgrades</span>
              </button>
              <button
                onClick={() => { setVehicleType('bike'); setMobileMenuOpen(false); }}
                className={`flex-1 py-2 text-xs font-semibold flex items-center justify-center space-x-2 ${
                  selectedVehicleType === 'bike' ? 'bg-cyan text-black' : 'text-chrome-400'
                }`}
              >
                <Bike className="w-4 h-4" />
                <span>Bike Upgrades</span>
              </button>
            </div>

            <div className="space-y-1 text-sm font-medium">
              <Link 
                href="/shop" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-chrome-200 hover:bg-pitch-800"
              >
                Shop Products
              </Link>
              <Link 
                href="/build-your-ride" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-cyan hover:bg-pitch-800 font-semibold"
              >
                ⚡ Build Your Ride (Configurator)
              </Link>
              <Link 
                href="/services" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-chrome-200 hover:bg-pitch-800"
              >
                7 Certified Services
              </Link>
              <Link 
                href="/builds" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-chrome-200 hover:bg-pitch-800"
              >
                Completed Builds
              </Link>
              <Link 
                href="/customization-request" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-purple font-semibold hover:bg-pitch-800"
              >
                Request Customization Quote
              </Link>
              <Link 
                href="/blog" 
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-chrome-200 hover:bg-pitch-800"
              >
                Knowledge Hub & Lighting Guides
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
