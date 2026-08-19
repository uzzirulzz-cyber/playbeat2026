'use client';

import React, { useState } from 'react';
import { ArrowRight, Search, Zap, ShieldCheck, Truck, Clock, Award } from 'lucide-react';
import { useStore } from '../store/useStore';

export const HeroSectionPremium: React.FC = () => {
  const { setSearchQuery, setActiveView, setSelectedCategory } = useStore();
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    if (searchInput.trim()) {
      setSearchQuery(searchInput);
      setActiveView('storefront');
      setSelectedCategory('all');
      // Smooth scroll to products grid
      setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  const trustIndicators = [
    { icon: ShieldCheck, label: 'Verified Products', desc: '100% authentic' },
    { icon: Truck, label: 'Instant Delivery', desc: 'Digital downloads' },
    { icon: Clock, label: '24/7 Support', desc: 'Always available' },
    { icon: Award, label: 'Best Prices', desc: 'Competitive rates' },
  ];

  const stats = [
    { number: '50K+', label: 'Products' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '99.9%', label: 'Satisfaction' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <section className="w-full py-10 sm:py-16 lg:py-24 bg-[radial-gradient(circle_at_top_left,_rgba(215,165,58,0.12),_transparent_45%),linear-gradient(180deg,#f9fafb_0%,#f9fafb_100%)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#3b82f6] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-[#1f2937] opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10 sm:mb-16">
          {/* Left: Text & CTA */}
          <div className="space-y-5 sm:space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#eff6ff] border border-[#dbeafe] rounded-full w-fit shadow-[0_8px_18px_rgba(215,165,58,0.08)]">
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3b82f6]" />
              <span className="text-xs sm:text-sm font-bold text-[#1f2937]">
                Everything Digital. One Platform.
              </span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1f2937] leading-[0.95] mb-3 sm:mb-4 tracking-[-0.06em]">
                Premium Digital
                <span className="text-[#3b82f6]"> Marketplace</span>
              </h1>
              <p className="text-sm sm:text-lg text-[#64748b] leading-relaxed max-w-xl">
                Discover verified Magcubic smart projectors, 4K cinema hardware,
                and PlayBeat official accessories from PlayBeat Digital. Real
                prices, instant TCS courier dispatch, and a 1-year replacement
                warranty on every unit.
              </p>
            </div>

            {/* Primary Search CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center rounded-xl overflow-hidden border border-[#e5e7eb] bg-white shadow-[0_12px_28px_rgba(16,35,61,0.08)]">
                <input
                  type="text"
                  placeholder="Search projectors, Netflix, ChatGPT, PUBG UC..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 text-sm outline-none text-[#1f2937] placeholder-[#64748b] min-w-0"
                />
                <button
                  onClick={handleSearch}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-[#1f2937] font-bold transition-colors flex items-center justify-center"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
              <button
                onClick={handleSearch}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#1f2937] hover:bg-[#1e293b] text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors group shadow-[0_12px_25px_rgba(16,35,61,0.14)] text-sm sm:text-base"
              >
                <span>Browse Catalog</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Secondary CTA */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2 sm:pt-4">
              <button
                onClick={() => {
                  setSearchQuery('deals');
                  setSelectedCategory('all');
                  setTimeout(() => {
                    document.getElementById('deals')?.scrollIntoView({ behavior: 'smooth' });
                  }, 80);
                }}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#1f2937] border border-[#e5e7eb] hover:bg-white rounded-xl transition-colors shadow-[0_8px_16px_rgba(16,35,61,0.04)]"
              >
                Special Offers
              </button>
              <button
                onClick={() => {
                  document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-[#64748b] hover:text-[#1f2937] transition-colors"
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Right: Feature showcase cards */}
          <div className="space-y-4 hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="p-6 bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_14px_28px_rgba(16,35,61,0.06)] hover:shadow-[0_18px_30px_rgba(16,35,61,0.09)] hover:border-[#3b82f6] transition-all group">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <h3 className="font-bold text-[#1f2937] mb-1">Instant Delivery</h3>
                <p className="text-sm text-[#64748b]">
                  Get your digital products immediately after purchase
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_14px_28px_rgba(16,35,61,0.06)] hover:shadow-[0_18px_30px_rgba(16,35,61,0.09)] hover:border-[#3b82f6] transition-all group">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <h3 className="font-bold text-[#1f2937] mb-1">Secure Payments</h3>
                <p className="text-sm text-[#64748b]">
                  256-bit encryption protects your transactions
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_14px_28px_rgba(16,35,61,0.06)] hover:shadow-[0_18px_30px_rgba(16,35,61,0.09)] hover:border-[#3b82f6] transition-all group">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Truck className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <h3 className="font-bold text-[#1f2937] mb-1">Verified Products</h3>
                <p className="text-sm text-[#64748b]">All items authenticated and tested</p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-white rounded-2xl border border-[#e5e7eb] shadow-[0_14px_28px_rgba(16,35,61,0.06)] hover:shadow-[0_18px_30px_rgba(16,35,61,0.09)] hover:border-[#3b82f6] transition-all group">
                <div className="w-12 h-12 bg-[#dbeafe] rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-[#3b82f6]" />
                </div>
                <h3 className="font-bold text-[#1f2937] mb-1">24/7 Support</h3>
                <p className="text-sm text-[#64748b]">Our team is always here to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 py-6 sm:py-8 border-y border-[#e5e7eb]">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3b82f6] mb-1">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-[#64748b] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12">
          {trustIndicators.map((indicator, idx) => {
            const Icon = indicator.icon;
            return (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#3b82f6]" />
                </div>
                <h4 className="font-bold text-sm sm:text-base text-[#1e293b] mb-1">
                  {indicator.label}
                </h4>
                <p className="text-xs sm:text-sm text-[#64748b]">{indicator.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
