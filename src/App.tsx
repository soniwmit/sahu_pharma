import React, { useState, useEffect } from 'react';
import { SEOHead } from './components/SEOHead';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { OrderPage } from './pages/OrderPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingControls } from './components/FloatingControls';
import { WhatsAppOrderModal } from './components/WhatsAppOrderModal';
import { MedicineSearchModal } from './components/MedicineSearchModal';
import { BUSINESS_INFO } from './data/pharmacyData';
import { useTracker } from './hooks/useTracker';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState<boolean>(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState<string>('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  // Global analytics tracking hook
  useTracker(activeTab);

  // Apply dark mode class to html document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenWhatsAppModal = (medicineName?: string) => {
    setPrefilledMedicine(medicineName || '');
    setIsWhatsAppModalOpen(true);
  };

  const renderActiveView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            onOpenWhatsAppModal={handleOpenWhatsAppModal}
            onOpenSearch={() => setIsSearchModalOpen(true)}
            setActiveTab={setActiveTab}
          />
        );
      case 'about':
        return <AboutPage onOpenWhatsAppModal={handleOpenWhatsAppModal} />;
      case 'services':
        return <ServicesPage onOpenWhatsAppModal={handleOpenWhatsAppModal} />;
      case 'gallery':
        return <GalleryPage />;
      case 'testimonials':
        return (
          <div className="py-8 bg-slate-50 dark:bg-slate-900">
            <TestimonialsSection />
          </div>
        );
      case 'faq':
        return (
          <div className="py-8 bg-white dark:bg-slate-900">
            <FAQSection onOpenWhatsAppModal={handleOpenWhatsAppModal} />
          </div>
        );
      case 'contact':
        return <ContactPage onOpenWhatsAppModal={handleOpenWhatsAppModal} />;
      case 'order':
        return <OrderPage />;
      default:
        return (
          <HomePage
            onOpenWhatsAppModal={handleOpenWhatsAppModal}
            onOpenSearch={() => setIsSearchModalOpen(true)}
            setActiveTab={setActiveTab}
          />
        );
    }
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case 'about':
        return `About Us - ${BUSINESS_INFO.name} | Kurtha Bihar`;
      case 'services':
        return `Our Services & Products - ${BUSINESS_INFO.name}`;
      case 'gallery':
        return `Store Gallery & Showcase - ${BUSINESS_INFO.name}`;
      case 'testimonials':
        return `Customer Reviews & Feedback - ${BUSINESS_INFO.name}`;
      case 'faq':
        return `Pharmacy FAQs - ${BUSINESS_INFO.name}`;
      case 'contact':
        return `Contact & Directions - ${BUSINESS_INFO.name}`;
      case 'order':
        return `WhatsApp Medicine Order - ${BUSINESS_INFO.name}`;
      default:
        return `${BUSINESS_INFO.name} - ${BUSINESS_INFO.altName} | Pharmacy in Kurtha, Bihar`;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-emerald-500 selection:text-white">
      {/* SEO Head Injection */}
      <SEOHead
        title={getPageTitle()}
        currentPage={activeTab}
      />

      {/* Sticky Main Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenWhatsAppModal={handleOpenWhatsAppModal}
      />

      {/* Main Page View Content */}
      <main className="flex-grow">
        {renderActiveView()}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenWhatsAppModal={handleOpenWhatsAppModal}
      />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingControls
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
      />

      {/* WhatsApp Prescription Order Modal */}
      <WhatsAppOrderModal
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
        prefilledMedicineName={prefilledMedicine}
      />

      {/* Medicine Search & Stock Catalog Modal */}
      <MedicineSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onSelectMedicineForOrder={(medName) => handleOpenWhatsAppModal(medName)}
      />
    </div>
  );
}
