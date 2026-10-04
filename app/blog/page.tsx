import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS } from '@/lib/data';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Automotive Lighting Knowledge Hub & Guides | Dark Mafia Customs',
  description: 'Technical automotive lighting articles, DSR Bi-LED comparisons, Devil Eye installation legality, and vehicle styling guides from Dark Mafia Customs.',
};

export default function BlogPage() {
  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Automotive Engineering Knowledge</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight">
            AUTOMOTIVE KNOWLEDGE HUB
          </h1>
          <p className="text-sm text-chrome-400 mt-2 leading-relaxed">
            In-depth guides, optical comparisons, and legal frameworks for automotive lighting and custom vehicle modifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.slug}
              className="rounded-3xl bg-pitch-900 border border-pitch-800 hover:border-cyan/60 transition-all overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div className="relative aspect-[16/10] bg-pitch-950 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-pitch-950/85 backdrop-blur-md border border-pitch-700 text-[10px] font-mono text-cyan uppercase font-bold">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[11px] font-mono text-chrome-500">
                    <Clock className="w-3 h-3 text-cyan" />
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
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

                <div className="pt-4 border-t border-pitch-800 flex justify-between items-center">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-cyan hover:underline flex items-center space-x-1"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
