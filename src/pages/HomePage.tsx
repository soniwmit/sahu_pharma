import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ServicesSection } from '../components/ServicesSection';
import { CategoriesSection } from '../components/CategoriesSection';
import { InteractiveCatalog } from '../components/InteractiveCatalog';
import { TrustSection } from '../components/TrustSection';
import { WorkingProcess } from '../components/WorkingProcess';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { GoogleMapSection } from '../components/GoogleMapSection';
import { ContactCTA } from '../components/ContactCTA';

interface HomePageProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
  onOpenSearch: () => void;
  setActiveTab: (tab: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenWhatsAppModal,
  onOpenSearch,
  setActiveTab
}) => {
  const scrollToMap = () => {
    const el = document.getElementById('store-location-map');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('contact');
    }
  };

  return (
    <div className="space-y-0 animate-in fade-in duration-300">
      {/* 1. Hero Section */}
      <HeroSection
        onOpenWhatsAppModal={onOpenWhatsAppModal}
        onOpenDirections={scrollToMap}
      />

      {/* 2. Why Choose Us */}
      <WhyChooseUs onOpenWhatsAppModal={onOpenWhatsAppModal} />

      {/* 3. Our Services */}
      <ServicesSection onOpenWhatsAppModal={onOpenWhatsAppModal} />

      {/* 4. Featured Categories */}
      <CategoriesSection
        onSelectCategory={(cat) => {
          onOpenSearch();
        }}
      />

      {/* 5. Interactive Medicine Catalog */}
      <InteractiveCatalog onOpenWhatsAppModal={onOpenWhatsAppModal} />

      {/* 6. Why Customers Trust Us */}
      <TrustSection />

      {/* 7. Working Process */}
      <WorkingProcess />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. FAQ Section */}
      <FAQSection onOpenWhatsAppModal={onOpenWhatsAppModal} />

      {/* 10. Google Map Section */}
      <div id="store-location-map">
        <GoogleMapSection onOpenWhatsAppModal={onOpenWhatsAppModal} />
      </div>

      {/* 11. Contact CTA */}
      <ContactCTA onOpenWhatsAppModal={onOpenWhatsAppModal} />
    </div>
  );
};
