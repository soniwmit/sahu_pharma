import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Sparkles, HeartPulse } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface ContactCTAProps {
  onOpenWhatsAppModal: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ onOpenWhatsAppModal }) => {
  return (
    <section className="py-12 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Fast & Reliable Local Delivery in Kurtha</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Need Urgent Medicines or Prescription Supplies?
            </h2>

            <p className="text-emerald-100 text-sm max-w-xl">
              Call us directly or send a photo of your doctor prescription on WhatsApp. We verify and confirm immediately!
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-emerald-200 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                <span>100% Authentic Stock</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <HeartPulse className="w-4 h-4 text-emerald-300" />
                <span>Open 7 Days a Week</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="cta-call-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-slate-900 font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl hover:bg-slate-100 transition-all hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>

            <button
              onClick={onOpenWhatsAppModal}
              id="cta-whatsapp-btn"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/30 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
