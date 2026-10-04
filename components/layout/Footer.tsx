import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CERTIFIED_SERVICES } from '@/lib/data';
import { ShieldCheck, Wrench, Sparkles, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pitch-950 border-t border-pitch-800 text-chrome-400 text-xs pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-12 border-b border-pitch-800/80">
          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 rounded-lg bg-pitch-900 border border-pitch-700 text-cyan">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Surgical Optical Output</h4>
              <p className="text-[11px] text-chrome-500 mt-0.5">Custom tuned DSR Bi-LED projectors with razor cutoffs and zero glare.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 rounded-lg bg-pitch-900 border border-pitch-700 text-purple">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Certified Installation</h4>
              <p className="text-[11px] text-chrome-500 mt-0.5">Oven-decompression sealing with zero-condensation lifetime guarantee.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 rounded-lg bg-pitch-900 border border-pitch-700 text-devil">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">2-Year Direct Warranty</h4>
              <p className="text-[11px] text-chrome-500 mt-0.5">Comprehensive replacement warranty on all Bi-LED modules and ballasts.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="p-2.5 rounded-lg bg-pitch-900 border border-pitch-700 text-cyan">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Pan-India Express Logistics</h4>
              <p className="text-[11px] text-chrome-500 mt-0.5">Insured shock-proof courier packaging delivered in 3-5 business days.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-pitch-600 bg-pitch-900 flex-shrink-0">
                <Image
                  src="/images/dark-mafia-logo.png"
                  alt="Dark Mafia Customs"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-wider text-white font-display">
                  DARK MAFIA <span className="text-cyan">CUSTOMS</span>
                </span>
                <p className="text-[10px] tracking-widest uppercase text-chrome-500 font-mono">
                  Modified Vehicles & Lighting
                </p>
              </div>
            </Link>
            
            <p className="text-xs text-chrome-400 max-w-sm leading-relaxed">
              India&apos;s premier bespoke automotive lighting and performance garage. Specializing in Bi-LED optical retrofits, smartphone RGB Devil Eyes, sequential DRL fabrication, and stealth styling for cars and superbikes.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-chrome-400">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
                <span>Dark Mafia Customs Studio, Automobile Hub, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-purple flex-shrink-0" />
                <span>Direct / WhatsApp: +91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-chrome-500 flex-shrink-0" />
                <span>enquiries@darkmafiacustoms.com</span>
              </div>
            </div>
          </div>

          {/* Certified Services (All 7 Certified from reference) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono text-cyan">
              7 Certified Services
            </h4>
            <ul className="space-y-2 text-xs">
              {CERTIFIED_SERVICES.map(s => (
                <li key={s.id}>
                  <Link href={`/services/${s.slug}`} className="hover:text-cyan transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecommerce Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono text-purple">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/shop?category=lighting" className="hover:text-purple transition-colors">
                  DSR Bi-LED Projectors
                </Link>
              </li>
              <li>
                <Link href="/shop?category=lighting" className="hover:text-purple transition-colors">
                  App-Controlled Devil Eyes
                </Link>
              </li>
              <li>
                <Link href="/shop?category=lighting" className="hover:text-purple transition-colors">
                  All-Weather Fog Projectors
                </Link>
              </li>
              <li>
                <Link href="/shop?category=styling" className="hover:text-purple transition-colors">
                  Sequential Dynamic DRLs
                </Link>
              </li>
              <li>
                <Link href="/shop?category=styling" className="hover:text-purple transition-colors">
                  64-Color Symphony Ambient
                </Link>
              </li>
              <li>
                <Link href="/shop?category=accessories" className="hover:text-purple transition-colors">
                  Heavy-Duty Ceramic Relay Looms
                </Link>
              </li>
              <li>
                <Link href="/build-your-ride" className="text-cyan font-semibold hover:underline">
                  ⚡ Build Your Ride Configurator
                </Link>
              </li>
            </ul>
          </div>

          {/* Automotive Knowledge Hub */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono text-chrome-300">
              Technical Knowledge
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blog/what-are-dsr-lights-complete-guide" className="hover:text-white transition-colors">
                  What Are DSR Lights?
                </Link>
              </li>
              <li>
                <Link href="/blog/bi-led-vs-bi-xenon-projectors-which-is-better" className="hover:text-white transition-colors">
                  Bi-LED vs Bi-Xenon Shootout
                </Link>
              </li>
              <li>
                <Link href="/blog/devil-eyes-installation-legality-and-features" className="hover:text-white transition-colors">
                  Devil Eyes Street Legality
                </Link>
              </li>
              <li>
                <Link href="/builds" className="hover:text-white transition-colors">
                  Completed Vehicle Builds
                </Link>
              </li>
              <li>
                <Link href="/customization-request" className="text-purple font-semibold hover:underline">
                  Request Customization Quote
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-pitch-800/60 flex flex-col sm:flex-row justify-between items-center text-[11px] text-chrome-500 space-y-4 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} Dark Mafia Customs. All rights reserved. Powered by Headless Next.js & WooCommerce.
          </div>
          <div className="flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Shipping & Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
