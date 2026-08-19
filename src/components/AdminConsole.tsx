'use client';

import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { AdminSidebar, AdminTab } from './admin/AdminSidebar';
import { AdminHeader } from './admin/AdminHeader';
import { DashboardView } from './admin/views/DashboardView';
import { WebsiteBuilderView } from './admin/views/WebsiteBuilderView';
import { AnalyticsView } from './admin/views/AnalyticsView';
import { ProductsView } from './admin/views/ProductsView';
import { InventoryView } from './admin/views/InventoryView';
import { OrdersView } from './admin/views/OrdersView';
import { WooCommerceView } from './admin/views/WooCommerceView';
import { SubscriptionsView } from './admin/views/SubscriptionsView';
import { CouponsView } from './admin/views/CouponsView';
import { UsersView } from './admin/views/UsersView';
import { SupportView } from './admin/views/SupportView';
import { IptvView } from './admin/views/IptvView';
import { FinanceView } from './admin/views/FinanceView';
import { PaymentGatewaysView } from './admin/views/PaymentGatewaysView';
import { PaymentProofView } from './admin/views/PaymentProofView';
import { AuditLogsView } from './admin/views/AuditLogsView';
import { SocialMediaView } from './admin/views/SocialMediaView';
import { TikTokLeadsView } from './admin/views/TikTokLeadsView';
import { EmailView } from './admin/views/EmailView';
import { JazzCashView } from './admin/views/JazzCashView';
import { ReportsView } from './admin/views/ReportsView';
import { 
  ShieldCheck, 
  Lock, 
  Key, 
  Zap, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  CheckCircle2, 
  RotateCcw 
} from 'lucide-react';

export const AdminConsole: React.FC = () => {
  const { 
    isAdminAuthenticated, 
    adminLogin, 
    adminLogout,
    setActiveView 
  } = useStore();

  const [activeTab, setActiveTab] = useState<AdminTab>('dashboard');
  const [passwordInput, setPasswordInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [adminSearch, setAdminSearch] = useState('');
  const [resetToast, setResetToast] = useState(false);

  // Always reset login inputs on mount / state change
  useEffect(() => {
    if (!isAdminAuthenticated) {
      setPasswordInput('');
      setUsernameInput('');
      setLoginError('');
    }
  }, [isAdminAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const res = adminLogin(passwordInput, usernameInput);
    if (!res.success) {
      setLoginError(res.message);
    } else {
      setPasswordInput('');
      setUsernameInput('');
    }
  };

  const handleResetAll = () => {
    setAdminSearch('');
    setActiveTab('dashboard');
    setResetToast(true);
    setTimeout(() => setResetToast(false), 2500);
  };

  // If user is not authenticated, show Admin Login gate
  if (!isAdminAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#020617] relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        </div>
        <div className="w-full max-w-md bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 relative z-10 overflow-hidden">
          
          {/* Top glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-48 bg-blue-500/10 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-2 relative">
            <div className="w-14 h-14 rounded-2xl bg-transparent border-2 border-[#3b82f6]/60 text-[#3b82f6] font-black mx-auto flex items-center justify-center shadow-lg shadow-blue-500/10 text-2xl">
              PB
            </div>
            <h1 className="text-2xl font-black tracking-tight text-white pt-2">
              PlayBeat <span className="text-[#3b82f6]">Digital</span>
              <span className="text-xs text-slate-400 font-mono block mt-0.5">playbeat.digital/admin</span>
            </h1>
            <p className="text-xs text-slate-400">
              Admin Panel • Master Authorization Required
            </p>
          </div>

          {loginError && (
            <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Form with autocomplete disabled */}
          <form onSubmit={handleLogin} autoComplete="off" className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-bold mb-1.5">Admin Username / Email</label>
              <input
                type="text"
                required
                autoComplete="off"
                placeholder="Enter administrator username or email"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#3b82f6] transition-colors font-mono"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-bold mb-1.5">Master Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="new-password"
                  placeholder="Enter administrator master password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#3b82f6] transition-colors font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-slate-950 font-black transition-all shadow-lg shadow-blue-500/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Log in to Admin Panel</span>
            </button>
          </form>

          <div className="text-center pt-2">
            <button
              onClick={() => setActiveView('storefront')}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              ← Return to public Storefront
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin View
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col">
      {/* Toast */}
      {resetToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#3b82f6] text-slate-950 px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-black animate-in fade-in">
          <RotateCcw className="w-4 h-4 animate-spin" />
          <span>Filters reset to default Dashboard view.</span>
        </div>
      )}

      {/* Main Container with Sidebar + Content */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <AdminSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={adminLogout}
        />

        {/* Right Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <AdminHeader
            searchQuery={adminSearch}
            setSearchQuery={setAdminSearch}
            onResetAll={handleResetAll}
          />

          {/* View Container */}
          <main className="flex-1 p-6 overflow-y-auto max-h-[calc(100vh-65px)] bg-[#020617]">
            {activeTab === 'dashboard' && <DashboardView />}
            {activeTab === 'builder' && <WebsiteBuilderView />}
            {activeTab === 'analytics' && <AnalyticsView />}
            {activeTab === 'products' && <ProductsView />}
            {activeTab === 'inventory' && <InventoryView />}
            {activeTab === 'orders' && <OrdersView />}
            {activeTab === 'woocommerce' && <WooCommerceView />}
            {activeTab === 'subscriptions' && <SubscriptionsView />}
            {activeTab === 'coupons' && <CouponsView />}
            {activeTab === 'users' && <UsersView />}
            {activeTab === 'support' && <SupportView />}
            {activeTab === 'iptv' && <IptvView />}
            {activeTab === 'finance' && <FinanceView />}
            {activeTab === 'gateways' && <PaymentGatewaysView />}
            {activeTab === 'proofs' && <PaymentProofView />}
            {activeTab === 'audit' && <AuditLogsView />}
            {activeTab === 'social' && <SocialMediaView />}
            {activeTab === 'tiktok' && <TikTokLeadsView />}
            {activeTab === 'email' && <EmailView />}
            {activeTab === 'jazzcash' && <JazzCashView />}
            {activeTab === 'reports' && <ReportsView />}
          </main>
        </div>
      </div>
    </div>
  );
};
