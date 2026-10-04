import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, PRODUCTS_CATALOG } from '@/lib/data';
import ProductCard from '@/components/product/ProductCard';
import { BookOpen, Clock, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return { title: 'Article Not Found | Dark Mafia Customs' };

  return {
    title: `${post.title} | Dark Mafia Customs`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const featuredProduct = PRODUCTS_CATALOG[0];

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-chrome-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white">Knowledge Hub</Link>
          <span>/</span>
          <span className="text-cyan truncate max-w-xs">{post.title}</span>
        </div>

        {/* Article Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan font-bold uppercase">
              {post.category}
            </span>
            <span className="text-chrome-400">{post.readTime}</span>
            <span className="text-chrome-500">•</span>
            <span className="text-chrome-400">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight leading-tight">
            {post.title}
          </h1>
          <p className="text-sm text-chrome-300 font-light leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 border border-pitch-800 bg-pitch-900 shadow-2xl">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Editorial Body Content */}
        <div className="prose prose-invert max-w-none text-chrome-300 text-sm leading-relaxed space-y-6">
          <h2 className="text-xl font-bold text-white uppercase font-display tracking-wide">
            Understanding High-Performance Automotive Illumination
          </h2>
          <p>
            When driving at high speeds on highway stretches, standard factory headlights—especially traditional reflector-based halogen units—fall dangerously short. They scatter light erratically, creating hot-spots directly in front of the vehicle hood while leaving the crucial mid-to-long distance roadway in pitch darkness.
          </p>
          <p>
            This is where <strong>DSR (Direct Surface Reflector / Dual Stage Retrofit) Bi-LED projectors</strong> revolutionize night vision. Instead of a bulb firing into an open chrome reflector bowl, a Bi-LED projector pairs high-transmittance curved optical glass with Osram solid-state diodes and an internal electromagnetic cutoff solenoid.
          </p>

          <div className="p-6 rounded-2xl bg-pitch-900 border border-cyan/40 my-8 space-y-2">
            <div className="flex items-center space-x-2 text-cyan font-bold text-xs uppercase font-mono">
              <Zap className="w-4 h-4" />
              <span>Key Takeaway: The Cutoff Advantage</span>
            </div>
            <p className="text-xs text-chrome-200">
              A clean optical cutoff keeps 100% of intense illumination focused on the asphalt surface below oncoming driver eye-lines. You get over 350 meters of safe visibility without flashing or blinding fellow motorists.
            </p>
          </div>

          <h3 className="text-lg font-bold text-white uppercase font-display tracking-wide">
            Bi-LED vs Factory Halogen & Xenon HID
          </h3>
          <p>
            Older HID Xenon systems require 35W–55W high-voltage external ballasts and take between 3 to 7 seconds to reach peak lumen output during high-beam flashes. Modern Bi-LED modules ignite in 0.001 seconds, draw less engine alternator current, generate drastically lower operating heat, and feature a 50,000-hour operational lifespan.
          </p>

          <h3 className="text-lg font-bold text-white uppercase font-display tracking-wide">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4 not-prose">
            <div className="p-4 rounded-xl bg-pitch-900 border border-pitch-800">
              <h4 className="text-xs font-bold text-white uppercase">Is upgrading to Bi-LED projectors street-legal?</h4>
              <p className="text-xs text-chrome-400 mt-1">
                Yes, provided the beam cutoff is leveled properly below oncoming driver eye-lines and color temperature remains between 4300K and 6000K white.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-pitch-900 border border-pitch-800">
              <h4 className="text-xs font-bold text-white uppercase">Can Bi-LED projectors be installed on bikes?</h4>
              <p className="text-xs text-chrome-400 mt-1">
                Absolutely. We perform custom Bi-LED retrofits for Yamaha R15, Continental GT 650, KTM Duke, and superbikes with dedicated relay wiring looms.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Product CTA Box */}
        <div className="mt-16 p-8 rounded-3xl bg-pitch-900 border border-pitch-700 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-cyan uppercase font-bold tracking-wider">Recommended Component</span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">In Stock</span>
          </div>
          <div className="max-w-md">
            <ProductCard product={featuredProduct} />
          </div>
        </div>

      </div>
    </div>
  );
}
