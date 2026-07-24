import React from 'react';
import { 
  Building2, 
  Target, 
  Eye, 
  HeartHandshake, 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  Sparkles,
  Phone,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface AboutPageProps {
  onOpenWhatsAppModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenWhatsAppModal }) => {
  const timelineEvents = [
    { year: '2012', title: 'Founded in Kurtha', desc: 'Established New Sahu Medical at Bidrohi Chowk with a commitment to providing 100% genuine medicines.' },
    { year: '2016', title: 'Expanded Healthcare Inventory', desc: 'Introduced medical equipment, digital BP monitors, glucometers, and baby care range.' },
    { year: '2020', title: 'Pandemic Emergency Service', desc: 'Operated 24/7 during critical lockdowns delivering essential supplies and sanitizers locally.' },
    { year: '2023', title: 'WhatsApp Prescription Service', desc: 'Launched direct digital prescription ordering for fast home pickup & local delivery in Kurtha.' },
    { year: 'Present', title: 'Over 12+ Years of Trust', desc: 'Serving over 320+ verified 5-star Google review families across Arwal district.' }
  ];

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors animate-in fade-in duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            About Sahu Pharma
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Serving <span className="text-emerald-600 dark:text-emerald-400">Kurtha</span> with Integrity & Care
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {BUSINESS_INFO.tagline}. Discover our journey, values, and commitment to local community health.
          </p>
        </div>

        {/* Business Story & Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Our Business Story</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Founded in 2012 at DEVI STHAN, BIDROHI CHOWK near LBS COMPUTER CLASSES, Sahu Pharma (New Sahu Medical) was created with a simple vision: to ensure that every family in Kurtha has reliable access to 100% genuine, unadulterated medicines at honest prices.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Over the past decade, we have grown into Kurtha's most trusted neighborhood pharmacy. From essential daily fever and diabetes medications to emergency surgical dressings, baby care products, and health supplements, we maintain rigid temperature control and authentic batch verification.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-2xl font-black text-emerald-600">100%</p>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Genuine Medicines</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <p className="text-2xl font-black text-emerald-600">12+ Years</p>
                <p className="text-xs font-bold text-slate-700 dark:text-slate-300">Community Service</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <img
              src={BUSINESS_INFO.images.storeFront}
              alt="Store Front"
              className="rounded-2xl shadow-md object-cover h-52 w-full"
            />
            <img
              src={BUSINESS_INFO.images.shelves}
              alt="Medicine Shelves"
              className="rounded-2xl shadow-md object-cover h-52 w-full mt-6"
            />
          </div>
        </div>

        {/* Mission, Vision & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-slate-800/80 border border-emerald-200/80 dark:border-slate-700 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To provide swift, accurate, and affordable access to authentic prescription and healthcare products for every citizen in Kurtha and nearby villages.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-teal-50/50 dark:bg-slate-800/80 border border-teal-200/80 dark:border-slate-700 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To be recognized as the gold standard for pharmacy excellence, customer empathy, and digital convenience across Arwal district.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-cyan-50/50 dark:bg-slate-800/80 border border-cyan-200/80 dark:border-slate-700 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-600 text-white flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Core Values</h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Authenticity, Speed, Fair Pricing, Compassion, and Continuous Patient Education regarding safe medicine usage.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Our Journey & Milestones</h2>
            <p className="text-xs text-slate-500">A timeline of dedicated medical care in Kurtha</p>
          </div>

          <div className="relative border-l-2 border-emerald-500/40 ml-4 sm:ml-32 space-y-8">
            {timelineEvents.map((ev, i) => (
              <div key={i} className="relative pl-6 sm:pl-8">
                <span className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-900" />
                <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-extrabold text-emerald-600 dark:text-emerald-400">
                  {ev.year}
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">{ev.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pharmacist / Owner Message */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center">
            <img
              src={BUSINESS_INFO.images.pharmacist}
              alt="Pharmacist Message"
              className="w-40 h-40 object-cover rounded-full mx-auto border-4 border-emerald-500 shadow-xl"
            />
            <h3 className="text-lg font-bold mt-3">Registered Pharmacist</h3>
            <p className="text-xs text-emerald-400 font-semibold">{BUSINESS_INFO.name} Team</p>
          </div>

          <div className="md:col-span-8 space-y-4">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase">
              Owner Message
            </span>
            <blockquote className="text-sm sm:text-base italic text-slate-200 leading-relaxed">
              "When a patient walks into Sahu Pharma or texts us a prescription photo on WhatsApp, they aren't just buying a box of pills — they are seeking health and peace of mind. We take that responsibility very seriously, ensuring every tablet and syrup is genuine and safe."
            </blockquote>
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenWhatsAppModal}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </button>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-bold text-xs flex items-center gap-2 border border-slate-700"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
