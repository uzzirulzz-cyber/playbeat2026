'use client';

import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const FooterPremium: React.FC = () => {
  return (
    <footer className="w-full bg-[#111827] text-white border-t border-[#132e53]">
      
      {/* Newsletter CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 border-b border-[#1a3351]">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 text-[#3b82f6] text-[10px] font-black uppercase tracking-[0.18em] mb-4">
              Stay Updated
            </div>
            <h3 className="text-2xl sm:text-3xl font-black mb-3 text-white">
              Premium drops, offers & insider updates
            </h3>
            <p className="text-slate-300 mb-6">
              Get exclusive offers, launch alerts, and fresh digital deals delivered to your inbox.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-[#1e293b] border border-white/10 text-white outline-none font-medium placeholder:text-slate-400"
            />
            <button className="px-6 py-3 bg-[#3b82f6] hover:bg-[#FFC400] text-[#1e293b] font-black rounded-xl transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-[#3b82f6]/20">
              <span className="hidden sm:inline">Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#3b82f6] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#1e293b]" />
              </div>
              <div>
                <div className="font-black text-lg">PLAYBEAT</div>
                <div className="text-xs text-[#B0BAC9] font-bold">DIGITAL</div>
              </div>
            </div>
            <p className="text-sm text-[#B0BAC9] mb-4">
              Your premier destination for digital products and services.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-[#1a3351] hover:bg-[#3b82f6] hover:text-[#1e293b] flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[#1a3351] hover:bg-[#3b82f6] hover:text-[#1e293b] flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[#1a3351] hover:bg-[#3b82f6] hover:text-[#1e293b] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-[#1a3351] hover:bg-[#3b82f6] hover:text-[#1e293b] flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Products</h4>
            <ul className="space-y-2.5 text-sm text-[#B0BAC9]">
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Gaming</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Software</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Gift Cards</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Subscriptions</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Hosting</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Support</h4>
            <ul className="space-y-2.5 text-sm text-[#B0BAC9]">
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Status</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm text-[#B0BAC9]">
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Partners</a></li>
            </ul>
          </div>

          {/* Column 5: Legal & Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2.5 text-sm text-[#B0BAC9] mb-6">
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Cookies</a></li>
              <li><a href="#" className="hover:text-[#3b82f6] transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-6 py-8 border-t border-b border-[#1a3351]">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1a3351] flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#3b82f6]" />
            </div>
            <div>
              <div className="text-sm text-[#B0BAC9]">Phone</div>
              <a href="tel:+923321029333" className="font-bold text-white hover:text-[#3b82f6] transition-colors">
                +92 332 102 9333
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1a3351] flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#3b82f6]" />
            </div>
            <div>
              <div className="text-sm text-[#B0BAC9]">Email</div>
              <a href="mailto:support@playbeat.digital" className="font-bold text-white hover:text-[#3b82f6] transition-colors break-all">
                support@playbeat.digital
              </a>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#1a3351] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#3b82f6]" />
            </div>
            <div>
              <div className="text-sm text-[#B0BAC9]">Location</div>
              <div className="font-bold text-white">
                Pakistan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-300 border-t border-[#1a3351]">
        <div>
          © 2024 PlayBeat Digital. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>Secure 256-Bit Encryption</span>
          <div className="flex gap-3">
            {['Visa', 'Mastercard', 'PayPal'].map((method) => (
              <span key={method} className="px-2 py-1 bg-[#1a3351] rounded text-xs font-medium">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
