'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Currency, ThemePreset } from '../types';
import {
  Search,
  ShoppingCart,
  Heart,
  Palette,
  Sparkles,
  ChevronDown,
  X,
  Check,
  Headphones,
  ArrowRight,
  Menu,
  PhoneCall,
  User as UserIcon,
  ShoppingBag,
  Key,
  ShieldCheck,
  Flame,
  Sparkle,
  Tv,
  Send,
  MessageCircle,
  Truck,
  Award,
  Zap,
} from 'lucide-react';
import { MegaMenu } from './MegaMenu';

export const Navbar: React.FC = () => {
  const {
    cartTotalCount,
    favorites,
    currency,
    setCurrency,
    themePreset,
    setThemePreset,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categories,
    products,
    setSelectedProduct,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsOrderLookupOpen,
    setIsSupportOpen,
    setIsAuthModalOpen,
    setIsCustomerDashboardOpen,
    isAdminAuthenticated,
    isCustomerLoggedIn,
    activeView,
    setActiveView,
    user,
    formatPKR,
  } = useStore();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchCategoryFilter, setSearchCategoryFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileSearchInputRef = useRef<HTMLInputElement>(null);

  // Scroll-aware header — collapse announcement bar & shrink after 24px scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Filter products for quick search dropdown
  const filteredSearchProducts = searchQuery.trim()
    ? products
        .filter((p) => {
          const matchesCategory =
            searchCategoryFilter === 'all' ||
            p.category?.slug === searchCategoryFilter;
          const matchesQuery =
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tags.some((t) =>
              t.toLowerCase().includes(searchQuery.toLowerCase()),
            ) ||
            (p.category?.name &&
              p.category.name
                .toLowerCase()
                .includes(searchQuery.toLowerCase()));
          return matchesCategory && matchesQuery;
        })
        .slice(0, 5)
    : [];

  const currencies: { code: Currency; label: string; symbol: string }[] = [
    { code: 'PKR', label: 'Pakistani Rupee', symbol: '₨' },
    { code: 'USD', label: 'US Dollar', symbol: '$' },
    { code: 'EUR', label: 'Euro', symbol: '€' },
    { code: 'GBP', label: 'British Pound', symbol: '£' },
    { code: 'AED', label: 'UAE Dirham', symbol: 'AED' },
    { code: 'SAR', label: 'Saudi Riyal', symbol: 'SAR' },
  ];

  const themes: { id: ThemePreset; name: string; desc: string; preview: string }[] =
    [
      {
        id: 'martfury',
        name: 'Martfury Yellow',
        desc: 'Envato signature marketplace',
        preview: 'bg-[#fcb800]',
      },
      {
        id: 'obsidian',
        name: 'Cyber Obsidian',
        desc: 'Midnight slate with electric indigo glow',
        preview: 'bg-indigo-600',
      },
      {
        id: 'titanium',
        name: 'Titanium Light',
        desc: 'Crisp porcelain with high-contrast slate',
        preview: 'bg-slate-200 border border-slate-400',
      },
      {
        id: 'cyberpunk',
        name: 'Neon Cyberpunk',
        desc: 'Deep violet with magenta & neon glow',
        preview: 'bg-pink-500',
      },
      {
        id: 'emerald',
        name: 'Emerald FinTech',
        desc: 'Midnight emerald with luminous mint glow',
        preview: 'bg-emerald-500',
      },
    ];

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu or mobile search is open
  useEffect(() => {
    if (isMobileMenuOpen || isMobileSearchOpen || isMegaMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isMobileSearchOpen, isMegaMenuOpen]);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeView, selectedCategory]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    setIsMobileSearchOpen(false);
    // Scroll to products section
    if (typeof document !== 'undefined') {
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-xl bg-[#0b1120]/95 border-b border-slate-800 shadow-xl transition-all duration-300 ${
        isScrolled ? 'shadow-2xl shadow-black/40' : ''
      }`}
    >
      {/* 1. Top micro-announcement bar — collapses on scroll */}
      <div
        className={`w-full bg-[#070b14] border-b border-slate-800/80 px-3 sm:px-4 text-xs text-slate-300 overflow-hidden transition-all duration-300 ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-1.5 opacity-100'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-slate-400 truncate text-[11px] sm:text-xs">
              <span className="hidden sm:inline">Welcome to </span>
              <strong className="text-white font-bold">PlayBeat Digital</strong>{' '}
              <span className="hidden md:inline text-slate-500">•</span>
              <span className="hidden md:inline text-slate-400 ml-1">
                Coupon{' '}
                <code className="px-1.5 py-0.5 rounded bg-yellow-400/10 text-[#fcb800] font-mono font-bold border border-yellow-400/20">
                  PLAYBEAT20
                </code>{' '}
                for 20% OFF
              </span>
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 text-[11px] text-slate-300 shrink-0">
            {/* WhatsApp Primary */}
            <a
              href="https://wa.me/923321029333"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp Primary: +92 332 1029333"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-950/40 px-2 py-0.5 rounded-lg border border-emerald-500/30 hover:border-emerald-400/60"
            >
              <PhoneCall className="w-3 h-3 shrink-0" />
              <span className="font-mono font-bold hidden lg:inline">
                +92 332 1029333
              </span>
              <span className="font-mono font-bold lg:hidden">
                WA-1
              </span>
            </a>

            {/* WhatsApp Secondary */}
            <a
              href="https://wa.me/923341079333"
              target="_blank"
              rel="noreferrer"
              title="WhatsApp Secondary: +92 334 1079333"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors bg-emerald-950/40 px-2 py-0.5 rounded-lg border border-emerald-500/30 hover:border-emerald-400/60"
            >
              <PhoneCall className="w-3 h-3 shrink-0" />
              <span className="font-mono font-bold hidden lg:inline">
                +92 334 1079333
              </span>
              <span className="font-mono font-bold lg:hidden">
                WA-2
              </span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/playbeatdigital"
              target="_blank"
              rel="noreferrer"
              title="Telegram: @playbeatdigital"
              className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors bg-sky-950/40 px-2 py-0.5 rounded-lg border border-sky-500/30 hover:border-sky-400/60"
            >
              <Send className="w-3 h-3 shrink-0" />
              <span className="font-mono font-bold hidden xl:inline">
                @playbeatdigital
              </span>
              <span className="font-mono font-bold xl:hidden">
                Telegram
              </span>
            </a>

            {/* WeChat */}
            <a
              href="#wechat"
              title="WeChat ID: playbeatdigital (click to copy)"
              onClick={(e) => {
                e.preventDefault();
                try {
                  navigator.clipboard?.writeText('playbeatdigital');
                } catch {}
              }}
              className="flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors bg-green-950/40 px-2 py-0.5 rounded-lg border border-green-500/30 hover:border-green-400/60 cursor-pointer"
            >
              <MessageCircle className="w-3 h-3 shrink-0" />
              <span className="font-mono font-bold hidden xl:inline">
                WeChat: playbeatdigital
              </span>
              <span className="font-mono font-bold xl:hidden">
                WeChat
              </span>
            </a>

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyMenuOpen(!isCurrencyMenuOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-0.5"
                aria-label="Select currency"
              >
                <span className="font-mono font-bold text-[#fcb800]">
                  {currency}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isCurrencyMenuOpen && (
                <div className="absolute right-0 mt-1 w-44 bg-[#070b14] border border-slate-800 rounded-xl shadow-xl z-50 p-1 space-y-0.5">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c.code);
                        setIsCurrencyMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <span className="text-white font-bold">{c.code}</span>
                      <span className="text-slate-400 text-[10px]">
                        {c.symbol}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Preset Selector */}
            <div className="relative">
              <button
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-0.5 text-slate-400 hover:text-slate-200"
                aria-label="Select theme"
              >
                <Palette className="w-3 h-3 text-[#fcb800]" />
                <span className="capitalize hidden sm:inline">
                  {themePreset}
                </span>
              </button>

              {isThemeMenuOpen && (
                <div className="absolute right-0 mt-1 w-52 bg-[#070b14] border border-slate-800 rounded-xl shadow-xl z-50 p-1 space-y-0.5">
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setThemePreset(t.id);
                        setIsThemeMenuOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-left text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <span className={`w-3 h-3 rounded-full ${t.preview}`} />
                      <span className="text-white font-bold">{t.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div
        className={`max-w-7xl mx-auto px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-4 transition-all duration-300 ${
          isScrolled ? 'py-2' : 'py-2.5 sm:py-3'
        }`}
      >
        {/* Brand Logo — gradient badge with glow */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
              setActiveView('storefront');
            }}
            className="flex items-center gap-2 sm:gap-2.5 text-left cursor-pointer group"
            aria-label="PlayBeat Digital home"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-[#fcb800] blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-[#fcb800] via-yellow-300 to-amber-200 text-slate-950 flex items-center justify-center font-black text-base sm:text-lg shadow-lg shadow-yellow-500/30 group-hover:scale-105 transition-transform ring-1 ring-yellow-400/50">
                PB
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-base sm:text-lg tracking-tight text-white group-hover:text-[#fcb800] transition-colors">
                  PlayBeat
                </span>
                <span className="px-1.5 py-0.2 rounded bg-yellow-400/10 text-[#fcb800] text-[10px] font-black uppercase border border-yellow-400/30">
                  Digital
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono">
                playbeat.digital
              </p>
            </div>
          </button>
        </div>

        {/* Search Bar with Live Instant Autocomplete - Desktop only */}
        <div
          className="flex-1 max-w-xl relative hidden md:block"
          ref={searchRef}
        >
          <div className="relative flex items-center bg-[#070b14] rounded-2xl border border-slate-700/80 focus-within:border-[#fcb800] focus-within:ring-2 focus-within:ring-yellow-500/20 transition-all overflow-hidden">
            <Search className="w-4 h-4 text-slate-400 ml-3.5 shrink-0" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search Magcubic HY300, HM103-A, HY7 Battery..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setIsSearchOpen(true);
              }}
              onFocus={() => setIsSearchOpen(true)}
              className="w-full bg-transparent px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none"
            />
            {searchQuery ? (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 mr-2 text-slate-400 hover:text-white cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <kbd className="hidden lg:inline-block mr-3 px-1.5 py-0.5 rounded-md bg-slate-800/80 text-slate-400 text-[9px] font-mono font-bold border border-slate-700">
                ⌘K
              </kbd>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          {isSearchOpen && searchQuery.trim() && (
            <div className="absolute top-full left-0 w-full mt-1.5 bg-[#070b14] border border-slate-800 rounded-2xl shadow-2xl z-50 p-2 space-y-1">
              <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                Matching Products ({filteredSearchProducts.length})
              </div>
              {filteredSearchProducts.length === 0 ? (
                <div className="px-3 py-4 text-center text-xs text-slate-400">
                  No matching products found for &quot;{searchQuery}&quot;.
                </div>
              ) : (
                filteredSearchProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedProduct(p);
                      setIsSearchOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-800/80 text-left transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-slate-900 overflow-hidden shrink-0 border border-slate-700 flex items-center justify-center">
                        {p.cover?.image ? (
                          <img
                            src={p.cover.image}
                            alt={p.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Sparkles className="w-4 h-4 text-[#fcb800]" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {p.title}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {p.category?.name}
                        </div>
                      </div>
                    </div>
                    <div className="font-mono font-bold text-xs text-[#fcb800] shrink-0 ml-2">
                      {formatPKR(p.discountPrice || p.price)}
                    </div>
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {/* Right Header Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setIsMobileSearchOpen(true)}
            className="md:hidden p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white cursor-pointer transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Order Lookup Tracker */}
          <button
            onClick={() => setIsOrderLookupOpen(true)}
            className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold border border-slate-800 transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#fcb800]" />
            <span>Track Order</span>
          </button>

          {/* Customer Account Button */}
          <button
            onClick={() => {
              if (isCustomerLoggedIn) {
                setIsCustomerDashboardOpen(true);
              } else {
                setIsAuthModalOpen(true);
              }
            }}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 cursor-pointer transition-colors"
            aria-label={isCustomerLoggedIn ? user.name : 'Sign in'}
          >
            <UserIcon className="w-4 h-4 text-[#fcb800]" />
            <span className="hidden lg:inline truncate max-w-[120px]">
              {isCustomerLoggedIn ? user.name.split(' ')[0] : 'Sign In'}
            </span>
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => setIsWishlistOpen(true)}
            className="relative p-2 sm:p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white cursor-pointer transition-colors"
            title="Wishlist"
            aria-label="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 text-white text-[9px] font-black flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </button>

          {/* Cart Drawer Trigger — prominent with pulse when items present */}
          <button
            onClick={() => setIsCartOpen(true)}
            className={`relative flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-xl bg-[#fcb800] hover:bg-[#e5a700] text-slate-950 font-black text-xs cursor-pointer shadow-lg shadow-yellow-500/30 transition-transform active:scale-95 ${
              cartTotalCount > 0 ? 'ring-2 ring-yellow-300/50' : ''
            }`}
            aria-label={`Cart with ${cartTotalCount} items`}
          >
            {cartTotalCount > 0 && (
              <span className="absolute -inset-0.5 rounded-xl bg-yellow-400/40 blur-sm -z-10 animate-pulse" />
            )}
            <ShoppingCart className="w-4 h-4" />
            <span className="font-mono">{cartTotalCount}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white cursor-pointer transition-colors"
            aria-label="Open menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Secondary Navigation & Mega Menu Bar with Trust Badges */}
      <div className="w-full bg-[#070b14] border-t border-slate-800/80 px-3 sm:px-4 py-2 relative hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs gap-4">
          <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-1">
            {/* Mega Menu Toggle — gradient pill */}
            <button
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              className="flex items-center gap-2 font-black text-slate-950 bg-gradient-to-r from-[#fcb800] to-yellow-300 hover:from-[#e5a700] hover:to-yellow-200 transition-all cursor-pointer shrink-0 px-3 py-1.5 rounded-lg shadow-md shadow-yellow-500/20"
            >
              <Menu className="w-4 h-4" />
              <span className="uppercase tracking-wider">All Categories</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${
                  isMegaMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Quick Category links — only Smart Projectors is in the verified catalog */}
            {[
              {
                label: 'Smart Projectors',
                slug: 'smart-projectors',
                icon: Tv,
              },
            ].map((item) => (
              <button
                key={item.slug}
                onClick={() => {
                  setSelectedCategory(item.slug);
                  setIsMegaMenuOpen(false);
                }}
                className={`flex items-center gap-1.5 font-bold transition-colors cursor-pointer shrink-0 ${
                  selectedCategory === item.slug
                    ? 'text-[#fcb800]'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <item.icon className="w-3.5 h-3.5" />
                {item.label}
              </button>
            ))}

            {/* Trust badges — inline, only on xl+ */}
            <span className="hidden xl:flex items-center gap-1.5 text-slate-400 font-semibold shrink-0 ml-2">
              <Truck className="w-3.5 h-3.5 text-emerald-400" />
              <span>TCS Nationwide</span>
            </span>
            <span className="hidden xl:flex items-center gap-1.5 text-slate-400 font-semibold shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fcb800]" />
              <span>1-Yr Warranty</span>
            </span>
            <span className="hidden xl:flex items-center gap-1.5 text-slate-400 font-semibold shrink-0">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Verified ZeroByte</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setActiveView('storefront');
              }}
              className={`text-xs font-bold transition-colors cursor-pointer ${
                activeView === 'storefront'
                  ? 'text-[#fcb800]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Storefront
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => {
                setActiveView('admin');
              }}
              className={`flex items-center gap-1 text-xs font-bold transition-colors cursor-pointer px-2 py-0.5 rounded-lg border ${
                activeView === 'admin'
                  ? 'bg-yellow-400/20 text-[#fcb800] border-yellow-400/40'
                  : 'bg-slate-900 text-slate-400 hover:text-white border-slate-800'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#fcb800]" />
              <span>Admin Panel</span>
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => setIsSupportOpen(true)}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white cursor-pointer"
            >
              <Headphones className="w-3.5 h-3.5 text-[#fcb800]" />
              <span>Live Support</span>
            </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      </div>

      {/* Mobile Search Overlay */}
      {isMobileSearchOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0b1120] flex flex-col">
          <div className="flex items-center gap-2 p-3 border-b border-slate-800">
            <button
              onClick={() => setIsMobileSearchOpen(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-300 hover:text-white cursor-pointer"
              aria-label="Close search"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
            <form onSubmit={handleSearchSubmit} className="flex-1 flex items-center bg-[#070b14] rounded-2xl border border-slate-700 focus-within:border-[#fcb800] overflow-hidden">
              <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
              <input
                ref={mobileSearchInputRef}
                type="text"
                autoFocus
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1 mr-2 text-slate-400 hover:text-white"
                  aria-label="Clear"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {searchQuery.trim() && filteredSearchProducts.length > 0 ? (
              <>
                <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Matching Products ({filteredSearchProducts.length})
                </div>
                {filteredSearchProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setSelectedProduct(p);
                      setIsMobileSearchOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-[#070b14] hover:bg-slate-800 text-left transition-colors cursor-pointer border border-slate-800"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-10 h-10 rounded-lg bg-slate-900 overflow-hidden shrink-0 border border-slate-700 flex items-center justify-center">
                        {p.cover?.image ? (
                          <img src={p.cover.image} alt={p.title} className="w-full h-full object-cover" />
                        ) : (
                          <Sparkles className="w-5 h-5 text-[#fcb800]" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-white truncate">{p.title}</div>
                        <div className="text-xs text-slate-400">{p.category?.name}</div>
                      </div>
                    </div>
                    <div className="font-mono font-bold text-sm text-[#fcb800] shrink-0 ml-2">
                      {formatPKR(p.discountPrice || p.price)}
                    </div>
                  </button>
                ))}
              </>
            ) : (
              <div className="py-12 text-center text-slate-400 text-sm">
                {searchQuery.trim()
                  ? `No results for "${searchQuery}"`
                  : 'Start typing to search products...'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Slide-out Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="absolute inset-y-0 left-0 w-[85vw] max-w-sm bg-[#0b1120] border-r border-slate-800 flex flex-col shadow-2xl animate-in slide-in-from-left duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient logo + glow */}
            <div className="relative p-4 border-b border-slate-800 bg-gradient-to-br from-[#0b1120] via-[#0b1120] to-yellow-950/20 overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#fcb800]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-[#fcb800] blur-md opacity-50" />
                    <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#fcb800] via-yellow-300 to-amber-200 text-slate-950 flex items-center justify-center font-black text-base shadow-lg shadow-yellow-500/30 ring-1 ring-yellow-400/50">
                      PB
                    </div>
                  </div>
                  <div>
                    <div className="font-black text-base text-white">
                      PlayBeat <span className="text-[#fcb800]">Digital</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono">
                      playbeat.digital
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white cursor-pointer border border-slate-800"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Inline trust badges */}
              <div className="relative flex flex-wrap items-center gap-2 mt-3 text-[10px]">
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-semibold">
                  <Truck className="w-3 h-3" />
                  <span>TCS Nationwide</span>
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-yellow-950/40 border border-yellow-500/30 text-[#fcb800] font-semibold">
                  <ShieldCheck className="w-3 h-3" />
                  <span>1-Yr Warranty</span>
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-950/40 border border-amber-500/30 text-amber-400 font-semibold">
                  <Award className="w-3 h-3" />
                  <span>Verified ZeroByte</span>
                </span>
              </div>
            </div>

            {/* Quick Nav Links */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              <button
                onClick={() => {
                  setActiveView('storefront');
                  setSelectedCategory('all');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#fcb800]" />
                <span>Storefront</span>
              </button>

              <button
                onClick={() => {
                  setIsOrderLookupOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#fcb800]" />
                <span>Track Order</span>
              </button>

              <button
                onClick={() => {
                  setIsSupportOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold cursor-pointer"
              >
                <Headphones className="w-4 h-4 text-[#fcb800]" />
                <span>Live Support</span>
              </button>

              {/* Categories */}
              <div className="pt-3 pb-1 px-2 text-[10px] font-black uppercase tracking-wider text-slate-500">
                Categories
              </div>
              {[
                { label: 'Smart Projectors', slug: 'smart-projectors', icon: Tv },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.slug}
                    onClick={() => {
                      setSelectedCategory(item.slug);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-bold cursor-pointer transition-colors ${
                      selectedCategory === item.slug
                        ? 'bg-yellow-400/10 text-[#fcb800] border border-yellow-400/30'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}

              {/* Admin */}
              <div className="pt-3 pb-1 px-2 text-[10px] font-black uppercase tracking-wider text-slate-500">
                Portal
              </div>
              <button
                onClick={() => {
                  setActiveView('admin');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-xl text-sm font-bold cursor-pointer transition-colors ${
                  activeView === 'admin'
                    ? 'bg-yellow-400/20 text-[#fcb800] border border-yellow-400/40'
                    : 'bg-slate-900 text-slate-300 hover:text-white'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-[#fcb800]" />
                <span>Admin Panel</span>
              </button>
            </div>

            {/* Footer of Mobile Menu — multi-channel contact */}
            <div className="p-3 border-t border-slate-800 bg-[#070b14] space-y-2">
              <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 px-1">
                Contact Us
              </div>
              <a
                href="https://wa.me/923321029333"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp 1</span>
                </span>
                <span className="font-mono">+92 332 1029333</span>
              </a>
              <a
                href="https://wa.me/923341079333"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4" />
                  <span>WhatsApp 2</span>
                </span>
                <span className="font-mono">+92 334 1079333</span>
              </a>
              <a
                href="https://t.me/playbeatdigital"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-xl bg-sky-950/60 border border-sky-500/30 text-sky-400 text-xs font-bold cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </span>
                <span className="font-mono">@playbeatdigital</span>
              </a>
              <a
                href="#wechat"
                onClick={(e) => {
                  e.preventDefault();
                  try { navigator.clipboard?.writeText('playbeatdigital'); } catch {}
                }}
                className="flex items-center justify-between gap-2 w-full px-3 py-2.5 rounded-xl bg-green-950/60 border border-green-500/30 text-green-400 text-xs font-bold cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WeChat (tap to copy)</span>
                </span>
                <span className="font-mono">playbeatdigital</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
