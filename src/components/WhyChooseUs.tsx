import React from 'react';
import { 
  ShieldCheck, 
  UserCheck, 
  Tag, 
  Zap, 
  FileText, 
  HeartPulse, 
  MapPin, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/pharmacyData';

interface WhyChooseUsProps {
  onOpenWhatsAppModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenWhatsAppModal }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Tag': return <Tag className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'FileText': return <FileText className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'MessageSquare': return <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 bg-[#F9FAFB] dark:bg-slate-900/60 border-b border-gray-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-100 dark:border-emerald-800">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Kurtha Chooses <span className="text-[#1E40AF] dark:text-blue-400">Sahu Pharma</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Your family's health is our top priority. We combine authentic medicines with friendly local guidance.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_ITEMS.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item.title.includes('WhatsApp')) {
                  onOpenWhatsAppModal();
                }
              }}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 hover:border-[#0A8F6A]/50 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] dark:bg-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#0A8F6A] dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-slate-700/50 flex items-center justify-between text-xs font-bold text-[#0A8F6A] dark:text-emerald-400">
                <span>Guaranteed Quality</span>
                <Sparkles className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#0A8F6A]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
