import React from 'react';
import { MapPin, FileCheck, CheckCircle2, CreditCard } from 'lucide-react';
import { WORKING_STEPS } from '../data/pharmacyData';

export const WorkingProcess: React.FC = () => {
  const getStepIcon = (name: string) => {
    switch (name) {
      case 'MapPin': return <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      default: return <MapPin className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            How to Get Your Medicines
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
            4 simple steps to get genuine medicines verified by our licensed pharmacists.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKING_STEPS.map((stepItem, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4 hover:border-emerald-500 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-slate-700 flex items-center justify-center">
                  {getStepIcon(stepItem.iconName)}
                </div>
                <span className="text-2xl font-black text-slate-200 dark:text-slate-700">
                  {stepItem.step}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
