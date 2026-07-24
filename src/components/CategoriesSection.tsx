import React from 'react';
import { 
  Pill, 
  PillBottle, 
  GlassWater, 
  Syringe, 
  Stethoscope, 
  Dumbbell, 
  ShieldCheck, 
  Sparkles, 
  Baby, 
  HeartHandshake, 
  Activity, 
  ActivitySquare,
  ArrowRight
} from 'lucide-react';
import { FEATURED_CATEGORIES } from '../data/pharmacyData';

interface CategoriesSectionProps {
  onSelectCategory: (categoryName: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'Pill': return <Pill className="w-6 h-6" />;
      case 'PillBottle': return <PillBottle className="w-6 h-6" />;
      case 'GlassWater': return <GlassWater className="w-6 h-6" />;
      case 'Syringe': return <Syringe className="w-6 h-6" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Baby': return <Baby className="w-6 h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'ActivitySquare': return <ActivitySquare className="w-6 h-6" />;
      default: return <Pill className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-16 bg-[#F9FAFB] dark:bg-slate-900/60 border-b border-gray-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-[#0A8F6A] dark:text-emerald-300 font-bold text-xs uppercase tracking-wider border border-emerald-100 dark:border-emerald-800">
              Stock Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Featured Medicine Categories
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Browse our comprehensive stock of authentic pharmaceutical & healthcare essentials.
            </p>
          </div>

          <div className="text-xs font-semibold text-[#0A8F6A] dark:text-emerald-400 flex items-center gap-1">
            <span>Click any category to search catalog</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

        {/* 12 Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {FEATURED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.title)}
              id={`cat-card-${cat.id}`}
              className="group p-4 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700/80 hover:border-[#0A8F6A] transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer flex flex-col items-center text-center space-y-3"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cat.bgColor} group-hover:scale-105 transition-transform`}>
                {getCategoryIcon(cat.iconName)}
              </div>

              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-[#0A8F6A] dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                  {cat.itemCount}+ Products
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
