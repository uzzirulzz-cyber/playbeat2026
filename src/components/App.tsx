'use client';

import React, { useMemo, useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Navbar } from './Navbar';
import { HeroSectionPremium } from './HeroSectionPremium';
import { FeaturedCategoriesPremium } from './FeaturedCategoriesPremium';
import { DealsSection } from './DealsSection';
import { LimitedTimeOffersSection } from './LimitedTimeOffersSection';
import { TrendingProductsSection } from './TrendingProductsSection';
import { BestSellersSection } from './BestSellersSection';
import { CategoryFilterBar } from './CategoryFilterBar';
import { ProductCard } from './ProductCard';
import { ProductDetailModal } from './ProductDetailModal';
import { CartDrawer } from './CartDrawer';
import { WishlistModal } from './WishlistModal';
import { OrderLookupModal } from './OrderLookupModal';
import { CustomerDashboard } from './CustomerDashboard';
import { AuthModal } from './AuthModal';
import { InvoiceModal } from './InvoiceModal';
import { VendorStudio } from './VendorStudio';
import { AffiliateHub } from './AffiliateHub';
import { AdminConsole } from './AdminConsole';
import { LiveSupportAssistant } from './LiveSupportAssistant';
import { WhatsAppFloatingButton } from './WhatsAppFloatingButton';
import { ThemeSectionManager } from './ThemeSectionManager';
import { Footer } from './Footer';
import { AlertCircle } from 'lucide-react';

export function App() {
  const {
    activeView,
    products,
    selectedCategory,
    selectedType,
    sortBy,
    searchQuery,
    setSelectedCategory,
    setSelectedType,
    setSearchQuery,
  } = useStore();

  const [sectionConfig, setSectionConfig] = useState({
    heroSpotlight: true,
    dealsSection: true,
    categoryFilter: true,
    trendingSection: true,
    bestSellersSection: true,
    limitedOffers: true,
    trustBadges: true,
  });

  useEffect(() => {
    const loadConfig = () => {
      const saved = localStorage.getItem('playbeat_sections_config');
      if (saved) {
        try {
          setSectionConfig((prev) => ({ ...prev, ...JSON.parse(saved) }));
        } catch (e) {
          /* ignore */
        }
      }
    };
    loadConfig();

    const handleUpdate = () => loadConfig();
    window.addEventListener('sections_updated', handleUpdate);
    return () => window.removeEventListener('sections_updated', handleUpdate);
  }, []);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (
          selectedCategory !== 'all' &&
          product.category?.slug !== selectedCategory &&
          product.category?.id !== selectedCategory
        ) return false;
        if (selectedType !== 'ALL' && product.type !== selectedType) return false;
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase();
          const matchesTitle = product.title?.toLowerCase().includes(query);
          const matchesDesc = product.shortDescription?.toLowerCase().includes(query) || product.description?.toLowerCase().includes(query);
          const matchesTags = product.tags?.some((t) => t.toLowerCase().includes(query));
          const matchesCat = product.category?.name?.toLowerCase().includes(query);
          const matchesVendor = product.vendor?.storeName?.toLowerCase().includes(query);
          if (!matchesTitle && !matchesDesc && !matchesTags && !matchesCat && !matchesVendor) return false;
        }
        return true;
      })
      .sort((a, b) => {
        const priceA = a.discountPrice ?? a.price;
        const priceB = b.discountPrice ?? b.price;
        if (sortBy === 'price_asc') return priceA - priceB;
        if (sortBy === 'price_desc') return priceB - priceA;
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'newest') return new Date(b.createdAt || '').getTime() - new Date(a.createdAt || '').getTime();
        return b.salesCount - a.salesCount;
      });
  }, [products, selectedCategory, selectedType, searchQuery, sortBy]);

  return (
    <div className="premium-glass-theme min-h-screen flex flex-col text-[#edf7ff] transition-colors duration-300">
      <Navbar />
      <main className="flex-1 w-full">
        {activeView === 'storefront' && (
          <div>
            {sectionConfig.heroSpotlight && <div id="hero"><HeroSectionPremium /></div>}
            <div id="categories"><FeaturedCategoriesPremium /></div>
            {sectionConfig.dealsSection && <div id="deals"><DealsSection /></div>}
            {sectionConfig.limitedOffers && <div id="limited-offers"><LimitedTimeOffersSection /></div>}
            {sectionConfig.trendingSection && <div id="trending"><TrendingProductsSection /></div>}
            {sectionConfig.bestSellersSection && <div id="bestsellers"><BestSellersSection /></div>}
            <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
              {sectionConfig.categoryFilter && <CategoryFilterBar />}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
                  {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
                </div>
              ) : (
                <div className="py-12 sm:py-20 text-center space-y-3 p-6 sm:p-8 rounded-3xl bg-white border border-[#e5e7eb] shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center mx-auto text-[#3b82f6]"><AlertCircle className="w-6 h-6" /></div>
                  <h3 className="font-black text-base sm:text-lg text-[#1f2937]">No products found matching your criteria</h3>
                  <p className="text-xs text-[#64748b] max-w-sm mx-auto">Try adjusting your search terms, changing the category filter, or resetting all filters.</p>
                  <button onClick={() => { setSelectedCategory('all'); setSelectedType('ALL'); setSearchQuery(''); }} className="px-5 py-2.5 rounded-xl bg-[#3b82f6] hover:bg-[#2563eb] text-[#1f2937] font-bold text-xs cursor-pointer shadow-md">Reset All Filters</button>
                </div>
              )}
            </div>
          </div>
        )}
        {activeView === 'vendor' && <VendorStudio />}
        {activeView === 'affiliate' && <AffiliateHub />}
        {activeView === 'admin' && <AdminConsole />}
      </main>
      <ProductDetailModal />
      <CartDrawer />
      <WishlistModal />
      <OrderLookupModal />
      <CustomerDashboard />
      <AuthModal />
      <InvoiceModal />
      <LiveSupportAssistant />
      <WhatsAppFloatingButton />
      <ThemeSectionManager />
      <Footer />
    </div>
  );
}

export default App;
