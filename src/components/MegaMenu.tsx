'use client';

import React from 'react';
import { useStore } from '../store/useStore';
import { 
  Tv, 
  Cpu, 
  Gamepad2, 
  Key, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers, 
  ArrowRight, 
  Star,
  Download,
  Gift
} from 'lucide-react';
import { Product } from '../types';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const { categories, products, setSelectedCategory, setSelectedProduct, formatPKR } = useStore();

  if (!isOpen) return null;

  const featuredProducts = products.filter(p => p.featured || p.salesCount > 5).slice(0, 3);

  // All main catalog categories shown in the mega-menu
  const megaCategories = [
    {
      id: 'cat-projectors',
      slug: 'smart-projectors',
      name: 'Smart Projectors',
      icon: Tv,
      badge: '4K Cinema',
      sub: ['Magcubic HY300 PRO', 'HY300 Plus', 'Magcubic HY300Pro Plus', 'HT23 Smart Cinema', 'HCS350-Pro Laser', 'HM103-A Ultra', 'HY7 Battery Portable']
    },
    {
      id: 'cat-streaming',
      slug: 'streaming',
      name: 'Video Streaming',
      icon: Sparkles,
      badge: 'Instant Access',
      sub: ['Netflix Premium UHD 4K', 'Spotify Premium Individual', 'YouTube Premium Family', 'Disney+ Premium 4K']
    },
    {
      id: 'cat-ai',
      slug: 'ai-tools',
      name: 'AI Tools',
      icon: Cpu,
      badge: 'GPT-4o & Claude',
      sub: ['ChatGPT Plus (GPT-4o)', 'Claude 3.5 Sonnet Pro', 'Gemini Advanced (Google One)', 'Cursor Pro AI Code Editor']
    },
    {
      id: 'cat-games',
      slug: 'games',
      name: 'Games Top-Up',
      icon: Gamepad2,
      badge: 'Instant Recharge',
      sub: ['PUBG Mobile UC', 'Valorant Points (VP)', 'Genshin Impact Crystals', 'League of Legends RP']
    },
  ];

  return (
    <div 
      onMouseLeave={onClose}
      className="absolute top-full left-0 w-full bg-[#0f172a] border-b border-slate-800 shadow-2xl z-50 p-6 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
        
        {/* Category Columns */}
        {megaCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div key={cat.id} className="space-y-3">
              <button
                onClick={() => {
                  setSelectedCategory(cat.slug);
                  onClose();
                }}
                className="w-full flex items-center justify-between text-left group cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-slate-800 text-[#3b82f6] group-hover:bg-[#3b82f6] group-hover:text-slate-950 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-white text-xs group-hover:text-[#3b82f6] transition-colors">
                    {cat.name}
                  </span>
                </div>
              </button>

              <div className="space-y-1.5 pl-7 border-l border-slate-800">
                {cat.sub.map((subItem, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      onClose();
                    }}
                    className="block text-left text-[11px] text-slate-400 hover:text-white transition-colors cursor-pointer w-full truncate"
                  >
                    {subItem}
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        {/* Featured Banner in Mega Menu */}
        <div className="col-span-1 md:col-span-4 lg:col-span-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-blue-400/10 text-[#3b82f6] border border-blue-400/30">
              Featured Deals
            </span>
            <span className="text-xs text-slate-300">
              PlayBeat Cinema Smart Projectors with 1-Year TCS Courier Dispatch Guarantee
            </span>
          </div>

          <div className="flex items-center gap-3">
            {featuredProducts.slice(0, 2).map(p => (
              <button
                key={p.id}
                onClick={() => {
                  setSelectedProduct(p);
                  onClose();
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-slate-200 cursor-pointer"
              >
                <span className="font-bold truncate max-w-[140px]">{p.title}</span>
                <span className="font-bold text-[#3b82f6] font-mono">{formatPKR(p.discountPrice || p.price)}</span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
