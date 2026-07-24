import React from 'react';
import { SERVICES_LIST } from '../data/pharmacyData';
import { ServicesSection } from '../components/ServicesSection';
import { ContactCTA } from '../components/ContactCTA';

interface ServicesPageProps {
  onOpenWhatsAppModal: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors animate-in fade-in duration-300 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            All Pharmacy Services
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Dedicated Healthcare & Medical Services
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            At Sahu Pharma, we offer an extensive array of pharmaceutical products, surgical dressings, digital monitoring devices, and instant WhatsApp prescription order assistance.
          </p>
        </div>
      </div>

      <ServicesSection onOpenWhatsAppModal={onOpenWhatsAppModal} />

      <ContactCTA onOpenWhatsAppModal={onOpenWhatsAppModal} />
    </div>
  );
};
