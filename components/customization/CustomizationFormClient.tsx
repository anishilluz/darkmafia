'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Wrench, 
  Car, 
  Bike, 
  CheckCircle2, 
  Upload, 
  Send, 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  Sparkles 
} from 'lucide-react';
import { CERTIFIED_SERVICES, VEHICLES_DATABASE } from '@/lib/data';
import { submitCustomizationEnquiry } from '@/lib/api/wordpress';

export default function CustomizationFormClient() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service');

  const [vehicleType, setVehicleType] = useState<'car' | 'bike'>('car');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('2023');
  const [selectedServices, setSelectedServices] = useState<string[]>(
    preselectedService ? [preselectedService] : ['led-projector-retrofits']
  );
  const [requirements, setRequirements] = useState('');
  const [budgetRange, setBudgetRange] = useState('₹15,000 - ₹30,000');
  const [preferredDate, setPreferredDate] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const toggleService = (slug: string) => {
    if (selectedServices.includes(slug)) {
      setSelectedServices(selectedServices.filter(s => s !== slug));
    } else {
      setSelectedServices([...selectedServices, slug]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await submitCustomizationEnquiry({
        name,
        phone,
        email,
        city,
        vehicleType,
        make,
        model,
        year,
        selectedServices,
        requirements,
        budgetRange,
        preferredDate,
        createdAt: new Date().toISOString()
      });

      if (res.success) {
        setSubmittedTicket(res.ticketId);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submittedTicket) {
    return (
      <div className="py-20 bg-pitch-950 min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full mx-4 p-8 sm:p-12 rounded-3xl bg-pitch-900 border border-pitch-700 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan uppercase tracking-widest">Enquiry Registered</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              CUSTOM BUILD QUOTATION REQUEST RECEIVED
            </h1>
            <p className="text-xs text-chrome-400 leading-relaxed">
              Our master technician is reviewing your vehicle specifications and requested services. We will send an itemized estimate to your WhatsApp and email.
            </p>
          </div>

          {/* Ticket ID Badge */}
          <div className="p-4 rounded-xl bg-pitch-950 border border-pitch-800 text-xs font-mono space-y-1">
            <div className="text-chrome-500 uppercase">Your Official Ticket ID:</div>
            <div className="text-xl font-bold text-cyan tracking-wider">{submittedTicket}</div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 py-3.5 px-6 rounded-xl bg-pitch-950 hover:bg-pitch-800 border border-pitch-700 text-xs font-bold text-white transition-colors"
            >
              Return to Homepage
            </Link>
            <Link
              href="/shop"
              className="flex-1 py-3.5 px-6 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              Browse Shop Parts
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase">
            <Wrench className="w-3.5 h-3.5" />
            <span>Underground Workshop Booking</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight">
            REQUEST A CUSTOMIZATION
          </h1>
          <p className="text-xs sm:text-sm text-chrome-400">
            Tell us about your machine and illumination goals. We provide customized recommendations, part availability, and appointment scheduling.
          </p>
        </div>

        {/* Multi-Section Form */}
        <form onSubmit={handleSubmit} className="space-y-8 bg-pitch-900 border border-pitch-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Section 1: Customer Contact Details */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono text-cyan uppercase tracking-wider flex items-center space-x-2">
              <span>01.</span>
              <span>Contact Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-chrome-300 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-chrome-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Karan Malhotra"
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-chrome-600 focus:outline-none focus:border-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-chrome-300 mb-1">WhatsApp / Phone Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-chrome-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-chrome-600 focus:outline-none focus:border-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-chrome-300 mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-chrome-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="karan@example.com"
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-chrome-600 focus:outline-none focus:border-cyan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-chrome-300 mb-1">City / Region *</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-chrome-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Bengaluru / Mumbai / Delhi"
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-chrome-600 focus:outline-none focus:border-cyan"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Vehicle Specs */}
          <div className="space-y-4 pt-6 border-t border-pitch-800">
            <h3 className="text-sm font-mono text-purple uppercase tracking-wider flex items-center space-x-2">
              <span>02.</span>
              <span>Vehicle Specifications</span>
            </h3>

            {/* Vehicle Type Toggle */}
            <div className="grid grid-cols-2 gap-3 max-w-xs">
              <button
                type="button"
                onClick={() => setVehicleType('car')}
                className={`py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                  vehicleType === 'car' ? 'bg-purple border-purple text-white' : 'bg-pitch-950 border-pitch-800 text-chrome-400'
                }`}
              >
                <Car className="w-4 h-4" />
                <span>Four-Wheeler / Car</span>
              </button>
              <button
                type="button"
                onClick={() => setVehicleType('bike')}
                className={`py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2 border transition-all ${
                  vehicleType === 'bike' ? 'bg-cyan border-cyan text-black font-bold' : 'bg-pitch-950 border-pitch-800 text-chrome-400'
                }`}
              >
                <Bike className="w-4 h-4" />
                <span>Two-Wheeler / Bike</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs text-chrome-300 mb-1">Make / Brand *</label>
                <input
                  type="text"
                  required
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  placeholder="e.g. BMW / Mahindra / Yamaha"
                  className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-3 text-xs text-white placeholder-chrome-600 focus:outline-none focus:border-cyan"
                />
              </div>

              <div>
                <label className="block text-xs text-chrome-300 mb-1">Model & Variant *</label>
                <input
                  type="text"
                  required
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="e.g. 330i M Sport / Thar LX / R15 V4"
                  className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-3 text-xs text-white placeholder-chrome-600 focus:outline-none focus:border-cyan"
                />
              </div>

              <div>
                <label className="block text-xs text-chrome-300 mb-1">Year of Manufacture *</label>
                <input
                  type="text"
                  required
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder="e.g. 2023"
                  className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-3 text-xs text-white placeholder-chrome-600 focus:outline-none focus:border-cyan"
                />
              </div>
            </div>
          </div>

          {/* Section 3: The 7 Certified Services Selection */}
          <div className="space-y-4 pt-6 border-t border-pitch-800">
            <h3 className="text-sm font-mono text-cyan uppercase tracking-wider flex items-center space-x-2">
              <span>03.</span>
              <span>Services Required (Select All Applicable)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CERTIFIED_SERVICES.map((s) => {
                const isSelected = selectedServices.includes(s.slug);
                return (
                  <button
                    type="button"
                    key={s.id}
                    onClick={() => toggleService(s.slug)}
                    className={`p-3.5 rounded-xl border text-left flex items-start space-x-3 transition-all ${
                      isSelected
                        ? 'bg-cyan/10 border-cyan text-white shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                        : 'bg-pitch-950 border-pitch-800 text-chrome-400 hover:border-pitch-700'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border flex-shrink-0 ${
                      isSelected ? 'bg-cyan border-cyan text-black' : 'border-pitch-700'
                    }`}>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 font-bold" />}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase">{s.title}</div>
                      <div className="text-[11px] text-chrome-500 mt-0.5">{s.startingPrice}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 4: Budget & Requirements */}
          <div className="space-y-4 pt-6 border-t border-pitch-800">
            <h3 className="text-sm font-mono text-chrome-300 uppercase tracking-wider flex items-center space-x-2">
              <span>04.</span>
              <span>Project Scope & Budget</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-chrome-300 mb-1">Target Budget Range</label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-cyan"
                >
                  <option value="Under ₹10,000">Under ₹10,000 (Bulb / Restoration / DRL)</option>
                  <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 (Bi-LED Projectors or Fog Kit)</option>
                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Complete Optical Retrofit + Devil Eyes)</option>
                  <option value="₹50,000+">₹50,000+ (Full Mafia Custom Vehicle Overhaul)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-chrome-300 mb-1">Preferred Workshop Date</label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-chrome-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-cyan"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-chrome-300 mb-1">Project Notes & Specific Desired Look</label>
              <textarea
                rows={4}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="Mention specific details: e.g. 'I want matte black internal bezels with Syndicate Purple devil eyes and maximum highway beam throw for ghat driving...'"
                className="w-full bg-pitch-950 border border-pitch-700 rounded-xl p-4 text-xs text-white placeholder-chrome-600 focus:outline-none focus:border-cyan"
              />
            </div>

            {/* Photo Upload Hint */}
            <div className="p-4 rounded-xl border border-dashed border-pitch-700 bg-pitch-950/60 text-center space-y-2">
              <Upload className="w-6 h-6 text-cyan/60 mx-auto" />
              <div className="text-xs text-chrome-300 font-semibold">Have photos of your current car/bike?</div>
              <p className="text-[11px] text-chrome-500 max-w-sm mx-auto">
                You can attach vehicle photos directly when our lead technician contacts you on WhatsApp with your ticket ID.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-8 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)] disabled:opacity-50"
            >
              {isSubmitting ? (
                <span>Generating Ticket & Transmitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 font-bold" />
                  <span>Submit Customization Request & Get Estimate</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
