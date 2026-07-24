import React from 'react';
import { 
  FileText, 
  Pill, 
  Zap, 
  Baby, 
  Heart, 
  Stethoscope, 
  Cross, 
  ShieldPlus, 
  Activity, 
  Home, 
  Check, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/pharmacyData';

interface ServicesSectionProps {
  onOpenWhatsAppModal: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenWhatsAppModal }) => {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Pill': return <Pill className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Baby': return <Baby className="w-6 h-6 text-pink-600 dark:text-pink-400" />;
      case 'Heart': return <Heart className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'Cross': return <Cross className="w-6 h-6 text-red-600 dark:text-red-400" />;
      case 'ShieldPlus': return <ShieldPlus className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'Activity': return <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'Home': return <Home className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default: return <Pill className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-100 dark:border-emerald-800">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Pharmacy Services in <span className="text-[#1E40AF] dark:text-blue-400">Kurtha</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            From daily prescription refills and baby care to medical equipment and surgical supplies.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-3xl bg-[#F9FAFB] dark:bg-slate-800/80 border border-gray-100 dark:border-slate-700/80 hover:border-[#0A8F6A]/50 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-700 shadow-2xs flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 font-bold text-[10px] border border-emerald-100 dark:border-emerald-800">
                    {service.availability}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#0A8F6A] dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-2 pt-3 border-t border-gray-200/60 dark:border-slate-700/60">
                  {service.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <Check className="w-3.5 h-3.5 text-[#0A8F6A] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="pt-5 mt-4">
                <button
                  onClick={() => onOpenWhatsAppModal(service.title)}
                  id={`inquire-service-${service.id}`}
                  className="w-full py-3 px-4 rounded-xl bg-white dark:bg-slate-700 hover:bg-[#0A8F6A] hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs border border-gray-200 dark:border-slate-600 hover:border-[#0A8F6A] flex items-center justify-center gap-2 transition-all shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#0A8F6A] group-hover:text-white" />
                  <span>Inquire via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
