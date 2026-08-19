'use client';

import React from 'react';
import { ArrowRight, Projector, Sparkles, Cpu, Gamepad2 } from 'lucide-react';
import { useStore } from '../store/useStore';

export const FeaturedCategoriesPremium: React.FC = () => {
  const { setActiveView, setSelectedCategory } = useStore();

  const categories = [
    {
      id: 'smart-projectors',
      label: 'Smart Projectors',
      icon: Projector,
      desc: 'Magcubic HY300, HM103-A, HCS350-Pro, HT23 & HY7 — verified PlayBeat 4K cinema projectors with TCS nationwide delivery',
      color: 'bg-blue-50 border-blue-200 text-blue-600',
    },
    {
      id: 'streaming',
      label: 'Video Streaming',
      icon: Sparkles,
      desc: 'Netflix Premium UHD 4K, Spotify Premium, YouTube Premium Family, Disney+ — instant account access',
      color: 'bg-pink-50 border-pink-200 text-pink-600',
    },
    {
      id: 'ai-tools',
      label: 'AI Tools',
      icon: Cpu,
      desc: 'ChatGPT Plus (GPT-4o), Claude 3.5 Sonnet Pro, Gemini Advanced, Cursor Pro — verified account upgrades',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-600',
    },
    {
      id: 'games',
      label: 'Games Top-Up',
      icon: Gamepad2,
      desc: 'PUBG Mobile UC, Valorant Points, Genshin Impact Crystals, League of Legends RP — instant recharge',
      color: 'bg-orange-50 border-orange-200 text-orange-600',
    },
  ];

  return (
    <section className="w-full py-12 sm:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#64748b]">
              Explore
            </span>
            <span className="h-px flex-1 bg-[#e5e7eb]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1f2937] leading-none tracking-[-0.05em] mb-3">
            Verified <span className="text-[#3b82f6]">Catalog</span>
          </h2>
          <p className="text-base text-[#64748b] max-w-2xl">
            Every product on PlayBeat Digital is sourced directly from the
            official store. Real prices, real stock, real warranty — no
            random data, no placeholders.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveView('storefront');
                  setSelectedCategory(category.id);
                  setTimeout(() => {
                    document
                      .getElementById('products')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }, 80);
                }}
                className="group p-6 bg-white rounded-lg border-2 border-[#e5e7eb] hover:border-[#3b82f6] shadow-sm hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-left flex flex-col"
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:scale-110 ${category.color}`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Title & Desc */}
                <h3 className="font-bold text-base text-[#1f2937] mb-1.5 group-hover:text-[#3b82f6] transition-colors">
                  {category.label}
                </h3>
                <p className="text-xs text-[#64748b] leading-relaxed flex-1">
                  {category.desc}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-1.5 text-[#3b82f6] font-bold text-xs mt-4 pt-3 border-t border-[#e5e7eb]">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
