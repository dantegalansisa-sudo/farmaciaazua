import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';
import ToastContainer from './components/Toast';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import QuickActionsBar from './components/QuickActionsBar';
import HeroSection from './sections/HeroSection';
import TrustBarSection from './sections/TrustBarSection';
import QuickOrderSection from './sections/QuickOrderSection';
import ProductCatalogSection from './sections/ProductCatalogSection';
import ServicesSection from './sections/ServicesSection';
import TeamSection from './sections/TeamSection';
import OffersSection from './sections/OffersSection';
import InsuranceSection from './sections/InsuranceSection';
import HealthHubSection from './sections/HealthHubSection';
import WhyUsSection from './sections/WhyUsSection';
import StatsSection from './sections/StatsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import FAQSection from './sections/FAQSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';
import { useToast } from './hooks/useToast';

function App() {
  const { toasts, removeToast } = useToast();

  return (
    <CartProvider>
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <QuickActionsBar />
        <TrustBarSection />
        <QuickOrderSection />
        <ProductCatalogSection />
        <ServicesSection />
        <TeamSection />
        <OffersSection />
        <InsuranceSection />
        <HealthHubSection />
        <WhyUsSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
      <CartDrawer />
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </CartProvider>
  );
}

export default App;
