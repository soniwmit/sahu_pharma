import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FloatingControlsProps {
  onOpenWhatsAppModal: () => void;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({ onOpenWhatsAppModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          id="back-to-top-btn"
          aria-label="Back to Top"
          className="p-3 rounded-full bg-slate-900/80 dark:bg-slate-100/80 hover:bg-slate-900 text-white dark:text-slate-900 shadow-lg backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        id="floating-call-btn"
        aria-label="Call Sahu Pharma"
        className="p-3.5 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all hover:scale-110 active:scale-95 flex items-center justify-center border border-slate-700"
        title={`Call ${BUSINESS_INFO.phone}`}
      >
        <Phone className="w-6 h-6 text-emerald-400" />
      </a>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsAppModal}
        id="floating-whatsapp-btn"
        aria-label="WhatsApp Sahu Pharma"
        className="relative p-4 rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 flex items-center justify-center whatsapp-pulse"
        title="Order via WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-white" />
      </button>
    </div>
  );
};
