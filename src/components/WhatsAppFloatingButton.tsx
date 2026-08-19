'use client';

import React, { useState } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Phone,
  ExternalLink,
  ShieldCheck,
  Zap,
  Copy,
  Check,
} from 'lucide-react';

type Channel = 'whatsapp1' | 'whatsapp2' | 'telegram' | 'wechat';

interface ChannelConfig {
  id: Channel;
  label: string;
  handle: string;
  href: string;
  icon: typeof MessageCircle;
  accent: string; // tailwind classes for bg + border + text
  blurb: string;
  copyValue?: string;
}

const CHANNELS: ChannelConfig[] = [
  {
    id: 'whatsapp1',
    label: 'WhatsApp (Primary)',
    handle: '+92 332 1029333',
    href: 'https://wa.me/923321029333?text=Hi%20PlayBeat%20Digital%2C%20I%20need%20assistance%20with%20an%20order.',
    icon: MessageCircle,
    accent: 'bg-emerald-600/15 border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white',
    blurb: 'Sales, support & order tracking — instant replies during business hours.',
    copyValue: '923321029333',
  },
  {
    id: 'whatsapp2',
    label: 'WhatsApp (Secondary)',
    handle: '+92 334 1079333',
    href: 'https://wa.me/923341079333?text=Hi%20PlayBeat%20Digital%2C%20I%20need%20assistance%20with%20an%20order.',
    icon: MessageCircle,
    accent: 'bg-emerald-600/15 border-emerald-500/40 text-emerald-400 hover:bg-emerald-600 hover:text-white',
    blurb: 'Backup line for peak hours & priority customer support.',
    copyValue: '923341079333',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    handle: '@playbeatdigital',
    href: 'https://t.me/playbeatdigital',
    icon: Send,
    accent: 'bg-sky-500/15 border-sky-400/40 text-sky-400 hover:bg-sky-500 hover:text-white',
    blurb: 'Fastest channel for international buyers & bulk orders.',
    copyValue: '@playbeatdigital',
  },
  {
    id: 'wechat',
    label: 'WeChat',
    handle: 'playbeatdigital',
    href: '#wechat',
    icon: MessageCircle,
    accent: 'bg-green-500/15 border-green-400/40 text-green-400 hover:bg-green-500 hover:text-white',
    blurb: 'Scan QR or add by ID — preferred for China / HK / Taiwan customers.',
    copyValue: 'playbeatdigital',
  },
];

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState<Channel | null>(null);

  const handleCopy = (channel: Channel, value: string) => {
    try {
      navigator.clipboard?.writeText(value);
      setCopied(channel);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      /* clipboard may be blocked — silently ignore */
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex flex-col items-end max-w-[calc(100vw-2rem)]">
      {/* Channel Picker Popover */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-2xl bg-[#0f172a] border border-slate-700 shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-600 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold">PlayBeat Digital Support</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                  <span>Online now</span>
                  <span>•</span>
                  <span>4 channels</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close support panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Channel list */}
          <div className="p-3 space-y-2 bg-[#020617]">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
              <Zap className="w-3.5 h-3.5 text-[#3b82f6] shrink-0 mt-0.5" />
              <span>
                Pick any channel below to reach the PlayBeat Digital team instantly. Average response time: under 5 minutes during business hours.
              </span>
            </div>

            {CHANNELS.map((ch) => {
              const Icon = ch.icon;
              const isWeChat = ch.id === 'wechat';
              return (
                <div
                  key={ch.id}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 transition-all hover:border-slate-700"
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg border ${ch.accent} transition-colors shrink-0`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-white text-xs">{ch.label}</span>
                        <span className="font-mono text-[11px] text-slate-400 truncate">{ch.handle}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{ch.blurb}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        {isWeChat ? (
                          <button
                            onClick={() => handleCopy(ch.id, ch.copyValue || '')}
                            className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            {copied === ch.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                            <span>{copied === ch.id ? 'Copied ID' : 'Copy WeChat ID'}</span>
                          </button>
                        ) : (
                          <a
                            href={ch.href}
                            target={ch.href.startsWith('#') ? undefined : '_blank'}
                            rel="noreferrer"
                            className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Open {ch.id === 'telegram' ? 'Telegram' : 'WhatsApp'}</span>
                          </a>
                        )}
                        <button
                          onClick={() => handleCopy(ch.id, ch.copyValue || '')}
                          className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-bold flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          {copied === ch.id ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                          <span>{copied === ch.id ? 'Copied' : 'Copy'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="pt-1 px-2 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1 text-emerald-400">
                <ShieldCheck className="w-3 h-3" />
                Verified Official Accounts
              </span>
              <span>24/7 Priority Support</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/40 transition-all duration-300 cursor-pointer active:scale-95"
        title="Contact PlayBeat Digital — WhatsApp / Telegram / WeChat"
        aria-label="Open contact channels"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border border-emerald-700" />
        </span>

        <MessageCircle className="w-5 h-5 fill-white shrink-0" />
        <span className="font-semibold tracking-wide hidden sm:inline">Contact Us</span>
      </button>
    </div>
  );
};
