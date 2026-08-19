'use client';

import React from 'react';
import { useStore } from '../store/useStore';
import { 
  Sparkles, 
  Tv, 
  KeyRound, 
  RefreshCw, 
  Gamepad2, 
  Gift, 
  LayoutTemplate, 
  CreditCard, 
  Grid,
  SlidersHorizontal,
  ArrowUpDown,
  Filter,
  X,
  Projector
} from 'lucide-react';

export const CategoryFilterBar: React.FC = () => {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedType,
    setSelectedType,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    products
  } = useStore();

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv': return Tv;
      case 'Projector': return Projector;
      case 'Sparkles': return Sparkles;
      case 'KeyRound': return KeyRound;
      case 'RefreshCw': return RefreshCw;
      case 'Gamepad2': return Gamepad2;
      case 'Gift': return Gift;
      case 'LayoutTemplate': return LayoutTemplate;
      case 'CreditCard': return CreditCard;
      default: return Grid;
    }
  };

  const productTypes = [
    { value: 'ALL', label: 'All Product Types' },
    { value: 'HARDWARE', label: 'Smart Projectors & Cinema' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'newest', label: 'Newest Arrivals' },
    { value: 'price_asc', label: 'Price: Low to High' },
    { value: 'price_desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
  ];

  const hasActiveFilters = selectedCategory !== 'all' || selectedType !== 'ALL' || searchQuery.trim() !== '';

  return (
    <div className="w-full space-y-3 sm:space-y-4 pt-4 sm:pt-6 pb-2 bg-[#111827] rounded-xl sm:rounded-2xl px-2 sm:px-3">
      {/* Category Pill Slider */}
      <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth snap-x-smooth -mx-1 px-1">
        {categories.map(cat => {
          const Icon = getCategoryIcon(cat.icon);
          const isSelected = selectedCategory === cat.slug;
          
          // count products in category
          const count = cat.slug === 'all' 
            ? products.length 
            : products.filter(p => p.category.slug === cat.slug).length;

          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl shrink-0 text-[11px] sm:text-xs font-bold transition-all cursor-pointer border snap-start-item ${
                isSelected
                  ? 'bg-blue-700 text-white border-blue-400 shadow-lg shadow-blue-700/30 scale-[1.02]'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
              }`}
            >
              <div 
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-md sm:rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-white/20' : 'bg-slate-800 text-blue-400'
                }`}
              >
                <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </div>
              <span className="whitespace-nowrap">{cat.name}</span>
              
              <span className={`px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-mono ${
                isSelected ? 'bg-blue-800 text-white' : 'bg-slate-800 text-slate-400'
              }`}>
                {count}
              </span>

              {cat.badge && (
                <span className="px-1.5 py-0.2 rounded-full bg-pink-500 text-white text-[8px] sm:text-[9px] font-black uppercase">
                  {cat.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Filter and Sorting Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-900/50 border border-slate-800/80">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5 flex-1">
          {/* Product Type dropdown */}
          <div className="relative flex-1 min-w-[120px] sm:flex-none">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full h-9 px-2 sm:px-3 pr-8 rounded-lg sm:rounded-xl bg-slate-950/80 border border-slate-700/60 text-[11px] sm:text-xs font-semibold text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer appearance-none"
            >
              {productTypes.map(t => (
                <option key={t.value} value={t.value} className="bg-slate-900 text-slate-200">
                  {t.label}
                </option>
              ))}
            </select>
            <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Sort By Dropdown */}
          <div className="relative flex-1 min-w-[120px] sm:flex-none">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full h-9 px-2 sm:px-3 pr-8 rounded-lg sm:rounded-xl bg-slate-950/80 border border-slate-700/60 text-[11px] sm:text-xs font-semibold text-slate-200 focus:outline-none focus:border-blue-500 cursor-pointer appearance-none"
            >
              {sortOptions.map(s => (
                <option key={s.value} value={s.value} className="bg-slate-900 text-slate-200">
                  {s.label}
                </option>
              ))}
            </select>
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Reset Filters button */}
          {hasActiveFilters && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedType('ALL');
                setSearchQuery('');
              }}
              className="h-9 px-3 rounded-lg sm:rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 text-[11px] sm:text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
            >
              <X className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Filters</span>
            </button>
          )}
        </div>

        {/* Live filtered count feedback */}
        <div className="text-[11px] sm:text-xs font-medium text-slate-400 flex items-center gap-2 shrink-0">
          <span className="hidden sm:inline">Showing products</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span className="text-emerald-400 font-bold">Live</span>
        </div>
      </div>
    </div>
  );
};
