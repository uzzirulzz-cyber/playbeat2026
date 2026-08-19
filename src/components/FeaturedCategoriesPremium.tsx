'use client';

import React from 'react';
import { ArrowRight, Projector } from 'lucide-react';
import { useStore } from '../store/useStore';

export const FeaturedCategoriesPremium: React.FC = () => {
  const { setActiveView, setSelectedCategory } = useStore();

  const categories = [
    {
      id: 'smart-projectors',
      label: 'Smart Projectors',
      icon: Projector,
      desc: 'Magcubic HY300, HM103-A, HCS350-Pro, HT23 & HY7 — verified ZeroByte 4K cinema projectors',
      color: 'bg-yellow-50 border-yellow-200 text-yellow-600',
    },
  ];

  return (
    <section className="w-full py-12 sm:py-20 lg:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[11px] font-black uppercase tracking-[0.22em] text-[#58687c]">
              Explore
            </span>
            <span className="h-px flex-1 bg-[#dfe4eb]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#10233d] leading-none tracking-[-0.05em] mb-3">
            Verified <span className="text-[#d7a53a]">Catalog</span>
          </h2>
          <p className="text-base text-[#58687c] max-w-2xl">
            Every product on PlayBeat Digital is sourced directly from the
            ZeroByte official store. Real prices, real stock, real warranty —
            no random data, no placeholders.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-1 gap-4">
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
                      .getElementById('projectors')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }, 80);
                }}
                className="group p-6 sm:p-8 bg-[#102749] rounded-lg border-2 border-white/10 hover:border-[#FFD21F] shadow-sm hover:shadow-lg hover:shadow-[#FFD21F]/20 transition-all duration-300 text-left flex items-center gap-5 sm:gap-6"
              >
                {/* Icon Circle */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-lg flex items-center justify-center transition-all group-hover:scale-110 ${category.color}`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <div className="flex-1 min-w-0">
                  {/* Title & Desc */}
                  <h3 className="font-bold text-white text-lg sm:text-2xl mb-1 group-hover:text-[#FFD21F] transition-colors">
                    {category.label}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300">
                    {category.desc}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center gap-1.5 text-[#FFD21F] font-bold text-sm shrink-0">
                  <span className="hidden sm:inline">Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
