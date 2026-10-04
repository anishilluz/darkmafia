import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getServiceBySlug, getServices, getProducts } from '@/lib/api/wordpress';
import BeforeAfterSlider from '@/components/home/BeforeAfterSlider';
import ProductCard from '@/components/product/ProductCard';
import { 
  Sparkles, 
  Wrench, 
  ShieldCheck, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle 
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = await getServices();
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: 'Service Not Found | Dark Mafia Customs' };

  return {
    title: `${service.title} | Dark Mafia Customs`,
    description: service.shortDescription,
  };
}

export const revalidate = 3600;

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const allProducts = await getProducts();
  const linkedProducts = allProducts.filter(p => service.linkedProductIds?.includes(p.id));

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'description': service.fullDescription,
    'provider': {
      '@type': 'AutoRepair',
      'name': 'Dark Mafia Customs'
    },
    'offers': {
      '@type': 'Offer',
      'price': service.startingPrice.replace(/[^0-9]/g, '') || '1999',
      'priceCurrency': 'INR'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="py-12 bg-pitch-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs font-mono text-chrome-400 mb-8">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-cyan">{service.title}</span>
          </div>

          {/* Service Hero */}
          <div className="rounded-3xl bg-pitch-900 border border-pitch-800 p-8 sm:p-12 mb-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase">
                <Wrench className="w-3.5 h-3.5" />
                <span>Certified Workshop Service</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-chrome-300 font-light leading-relaxed">
                {service.subtitle}
              </p>

              {/* Service Meta Chips */}
              <div className="flex flex-wrap gap-3 pt-4 text-xs font-mono">
                <div className="px-3 py-1.5 rounded-xl bg-pitch-950 border border-pitch-700 flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-cyan" />
                  <span className="text-chrome-300">Duration: <strong className="text-white">{service.estimatedDuration}</strong></span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-pitch-950 border border-pitch-700 flex items-center space-x-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-chrome-300">Warranty: <strong className="text-white">{service.warranty}</strong></span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-pitch-950 border border-pitch-700 flex items-center space-x-2 text-cyan">
                  <span>Starting: <strong>{service.startingPrice}</strong></span>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/customization-request?service=${service.slug}`}
                  className="px-8 py-3.5 rounded-xl bg-cyan text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                >
                  <span>Book This Service & Request Quote</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </Link>

                <Link
                  href="/build-your-ride"
                  className="px-6 py-3.5 rounded-xl bg-pitch-950 border border-purple text-purple hover:bg-purple/20 font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Include in Complete Vehicle Build</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Overview & Key Benefits */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-white uppercase font-display tracking-wide">
                Comprehensive Service Overview
              </h2>
              <p className="text-sm text-chrome-300 leading-relaxed">
                {service.fullDescription}
              </p>

              {/* Step-by-Step Procedure */}
              <div className="pt-4 space-y-4">
                <h3 className="text-lg font-bold text-white uppercase font-display tracking-wide">
                  Technical Execution Process
                </h3>
                <div className="space-y-3">
                  {service.process.map((step) => (
                    <div key={step.stepNumber} className="p-4 rounded-xl bg-pitch-900 border border-pitch-800 flex items-start space-x-3.5">
                      <span className="w-7 h-7 rounded-full bg-cyan text-black font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step.stepNumber}
                      </span>
                      <div>
                        <h4 className="text-xs font-bold text-white uppercase">{step.title}</h4>
                        <p className="text-xs text-chrome-400 mt-0.5 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Key Benefits */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-xl font-bold text-white uppercase font-display tracking-wide">
                Why Choose Dark Mafia
              </h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-2">
                    <div className="flex items-center space-x-2 text-cyan font-bold text-xs uppercase">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{benefit.title}</span>
                    </div>
                    <p className="text-xs text-chrome-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Before / After Slider for this Service */}
          <div className="mb-16">
            <BeforeAfterSlider
              beforeImage={service.beforeAfter.beforeImage}
              afterImage={service.beforeAfter.afterImage}
              title={`${service.title} — Visual Transformation`}
              description={service.beforeAfter.caption}
            />
          </div>

          {/* Linked Recommended Products */}
          {linkedProducts.length > 0 && (
            <div className="mb-16">
              <div className="mb-8">
                <span className="text-xs font-mono uppercase text-cyan tracking-widest">Compatible Components</span>
                <h3 className="text-2xl font-black text-white uppercase font-display tracking-tight">
                  Recommended Products For This Upgrade
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {linkedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {/* FAQs Accordion */}
          {service.faqs.length > 0 && (
            <div className="pt-12 border-t border-pitch-800 max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-xs font-mono text-cyan uppercase tracking-widest">Have Questions?</span>
                <h3 className="text-2xl font-black text-white uppercase font-display">
                  Frequently Asked Questions
                </h3>
              </div>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-2">
                    <h4 className="text-xs font-bold text-white flex items-center space-x-2">
                      <HelpCircle className="w-4 h-4 text-cyan flex-shrink-0" />
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-xs text-chrome-400 pl-6 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
