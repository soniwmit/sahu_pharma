import React, { useState } from 'react';
import { 
  Search, 
  X, 
  Pill, 
  CheckCircle2, 
  AlertCircle, 
  ShoppingBag, 
  Filter, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { MEDICINE_CATALOG, FEATURED_CATEGORIES } from '../data/pharmacyData';
import { MedicineItem } from '../types';

interface MedicineSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMedicineForOrder: (medicineName: string) => void;
}

export const MedicineSearchModal: React.FC<MedicineSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectMedicineForOrder
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  if (!isOpen) return null;

  const filteredMedicines = MEDICINE_CATALOG.filter((med) => {
    const matchesSearch = 
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.uses.some(use => use.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || med.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Search className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">Search Pharmacy Stock</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Search genuine medicines, equipment & products</p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-search-modal-btn"
            className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 space-y-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              autoFocus
              placeholder="Search by Medicine Name, Salt, Uses (e.g., Paracetamol, BP, Sugar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Category Badges */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-colors ${
                selectedCategory === 'All'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
              }`}
            >
              All Items
            </button>
            {FEATURED_CATEGORIES.slice(0, 8).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.title)}
                className={`px-3 py-1.5 rounded-lg font-medium shrink-0 transition-colors ${
                  selectedCategory === cat.title
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {filteredMedicines.length > 0 ? (
            filteredMedicines.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                      {item.category}
                    </span>
                    {item.requiresPrescription && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center gap-0.5">
                        <ShieldAlert className="w-3 h-3" />
                        Rx Required
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-700 dark:text-slate-300">Generic:</span> {item.genericName} • <span className="font-medium text-slate-700 dark:text-slate-300">Mfr:</span> {item.manufacturer}
                  </p>

                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <span className="text-emerald-600 dark:text-emerald-400 font-extrabold text-sm">
                      ₹{item.price}
                    </span>
                    <span className="text-slate-400 line-through text-xs">
                      MRP ₹{item.mrp}
                    </span>
                    {item.discountPercentage && (
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                        {item.discountPercentage}% OFF
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onSelectMedicineForOrder(item.name);
                  }}
                  id={`order-search-item-${item.id}`}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order via WhatsApp</span>
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-12 space-y-3">
              <Pill className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
              <p className="text-sm font-bold text-slate-700 dark:text-slate-300">No matching medicine found in catalog preview</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                We carry over 5000+ medicines at our Kurtha store. Send us your prescription on WhatsApp for instant verification!
              </p>
              <button
                onClick={() => {
                  onClose();
                  onSelectMedicineForOrder(searchQuery || 'Custom Prescription');
                }}
                className="mt-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs inline-flex items-center gap-2"
              >
                <span>Request Custom Medicine on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
