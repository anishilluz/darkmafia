'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

interface BeforeAfterProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
  description?: string;
}

export default function BeforeAfterSlider({
  beforeImage = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  afterImage = 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
  beforeLabel = 'Stock OEM Reflector & Dull Halogen',
  afterLabel = 'Dark Mafia Bi-LED + RGB Devil Eye Overhaul',
  title = 'REAL NIGHT VISION & STANCE TRANSFORMATION',
  description = 'Drag the slider to see the dramatic contrast between factory yellowed halogen reflectors and Dark Mafia surgical Bi-LED cutoffs.'
}: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <section className="py-20 bg-pitch-900 border-t border-pitch-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-cyan text-xs font-mono tracking-widest uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Visual Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-chrome-400 mt-2">
            {description}
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-pitch-700 bg-pitch-950 shadow-2xl relative select-none">
          <div
            className="relative aspect-[16/9] w-full cursor-ew-resize overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <Image
              src={afterImage}
              alt="After Dark Mafia Customization"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            <div className="absolute top-4 right-4 bg-pitch-950/85 backdrop-blur-md border border-cyan/60 px-3 py-1.5 rounded-lg text-xs font-bold text-cyan flex items-center space-x-1.5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              <span>AFTER: {afterLabel}</span>
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full" style={{ width: '100%', minWidth: '100%' }}>
                {/* Note: In CSS, we stretch the image inside to match parent container width */}
                <div className="absolute inset-0 w-[100vw] max-w-4xl h-full">
                  <Image
                    src={beforeImage}
                    alt="Before Dark Mafia Customization"
                    fill
                    className="object-cover filter contrast-75 brightness-75"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-pitch-950/85 backdrop-blur-md border border-pitch-600 px-3 py-1.5 rounded-lg text-xs font-bold text-chrome-300 shadow-lg">
                <span>BEFORE: {beforeLabel}</span>
              </div>
            </div>

            {/* Divider Line and Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-cyan shadow-[0_0_15px_#00F0FF] flex items-center justify-center pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-9 h-9 rounded-full bg-cyan text-black font-bold flex items-center justify-center shadow-2xl border-2 border-pitch-950">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

          </div>

          {/* Bottom Slider Control Bar */}
          <div className="p-4 bg-pitch-950 border-t border-pitch-800 flex items-center justify-between text-xs text-chrome-400">
            <span>◄ Drag slider left for stock comparison</span>
            <span className="font-mono text-cyan font-bold">{Math.round(sliderPos)}% Reveal</span>
            <span>Drag slider right for Dark Mafia build ►</span>
          </div>
        </div>

      </div>
    </section>
  );
}
