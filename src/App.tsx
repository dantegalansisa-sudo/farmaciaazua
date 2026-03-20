import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import ToastContainer from './components/Toast';
import CartDrawer from './components/CartDrawer';
import BackToTop from './components/BackToTop';
import { CartProvider } from './contexts/CartContext';
import { WishlistProvider } from './contexts/WishlistContext';
import { useRecentlyViewed } from './hooks/useRecentlyViewed';
import Navbar from './components/Navbar';
import QuickActionsBar from './components/QuickActionsBar';
import HeroSection from './sections/HeroSection';
import TrustBarSection from './sections/TrustBarSection';
import QuickOrderSection from './sections/QuickOrderSection';
import BestsellersSection from './sections/BestsellersSection';
import ProductCatalogSection from './sections/ProductCatalogSection';
import RecentlyViewedSection from './sections/RecentlyViewedSection';
import ServicesSection from './sections/ServicesSection';
import TeamSection from './sections/TeamSection';
import OffersSection from './sections/OffersSection';
import InsuranceSection from './sections/InsuranceSection';
import HealthHubSection from './sections/HealthHubSection';
import WhyUsSection from './sections/WhyUsSection';
import StatsSection from './sections/StatsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import InstagramSection from './sections/InstagramSection';
import FAQSection from './sections/FAQSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import ProductDetailModal from './components/ProductDetailModal';
import { useToast } from './hooks/useToast';
import type { Product } from './data/types';

function AppContent() {
  const { toasts, removeToast } = useToast();
  const { recentItems, addToRecent } = useRecentlyViewed();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    addToRecent(product);
  };

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <QuickActionsBar />
        <TrustBarSection />
        <QuickOrderSection />
        <BestsellersSection onViewDetail={handleViewDetail} />
        <ProductCatalogSection onViewDetail={handleViewDetail} />
        <RecentlyViewedSection items={recentItems} onViewDetail={handleViewDetail} />
        <ServicesSection />
        <TeamSection />
        <OffersSection />
        <InsuranceSection />
        <HealthHubSection />
        <WhyUsSection />
        <StatsSection />
        <TestimonialsSection />
        <InstagramSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
      <BackToTop />
      <CartDrawer />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <AppContent />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
