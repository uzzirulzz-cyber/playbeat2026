'use client';

import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  Zap,
  ShieldCheck,
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  Smartphone,
  CheckCircle2,
  ExternalLink,
  Lock,
  Download,
  Sparkles,
  MessageCircle,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { 
    setActiveView, 
    setSelectedCategory,
    setSelectedType,
    setIsOrderLookupOpen, 
    setIsSupportOpen 
  } = useStore();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [appDownloading, setAppDownloading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const handleDownloadApp = () => {
    setAppDownloading(true);
    setTimeout(() => {
      setAppDownloading(false);
      alert('PlayBeat Digital Progressive Web App (PWA) manifest ready. Pin to Home Screen on iOS / Android for instant access!');
    }, 800);
  };

  const handleQuickLink = (view: string, catSlug?: string, type?: string) => {
    setActiveView(view as any);
    if (catSlug) setSelectedCategory(catSlug);
    if (type) setSelectedType(type);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-slate-800 bg-[#0f172a] text-slate-400 text-xs mt-16 transition-colors">
      
      {/* Top Value / App Download Banner */}
      <div className="border-b border-slate-800/80 py-8 px-4 sm:px-6 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Brand & 24/7 Delivery badge */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3b82f6] p-0.5 flex items-center justify-center shadow-lg shadow-[#3b82f6]/20">
                <Zap className="w-5 h-5 text-slate-950 fill-slate-950" />
              </div>
              <div>
                <div className="font-extrabold text-base text-white flex items-center gap-2">
                  <span>PLAYBEAT.digital</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>24/7 Instant Delivery</span>
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Pakistan's premier digital marketplace for game keys, software licenses, AI tools, and gift cards. Instant delivery. Trusted by thousands.
                </div>
              </div>
            </div>
          </div>

          {/* Download Our App Box */}
          <div className="lg:col-span-6 p-4 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-900/90 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-11 h-11 rounded-xl bg-[#3b82f6]/15 border border-[#3b82f6]/30 flex items-center justify-center text-[#3b82f6] shrink-0">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white flex items-center gap-1.5">
                  <span>Download Our App</span>
                  <span className="px-1.5 py-0.2 rounded bg-blue-500/20 text-blue-300 text-[9px] font-bold">PWA / iOS / Android</span>
                </h4>
                <p className="text-[11px] text-slate-400">
                  Install on your phone for instant access & live updates.
                </p>
              </div>
            </div>
            <button
              onClick={handleDownloadApp}
              disabled={appDownloading}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#3b82f6] hover:bg-[#e0a400] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-blue-400/20 transition-all cursor-pointer shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{appDownloading ? 'Installing...' : 'Download Now'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">
        
        {/* Col 1: Brand & Contact Info (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white">PLAYBEAT</span>
              <span className="text-xl font-black text-[#3b82f6]">.digital</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pakistan's premier digital marketplace for game keys, software licenses, AI tools, and gift cards. Instant delivery. Trusted by thousands.
            </p>
          </div>

          <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs">
            {/* WhatsApp Primary */}
            <a
              href="https://wa.me/923321029333"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-slate-400 text-[10px] block">WhatsApp (Primary):</span>
                <span className="font-bold text-white font-mono">+92 332 1029333</span>
              </div>
            </a>

            {/* WhatsApp Secondary */}
            <a
              href="https://wa.me/923341079333"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-slate-400 text-[10px] block">WhatsApp (Secondary):</span>
                <span className="font-bold text-white font-mono">+92 334 1079333</span>
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/playbeatdigital"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors group"
            >
              <div className="w-7 h-7 rounded-lg bg-sky-950/60 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform shrink-0">
                <Send className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-slate-400 text-[10px] block">Telegram:</span>
                <span className="font-bold text-white font-mono">@playbeatdigital</span>
              </div>
            </a>

            {/* WeChat */}
            <a
              href="#wechat"
              onClick={(e) => {
                e.preventDefault();
                try { navigator.clipboard?.writeText('playbeatdigital'); } catch {}
              }}
              className="flex items-center gap-2.5 text-slate-300 hover:text-green-400 transition-colors group cursor-pointer"
            >
              <div className="w-7 h-7 rounded-lg bg-green-950/60 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform shrink-0">
                <MessageCircle className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-slate-400 text-[10px] block">WeChat (tap to copy ID):</span>
                <span className="font-bold text-white font-mono">playbeatdigital</span>
              </div>
            </a>

            {/* Email addresses */}
            <div className="space-y-1 text-slate-300 text-xs pt-2 border-t border-slate-800/60">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span><strong className="text-white font-mono">info@playbeat.digital</strong> <span className="text-slate-500 text-[11px]">(General)</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span><strong className="text-white font-mono">support@playbeat.digital</strong> <span className="text-slate-500 text-[11px]">(Support)</span></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span><strong className="text-white font-mono">director@playbeat.digital</strong> <span className="text-slate-500 text-[11px]">(Director)</span></span>
              </div>
            </div>

            {/* Location & Delivery */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold text-slate-200">Pakistan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold text-slate-200">24/7 Instant Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Col 2: Quick Links (2.5 cols) */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-extrabold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'all')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'smart-projectors', 'HARDWARE')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Smart Projectors
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'streaming', 'STREAMING')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Video Streaming
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'ai-tools', 'AI_TOOL')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                AI Tools
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'games', 'GAME')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Games Top-Up
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'gift-cards', 'GIFT_CARD')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Gift Cards
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Categories (2.5 cols) */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="font-extrabold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2">
            Categories
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'smart-projectors')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Smart Projectors
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'streaming')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Video Streaming
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'ai-tools')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                AI Tools
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'games')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Games Top-Up
              </button>
            </li>
            <li>
              <button
                onClick={() => handleQuickLink('storefront', 'gift-cards')}
                className="hover:text-[#3b82f6] transition-colors cursor-pointer text-left w-full"
              >
                Gift Cards
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Newsletter & Secure Checkout (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="space-y-2">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Subscribe to Newsletter</span>
              <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
            </h4>
            <p className="text-xs text-slate-400 leading-snug">
              Get flash sale alerts, free software keys, and instant digital discount vouchers.
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="flex items-center gap-1.5">
              <div className="relative flex-1">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full h-9 pl-8 pr-3 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3b82f6]"
                />
              </div>
              <button
                type="submit"
                className="h-9 px-4 rounded-lg bg-[#3b82f6] hover:bg-[#2563eb] text-slate-950 font-black text-xs transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3 h-3" />
              </button>
            </div>
            {newsletterSubscribed && (
              <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Thank you for subscribing! Check your inbox for coupon code <strong>PLAYBEAT20</strong>.</span>
              </div>
            )}
          </form>

        </div>

      </div>

      {/* Clean Copyright Bar (NO admin links on storefront) */}
      <div className="border-t border-slate-800/80 py-5 px-4 sm:px-6 text-center text-[11px] text-slate-400 bg-[#020617]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">PLAYBEAT.digital</strong>. All rights reserved. Pakistan's Premier Digital Goods Marketplace.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-400">
            <button onClick={() => handleQuickLink('storefront', 'all')} className="hover:text-white transition-colors cursor-pointer">
              Storefront
            </button>
            <span className="hidden sm:inline">•</span>
            <button onClick={() => setIsOrderLookupOpen(true)} className="hover:text-white transition-colors cursor-pointer">
              Track Order
            </button>
            <span className="hidden sm:inline">•</span>
            <button onClick={() => setIsSupportOpen(true)} className="hover:text-white transition-colors cursor-pointer">
              Live Support
            </button>
            <span className="hidden sm:inline">•</span>
            <a href="https://wa.me/923321029333" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              WhatsApp 1
            </a>
            <span className="hidden sm:inline">•</span>
            <a href="https://wa.me/923341079333" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors">
              WhatsApp 2
            </a>
            <span className="hidden md:inline">•</span>
            <a href="https://t.me/playbeatdigital" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
              Telegram
            </a>
            <span className="hidden md:inline">•</span>
            <a href="#wechat" onClick={(e) => { e.preventDefault(); try { navigator.clipboard?.writeText('playbeatdigital'); } catch {} }} className="hover:text-green-400 transition-colors cursor-pointer">
              WeChat
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};
