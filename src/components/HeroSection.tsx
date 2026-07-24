import React from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Star, 
  Award, 
  Sparkles,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface HeroSectionProps {
  onOpenWhatsAppModal: (medicineName?: string) => void;
  onOpenDirections: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWhatsAppModal,
  onOpenDirections
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F0FDF4]/50 to-[#F9FAFB] dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 text-slate-800 dark:text-slate-100 py-12 lg:py-20 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/60 text-[#0A8F6A] dark:text-emerald-300 rounded-full text-xs font-bold border border-emerald-100 dark:border-emerald-800">
              <span className="text-amber-500">★</span>
              <span>YOUR TRUSTED PHARMACY IN KURTHA</span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                New Sahu Medical & <span className="text-[#1E40AF] dark:text-blue-400">Healthcare</span>
              </h1>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#0A8F6A] dark:text-emerald-400 pt-1">
                {BUSINESS_INFO.name} • {BUSINESS_INFO.altName}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Providing 100% genuine medicines, healthcare products, baby care, surgical supplies, and daily medical essentials at affordable prices since 2012.
            </p>

            {/* Quick Feature Chips */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3.5 py-1.5 rounded-full shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#0A8F6A]" />
                <span>100% Genuine Stock</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3.5 py-1.5 rounded-full shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#0A8F6A]" />
                <span>WhatsApp Prescription</span>
              </span>
              <span className="flex items-center gap-1.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 px-3.5 py-1.5 rounded-full shadow-2xs">
                <CheckCircle className="w-4 h-4 text-[#0A8F6A]" />
                <span>Open 7 Days (7AM - 10PM)</span>
              </span>
            </div>

            {/* Action Buttons & Quick Location */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={() => onOpenWhatsAppModal()}
                id="hero-whatsapp-order-btn"
                className="w-full sm:w-auto px-7 py-4 bg-[#0A8F6A] hover:bg-[#087758] text-white rounded-2xl font-bold shadow-xl shadow-green-900/15 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Order</span>
              </button>

              <button
                onClick={onOpenDirections}
                id="hero-get-directions-btn"
                className="w-full sm:w-auto px-7 py-4 bg-[#1E40AF] hover:bg-blue-800 text-white rounded-2xl font-bold shadow-xl shadow-blue-900/15 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <MapPin className="w-5 h-5 text-blue-200" />
                <span>Get Directions</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="hero-call-now-btn"
                className="w-full sm:w-auto px-6 py-4 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl font-bold border border-gray-200 dark:border-slate-700 hover:bg-gray-50 flex items-center justify-center gap-2 shadow-2xs transition-all"
              >
                <Phone className="w-5 h-5 text-[#0A8F6A]" />
                <span>Call Store</span>
              </a>
            </div>

            {/* Location Pill */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800/90 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-sm text-left">
              <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-emerald-950 text-[#0A8F6A] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Store Location</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Bidrohi Chowk near LBS Computer Classes, Kurtha</p>
              </div>
            </div>
          </div>

          {/* Right Column: Store Image & Quick Services Grid */}
          <div className="lg:col-span-5 space-y-5">
            {/* Store Image Frame */}
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700 shadow-xl group">
              <img
                src={BUSINESS_INFO.images.storeFront}
                alt="Sahu Pharma Store Front Kurtha"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-white">4.9 / 5.0 Rating (320+ Reviews)</span>
                </div>
                <p className="text-sm font-extrabold text-white">New Sahu Medical (Sahu Pharma)</p>
                <p className="text-xs text-slate-300">Bidrohi Chowk, DEVI STHAN, Kurtha</p>
              </div>
            </div>

            {/* Quick Services Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-[#0A8F6A]/40 transition-colors shadow-2xs">
                <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-lg flex items-center justify-center mb-2 shadow-2xs text-[#0A8F6A]">
                  💊
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Prescription<br />Meds</p>
              </div>

              <div className="p-4 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-[#0A8F6A]/40 transition-colors shadow-2xs">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-2 shadow-2xs text-[#1E40AF]">
                  🍼
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Baby Care<br />Products</p>
              </div>

              <div className="p-4 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-[#0A8F6A]/40 transition-colors shadow-2xs">
                <div className="w-8 h-8 bg-emerald-50 dark:bg-emerald-950 rounded-lg flex items-center justify-center mb-2 shadow-2xs text-[#0A8F6A]">
                  🩺
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Medical<br />Devices</p>
              </div>

              <div className="p-4 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-[#0A8F6A]/40 transition-colors shadow-2xs">
                <div className="w-8 h-8 bg-blue-50 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-2 shadow-2xs text-[#1E40AF]">
                  🛡️
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Surgical<br />Supplies</p>
              </div>
            </div>

            {/* Emergency Hotline Banner */}
            <div className="p-5 rounded-3xl bg-slate-900 text-white relative overflow-hidden flex items-center justify-between gap-4 shadow-lg">
              <div>
                <p className="text-[11px] font-semibold text-blue-300 uppercase tracking-wider mb-0.5">Emergency Contact Hotline</p>
                <p className="text-xl font-black text-white">098012 35642</p>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-5 py-2.5 bg-[#0A8F6A] hover:bg-[#087758] rounded-xl text-xs font-bold text-white shadow-md shrink-0 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
