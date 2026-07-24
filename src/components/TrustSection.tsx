import React from 'react';
import { 
  Award, 
  ShieldCheck, 
  Clock, 
  Users, 
  BadgePercent, 
  MapPin, 
  Star,
  CheckCircle2
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

export const TrustSection: React.FC = () => {
  const trustPoints = [
    { title: 'Experienced Pharmacy', desc: 'Over 12+ years of continuous trusted service in Kurtha, Bihar.', icon: <Award className="w-6 h-6 text-emerald-600" /> },
    { title: 'Quality Medicines', desc: 'Strict temperature management & authentic batch verification.', icon: <ShieldCheck className="w-6 h-6 text-teal-600" /> },
    { title: 'Quick Service', desc: 'Minimal wait times and immediate WhatsApp prescription verification.', icon: <Clock className="w-6 h-6 text-cyan-600" /> },
    { title: 'Friendly Staff', desc: 'Licensed, patient, and caring pharmacists ready to assist.', icon: <Users className="w-6 h-6 text-indigo-600" /> },
    { title: 'Reasonable Pricing', desc: 'Maximum affordable pricing on all healthcare supplies and MRPs.', icon: <BadgePercent className="w-6 h-6 text-amber-600" /> },
    { title: 'Convenient Location', desc: 'Prime location near DEVI STHAN, BIDROHI CHOWK, LBS Classes.', icon: <MapPin className="w-6 h-6 text-rose-600" /> }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
              Trusted Reputation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Why Customers Trust <span className="text-emerald-600 dark:text-emerald-400">Sahu Pharma</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We have built an unwavering reputation in Kurtha, Arwal, and surrounding Bihar areas by prioritizing genuine health outcomes over everything else.
            </p>

            {/* Google Rating Badge */}
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-700 shadow-sm text-center">
                <span className="block text-2xl font-black text-slate-900 dark:text-white">4.9</span>
                <div className="flex text-amber-400 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">320+ Verified Google Reviews</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Rated #1 Pharmacy in Kurtha area</p>
              </div>
            </div>
          </div>

          {/* Right Grid of 6 Trust Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500 transition-all duration-300 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-700 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
