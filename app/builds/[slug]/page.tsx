import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBuildBySlug, getBuilds, getProducts, getServices } from '@/lib/api/wordpress';
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider';
import ProductCard from '@/components/product/ProductCard';
import { Sparkles, MapPin, ArrowRight, Wrench, CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const builds = await getBuilds();
  return builds.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const build = await getBuildBySlug(slug);
  if (!build) return { title: 'Build Not Found | Dark Mafia Customs' };

  return {
    title: `${build.title} | Dark Mafia Customs`,
    description: build.story,
  };
}

export const revalidate = 3600;

export default async function BuildDetailPage({ params }: Props) {
  const { slug } = await params;
  const build = await getBuildBySlug(slug);

  if (!build) {
    notFound();
  }

  const allProducts = await getProducts();
  const allServices = await getServices();

  const usedProducts = allProducts.filter((p) => build.productsUsedIds.includes(p.id));
  const performedServices = allServices.filter((s) => build.servicesPerformed.includes(s.title));

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono text-chrome-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <Link href="/builds" className="hover:text-white">Builds</Link>
          <span>/</span>
          <span className="text-cyan truncate max-w-xs">{build.title}</span>
        </div>

        {/* Hero Section */}
        <div className="rounded-3xl bg-pitch-900 border border-pitch-800 p-8 sm:p-12 mb-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="px-3 py-1 rounded-full bg-purple/20 border border-purple/40 text-purple font-bold uppercase">
                {build.vehicleType === 'car' ? 'Car Overhaul' : 'Superbike Overhaul'}
              </span>
              <span className="text-chrome-400 flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-cyan" />
                <span>{build.location}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
              {build.title}
            </h1>

            <p className="text-sm sm:text-base text-chrome-300 font-light leading-relaxed">
              {build.story}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="/build-your-ride"
                className="px-8 py-3.5 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
              >
                <span>Replicate This Exact Build</span>
                <ArrowRight className="w-4 h-4 font-bold" />
              </Link>
              <Link
                href="/customization-request"
                className="px-6 py-3.5 rounded-xl bg-pitch-950 border border-purple text-purple hover:bg-purple/20 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Custom Workshop Consultation</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Before & After Slider */}
        <div className="mb-16">
          <BeforeAfterSlider
            beforeImage={build.beforeImage}
            afterImage={build.afterImage}
            beforeLabel="Stock Vehicle Headlights & Stance"
            afterLabel="Completed Dark Mafia Build"
            title="THE VISUAL TRANSFORMATION"
            description="Drag to inspect the contrast between original factory look and our completed modification."
          />
        </div>

        {/* Services Executed Section */}
        <div className="mb-16 pt-12 border-t border-pitch-800">
          <div className="mb-8">
            <span className="text-xs font-mono text-purple uppercase tracking-widest">Workshop Labor</span>
            <h2 className="text-2xl font-black text-white uppercase font-display">
              Services Performed On This Machine
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {build.servicesPerformed.map((srvTitle, idx) => {
              const matchedService = allServices.find((s) => s.title === srvTitle);
              return (
                <div key={idx} className="p-5 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-2">
                  <div className="flex items-center space-x-2 text-cyan font-bold text-xs uppercase">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{srvTitle}</span>
                  </div>
                  <p className="text-xs text-chrome-400">
                    {matchedService?.shortDescription || 'Executed by certified Dark Mafia technicians in our clean room.'}
                  </p>
                  {matchedService && (
                    <div className="pt-2">
                      <Link
                        href={`/services/${matchedService.slug}`}
                        className="text-xs text-purple hover:underline font-semibold flex items-center space-x-1"
                      >
                        <span>View Service Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Products Installed — Direct Shop Connection */}
        {usedProducts.length > 0 && (
          <div className="mb-16 pt-12 border-t border-pitch-800">
            <div className="mb-8">
              <span className="text-xs font-mono text-cyan uppercase tracking-widest">Shop The Build</span>
              <h2 className="text-2xl font-black text-white uppercase font-display">
                Exact Products Installed On This Machine
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {usedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
