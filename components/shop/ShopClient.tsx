'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types';
import ProductCard from '@/components/product/ProductCard';
import { useGarage } from '@/lib/context/garage-context';
import { Filter, SlidersHorizontal, Car, Bike, Search, X, CheckCircle2 } from 'lucide-react';

export default function ShopClient({ initialProducts }: { initialProducts: Product[] }) {
  const { activeVehicle, selectedVehicleType, setVehicleType, clearVehicle } = useGarage();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterFitmentOnly, setFilterFitmentOnly] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'lighting', name: 'DSR Lighting & Bi-LED' },
    { id: 'styling', name: 'Styling & Aesthetics' },
    { id: 'accessories', name: 'Accessories & Wiring' },
  ];

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(p => {
      // Vehicle type match
      const typeMatch = p.vehicleType === 'both' || p.vehicleType === selectedVehicleType;
      if (!typeMatch) return false;

      // Category match
      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;

      // Fitment filter
      if (filterFitmentOnly && activeVehicle) {
        const isCompatible = p.isUniversal || p.compatibleVehicleIds?.includes(activeVehicle.id);
        if (!isCompatible) return false;
      }

      // Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesDesc = p.shortDescription.toLowerCase().includes(q);
        const matchesSku = p.sku.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesSku) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return (a.salePrice ?? a.price) - (b.salePrice ?? b.price);
      if (sortBy === 'price-high') return (b.salePrice ?? b.price) - (a.salePrice ?? a.price);
      if (sortBy === 'rating') return b.rating - a.rating;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [initialProducts, selectedVehicleType, selectedCategory, filterFitmentOnly, activeVehicle, searchQuery, sortBy]);

  return (
    <div className="py-12 bg-pitch-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-xs font-mono text-chrome-400 mb-2">
            <span>Home</span>
            <span>/</span>
            <span className="text-cyan">Automotive Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white uppercase font-display tracking-tight">
            AUTOMOTIVE LIGHTING & CUSTOM PARTS
          </h1>
          <p className="text-xs sm:text-sm text-chrome-400 mt-1 max-w-2xl">
            Genuine Dark Mafia DSR Bi-LED projector units, Bluetooth app-controlled Devil Eyes, waterproof fog lights, and high-temp ceramic wiring looms.
          </p>
        </div>

        {/* Active Vehicle Compatibility Banner */}
        {activeVehicle && (
          <div className="mb-8 p-4 rounded-2xl bg-pitch-900 border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">
                  Garage Vehicle Active: <span className="text-cyan">{activeVehicle.make} {activeVehicle.model} ({activeVehicle.generation})</span>
                </div>
                <div className="text-[11px] text-chrome-400 font-mono">
                  Socket: {activeVehicle.headlightSocket} | Fog: {activeVehicle.fogSocket || 'N/A'}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2 text-xs font-semibold text-chrome-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterFitmentOnly}
                  onChange={(e) => setFilterFitmentOnly(e.target.checked)}
                  className="rounded border-pitch-700 text-cyan focus:ring-cyan bg-pitch-950 w-4 h-4"
                />
                <span>Only show guaranteed direct fits</span>
              </label>
              <button
                onClick={clearVehicle}
                className="text-xs text-chrome-500 hover:text-rose-400"
              >
                Clear
              </button>
            </div>
          </div>
        )}

        {/* Filter Controls Toolbar */}
        <div className="p-4 rounded-2xl bg-pitch-900 border border-pitch-800 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-chrome-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, DSR, sockets..."
                className="w-full bg-pitch-950 border border-pitch-700 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-chrome-500 focus:outline-none focus:border-cyan"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-chrome-500 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Vehicle Type Switcher */}
            <div className="flex bg-pitch-950 rounded-xl p-1 border border-pitch-700">
              <button
                onClick={() => setVehicleType('car')}
                className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedVehicleType === 'car' ? 'bg-purple text-white' : 'text-chrome-400 hover:text-white'
                }`}
              >
                <Car className="w-3.5 h-3.5" />
                <span>Car Parts</span>
              </button>
              <button
                onClick={() => setVehicleType('bike')}
                className={`flex items-center space-x-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedVehicleType === 'bike' ? 'bg-cyan text-black font-bold' : 'text-chrome-400 hover:text-white'
                }`}
              >
                <Bike className="w-3.5 h-3.5" />
                <span>Bike Parts</span>
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-auto flex items-center space-x-2">
              <span className="text-xs text-chrome-400 whitespace-nowrap font-mono">Sort By:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-pitch-950 border border-pitch-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-pitch-800/80">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                    : 'bg-pitch-950 text-chrome-400 hover:text-white border border-pitch-800'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 rounded-2xl bg-pitch-900 border border-pitch-800 space-y-4">
            <div className="w-16 h-16 rounded-full bg-pitch-950 border border-pitch-700 flex items-center justify-center mx-auto text-chrome-500">
              <Filter className="w-8 h-8 text-cyan/40" />
            </div>
            <h3 className="text-base font-bold text-white font-display uppercase">
              No matching products found
            </h3>
            <p className="text-xs text-chrome-400 max-w-sm mx-auto">
              Try adjusting your category filter, clearing your vehicle filter, or resetting your search term.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setFilterFitmentOnly(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-pitch-800 text-cyan text-xs font-bold uppercase tracking-wider hover:bg-pitch-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
