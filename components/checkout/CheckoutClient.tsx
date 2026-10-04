'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  CreditCard, 
  CheckCircle2, 
  ArrowLeft, 
  Lock 
} from 'lucide-react';
import { useCart } from '@/lib/context/cart-context';
import { formatINR } from '@/lib/utils';

export default function CheckoutClient() {
  const { items, subtotal, clearCart } = useCart();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Karnataka');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const generatedOrderId = `DMC-ORD-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderId(generatedOrderId);
      clearCart();
      setIsProcessing(false);
    }, 1200);
  };

  if (orderId) {
    return (
      <div className="py-20 bg-pitch-950 min-h-screen flex items-center justify-center">
        <div className="max-w-xl w-full mx-4 p-8 sm:p-12 rounded-3xl bg-pitch-900 border border-pitch-700 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-cyan uppercase tracking-widest">Order Confirmed</span>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase font-display">
              THANK YOU FOR YOUR ORDER
            </h1>
            <p className="text-xs text-chrome-400 leading-relaxed">
              Your order has been recorded in our dispatch system. We will pack your high-performance lighting in shock-proof custom packaging and send tracking updates to your phone.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-pitch-950 border border-pitch-800 text-xs font-mono space-y-1">
            <div className="text-chrome-500 uppercase">Your Tracking Order ID:</div>
            <div className="text-xl font-bold text-cyan tracking-wider">{orderId}</div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 py-3.5 px-6 rounded-xl bg-pitch-950 hover:bg-pitch-800 border border-pitch-700 text-xs font-bold text-white transition-colors"
            >
              Return to Garage
            </Link>
            <Link
              href="/shop"
              className="flex-1 py-3.5 px-6 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(0,240,255,0.4)]"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="py-20 bg-pitch-950 min-h-screen text-center flex items-center justify-center">
        <div className="max-w-md mx-4 p-8 rounded-3xl bg-pitch-900 border border-pitch-800 space-y-4">
          <ShoppingBag className="w-12 h-12 text-cyan/40 mx-auto" />
          <h2 className="text-xl font-bold text-white uppercase font-display">Your cart is empty</h2>
          <p className="text-xs text-chrome-400">
            Add lighting or styling components to proceed to checkout.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-block px-6 py-3 rounded-xl bg-cyan text-black font-bold text-xs uppercase tracking-wider hover:bg-white transition-all"
            >
              Browse Shop Catalog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link href="/shop" className="inline-flex items-center space-x-1.5 text-xs text-chrome-400 hover:text-white mb-2">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Shop</span>
            </Link>
            <h1 className="text-3xl font-black text-white uppercase font-display tracking-tight flex items-center space-x-2">
              <span>SECURE CHECKOUT</span>
              <Lock className="w-5 h-5 text-cyan" />
            </h1>
          </div>

          <div className="hidden sm:flex items-center space-x-2 text-xs text-emerald-400 font-mono">
            <ShieldCheck className="w-4 h-4" />
            <span>256-Bit SSL Encrypted Checkout</span>
          </div>
        </div>

        {/* Master Form & Summary Grid */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Customer & Shipping Address */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Details */}
            <div className="p-6 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-4">
              <h3 className="text-xs font-mono text-cyan uppercase tracking-wider font-bold">
                01. Customer Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-chrome-300 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan"
                  />
                </div>
                <div>
                  <label className="block text-xs text-chrome-300 mb-1">Phone Number (For Delivery SMS) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs text-chrome-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan"
                  />
                </div>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="p-6 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-4">
              <h3 className="text-xs font-mono text-purple uppercase tracking-wider font-bold">
                02. Shipping Address
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs text-chrome-300 mb-1">Street Address, Flat / House No. *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="House / Apartment #, Street Name"
                    className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-chrome-300 mb-1">City *</label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bengaluru"
                      className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-chrome-300 mb-1">State *</label>
                    <input
                      type="text"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="Karnataka"
                      className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-chrome-300 mb-1">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="560001"
                      className="w-full bg-pitch-950 border border-pitch-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="p-6 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-4">
              <h3 className="text-xs font-mono text-cyan uppercase tracking-wider font-bold">
                03. Payment Options
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    paymentMethod === 'upi' ? 'bg-cyan/15 border-cyan text-white' : 'bg-pitch-950 border-pitch-800 text-chrome-400'
                  }`}
                >
                  <span className="text-xs font-bold text-white uppercase">Instant UPI</span>
                  <span className="text-[10px] text-chrome-500 mt-1">GPay, PhonePe, Paytm, QR</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    paymentMethod === 'card' ? 'bg-cyan/15 border-cyan text-white' : 'bg-pitch-950 border-pitch-800 text-chrome-400'
                  }`}
                >
                  <span className="text-xs font-bold text-white uppercase">Cards / NetBanking</span>
                  <span className="text-[10px] text-chrome-500 mt-1">Visa, Mastercard, Rupay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all ${
                    paymentMethod === 'cod' ? 'bg-cyan/15 border-cyan text-white' : 'bg-pitch-950 border-pitch-800 text-chrome-400'
                  }`}
                >
                  <span className="text-xs font-bold text-white uppercase">Cash On Delivery</span>
                  <span className="text-[10px] text-chrome-500 mt-1">Pay upon courier arrival</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Order Items & Total */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-pitch-900 border border-pitch-700 space-y-6 shadow-xl sticky top-28">
              <h3 className="text-base font-bold text-white font-display uppercase tracking-wide border-b border-pitch-800 pb-3">
                Order Summary ({items.length} items)
              </h3>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => (
                  <div key={item.product.id} className="flex space-x-3 items-center text-xs">
                    <div className="relative w-12 h-12 rounded-lg bg-pitch-950 overflow-hidden flex-shrink-0 border border-pitch-800">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white truncate">{item.product.name}</div>
                      <div className="text-[11px] text-chrome-400 font-mono">Qty: {item.quantity}</div>
                      {item.selectedServiceAddon && (
                        <div className="text-[10px] text-purple">+ {item.selectedServiceAddon.name}</div>
                      )}
                    </div>
                    <div className="font-mono text-cyan font-bold whitespace-nowrap">
                      {formatINR((item.product.salePrice ?? item.product.price) * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Calculation */}
              <div className="border-t border-pitch-800 pt-4 space-y-2 text-xs text-chrome-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono text-white">{formatINR(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insured Express Shipping</span>
                  <span className="text-emerald-400 font-bold uppercase text-[10px]">FREE</span>
                </div>
                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-pitch-800">
                  <span>Total Amount</span>
                  <span className="font-mono text-cyan">{formatINR(subtotal)}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-xl bg-cyan text-black font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)] disabled:opacity-50"
              >
                {isProcessing ? (
                  <span>Connecting Gateway & Processing...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 font-bold" />
                    <span>Confirm Order ({formatINR(subtotal)})</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center space-x-2 text-[10px] text-chrome-500">
                <Truck className="w-3.5 h-3.5 text-cyan" />
                <span>Dispatches from Bengaluru / Mumbai hubs in 24 hours</span>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
