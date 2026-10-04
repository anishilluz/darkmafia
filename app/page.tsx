import React from 'react';
import Link from 'next/link';
import { getProducts, getServices, getBuilds } from '@/lib/api/wordpress';
import Hero from '@/components/home/Hero';
import VehicleFinder from '@/components/home/VehicleFinder';
import ServicesGrid from '@/components/home/ServicesGrid';
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider';
import BuildsShowcase from '@/components/home/BuildsShowcase';
import BuildYourRideTeaser from '@/components/home/BuildYourRideTeaser';
import ProductCard from '@/components/product/ProductCard';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Wrench, Eye, Star, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';

export const revalidate = 3600; // 1 hour ISR

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Vehicle Finder Section */}
      <VehicleFinder />

      {/* 3. Featured Products Grid */}
      <section className="py-20 bg-pitch-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase mb-2">
                <Zap className="w-3.5 h-3.5" />
                <span>Featured Optical & Styling Upgrades</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight">
                HIGH-PERFORMANCE INVENTORY
              </h2>
              <p className="text-sm text-chrome-400 mt-1">
                Verified high-output Bi-LED projector assemblies, BLE Devil Eyes, and all-weather fog optics.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                href="/shop"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan hover:underline"
              >
                <span>Browse Entire Catalog ({products.length} Products)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Signature Experience: Build Your Ride Configurator Teaser */}
      <BuildYourRideTeaser />

      {/* 5. The 7 Certified Services (Exact reference from uploaded screenshot) */}
      <ServicesGrid />

      {/* 6. Interactive Before / After Transformation Slider */}
      <BeforeAfterSlider />

      {/* 7. Dark Mafia Completed Builds Showcase */}
      <BuildsShowcase />

      {/* 8. Why Dark Mafia Customs — Engineering Differentiators */}
      <section className="py-20 bg-pitch-900 border-t border-pitch-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Dark Mafia Difference</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight">
              ENGINEERED FOR NIGHT DOMINANCE
            </h2>
            <p className="text-sm text-chrome-400 mt-2">
              We reject cheap plug-in LED bulbs that scatter blinding glare. Every Dark Mafia upgrade is optically calibrated to international road cutoff standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-pitch-950 border border-pitch-800 hover:border-cyan/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display uppercase">
                Laser Cutoff Optical Alignment
              </h3>
              <p className="text-xs text-chrome-400 leading-relaxed">
                Every Bi-LED retrofit is aligned against a computerized laser matrix to guarantee a razor-sharp horizontal light cutoff. Superior road distance with zero blinding glare for oncoming drivers.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pitch-950 border border-pitch-800 hover:border-purple/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple/10 border border-purple/30 flex items-center justify-center text-purple">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display uppercase">
                Oven Butyl Re-Sealing Chamber
              </h3>
              <p className="text-xs text-chrome-400 leading-relaxed">
                Say goodbye to rainy season headlight fogging. We bake and reseal headlights with OEM-specification hot-melt butyl sealant inside precision temperature ovens with a zero-condensation guarantee.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-pitch-950 border border-pitch-800 hover:border-devil/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-devil/10 border border-devil/30 flex items-center justify-center text-devil">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-display uppercase">
                2-Year Direct Replacement
              </h3>
              <p className="text-xs text-chrome-400 leading-relaxed">
                No endless repair queues. If any Dark Mafia Bi-LED driver, LED projector core, or fog unit fails under warranty, we issue a direct brand-new replacement module.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Automotive Knowledge Hub (AEO / GEO Content) */}
      <section className="py-20 bg-pitch-950 border-t border-pitch-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Automotive Lighting Knowledge Hub</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight">
                GUIDES, COMPARISONS & LEGALITY
              </h2>
              <p className="text-sm text-chrome-400 mt-1">
                Technical deep-dives written by automotive engineers to guide your customization choices.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                href="/blog"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-cyan hover:underline"
              >
                <span>Read All Articles</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <div
                key={post.slug}
                className="rounded-2xl bg-pitch-900 border border-pitch-800 hover:border-cyan/60 transition-all p-6 space-y-4 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-chrome-400">
                    <span className="text-cyan font-semibold">{post.category}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan transition-colors leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-xs text-chrome-400 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-pitch-800 flex justify-between items-center text-xs">
                  <span className="text-chrome-500 font-mono">{post.date}</span>
                  <Link href={`/blog/${post.slug}`} className="text-cyan hover:underline font-bold flex items-center space-x-1">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="py-24 bg-gradient-to-b from-pitch-950 to-pitch-900 border-t border-pitch-800 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight">
            YOUR VEHICLE. YOUR STYLE. <span className="text-cyan">YOUR BUILD.</span>
          </h2>
          <p className="text-sm sm:text-base text-chrome-300 font-light max-w-xl mx-auto leading-relaxed">
            Ready to upgrade your car or bike? Shop our tested inventory with nationwide delivery or consult our technicians for a bespoke workshop modification.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/build-your-ride"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan text-black font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            >
              Start &quot;Build Your Ride&quot;
            </Link>
            <Link
              href="/customization-request"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-pitch-900 border border-purple text-white hover:bg-purple/20 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Request Customization Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
