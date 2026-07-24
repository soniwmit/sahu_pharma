import React, { useState } from 'react';
import { 
  HeartPulse, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Clock, 
  Mail, 
  ShieldCheck, 
  X,
  ExternalLink
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenWhatsAppModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenWhatsAppModal }) => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Business Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A8F6A] flex items-center justify-center text-white font-bold text-xl shadow-md">
                S
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{BUSINESS_INFO.name}</h3>
                <p className="text-xs text-[#0A8F6A] font-semibold">{BUSINESS_INFO.altName}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline}. Serving Kurtha, Arwal, and Bihar residents with 100% genuine medicines for over 12+ years.
            </p>

            <div className="space-y-2 text-xs pt-1">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-[#0A8F6A] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                <span>Phone: {BUSINESS_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="w-4 h-4 text-[#0A8F6A] shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.whatsappFormatted}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {['home', 'about', 'services', 'gallery', 'testimonials', 'faq', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNav(id)}
                    className="hover:text-emerald-400 transition-colors capitalize font-medium"
                  >
                    • {id === 'faq' ? 'FAQ Section' : id}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenWhatsAppModal}
                  className="hover:text-emerald-400 transition-colors font-bold text-emerald-300"
                >
                  • WhatsApp Order Form
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Prescription Medicines</li>
              <li>General & OTC Medicines</li>
              <li>Baby Care & Diapers</li>
              <li>Diabetic & BP Supplies</li>
              <li>Medical Equipment & Monitors</li>
              <li>Surgical Items & Dressing</li>
              <li>Protein & Supplements</li>
              <li>First Aid Supplies</li>
            </ul>
          </div>

          {/* Col 4: Store Hours & Map Shortcut */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400">Working Hours</h4>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Monday - Sunday:</span>
                <span className="font-bold text-emerald-400">7:00 AM - 10:00 PM</span>
              </div>
              <div className="flex items-center justify-between border-t border-slate-800 pt-1.5">
                <span className="text-slate-400">Emergency:</span>
                <span className="font-bold text-white">24/7 WhatsApp Hotline</span>
              </div>
            </div>

            <button
              onClick={() => {
                const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.name + ' ' + BUSINESS_INFO.address.fullAddress)}`;
                window.open(mapsUrl, '_blank');
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open Google Maps Directions</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Modals Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex flex-wrap items-center gap-1.5">
            <span>© {new Date().getFullYear()} {BUSINESS_INFO.name} ({BUSINESS_INFO.altName}). All Rights Reserved.</span>
            <span>|</span>
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A8F6A] dark:text-emerald-400 hover:underline font-semibold transition-colors"
            >
              Developed by WMIT
            </a>
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => setModalType('privacy')} className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setModalType('terms')} className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => setModalType('disclaimer')} className="hover:text-slate-300 transition-colors">
              Disclaimer
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-slate-300 text-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm font-bold text-white capitalize">{modalType} Policy</h3>
              <button onClick={() => setModalType(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 max-h-60 overflow-y-auto leading-relaxed">
              {modalType === 'privacy' && (
                <p>
                  Sahu Pharma respects patient privacy. Any customer details, phone numbers, or doctor prescription photos submitted via our website or WhatsApp order system are kept strictly confidential and used solely for fulfilling medicine orders.
                </p>
              )}
              {modalType === 'terms' && (
                <p>
                  All prescription medicines require a valid prescription issued by a licensed medical practitioner. Medicine prices and availability are subject to stock verification in Kurtha.
                </p>
              )}
              {modalType === 'disclaimer' && (
                <p>
                  Information on this website is for general educational awareness and product inquiry purposes only. It is not a substitute for professional medical advice or clinical diagnosis.
                </p>
              )}
            </div>

            <button
              onClick={() => setModalType(null)}
              className="w-full py-2 bg-emerald-600 text-white font-bold rounded-xl text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
