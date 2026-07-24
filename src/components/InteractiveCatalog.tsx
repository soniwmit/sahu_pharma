import React, { useState } from 'react';
import { 
  Pill, 
  Search, 
  ShoppingBag, 
  ShieldAlert, 
  Sparkles, 
  CheckCircle2, 
  Filter,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { MEDICINE_CATALOG, FEATURED_CATEGORIES } from '../data/pharmacyData';

interface InteractiveCatalogProps {
  selectedCategoryFromHeader?: string;
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const InteractiveCatalog: React.FC<InteractiveCatalogProps> = ({
  selectedCategoryFromHeader = 'All',
  onOpenWhatsAppModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFromHeader);
  const [searchFilter, setSearchFilter] = useState('');

  const filteredMedicines = MEDICINE_CATALOG.filter((med) => {
    const matchesCategory = activeCategory === 'All' || med.category === activeCategory;
    const matchesSearch = 
      med.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      med.uses.some(use => use.toLowerCase().includes(searchFilter.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            Medicine Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Popular Available Medicines & Essentials
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            Instant WhatsApp prescription fulfillment. Click any product to order directly.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 mb-8 border border-slate-200 dark:border-slate-700/80 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search medicine by name or disease..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Category Pill Filters */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
              <button
                onClick={() => setActiveCategory('All')}
                className={`px-3.5 py-2 rounded-xl font-bold shrink-0 transition-all ${
                  activeCategory === 'All'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200'
                }`}
              >
                All
              </button>
              {['Tablets', 'Capsules', 'Syrups', 'Medical Equipment', 'Baby Products', 'Diabetic Care'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl font-semibold shrink-0 transition-all ${
                    activeCategory === cat
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedicines.map((med) => (
            <div
              key={med.id}
              className="group rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg p-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold">
                    {med.category}
                  </span>
                  {med.requiresPrescription ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" />
                      Rx Required
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      OTC Product
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {med.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {med.genericName} • {med.manufacturer}
                  </p>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {med.description}
                </p>

                {/* Uses Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {med.uses.map((use, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded text-[10px] text-slate-600 dark:text-slate-300 font-medium">
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">
                      ₹{med.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      ₹{med.mrp}
                    </span>
                  </div>
                  <p className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold">
                    In Stock at Kurtha
                  </p>
                </div>

                <button
                  onClick={() => onOpenWhatsAppModal(med.name)}
                  id={`order-med-btn-${med.id}`}
                  className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Order</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Prescription Request CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold">Don't see your specific medicine listed above?</h3>
            <p className="text-xs text-emerald-200">
              We carry over 5,000+ prescription and OTC items in stock. Send us a quick WhatsApp photo!
            </p>
          </div>
          <button
            onClick={() => onOpenWhatsAppModal('Custom Prescription Medicine')}
            id="catalog-custom-prescription-btn"
            className="px-6 py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-slate-100 flex items-center gap-2 shrink-0 shadow-md"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Upload Doctor Prescription</span>
          </button>
        </div>
      </div>
    </section>
  );
};
