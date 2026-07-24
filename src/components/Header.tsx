import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Search, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  HeartPulse, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  onOpenSearch: () => void;
  onOpenWhatsAppModal: (medicineName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  darkMode,
  setDarkMode,
  onOpenSearch,
  onOpenWhatsAppModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm transition-all duration-300">
      {/* Top Bar for Phone, Emergency Hours & Location */}
      <div className="bg-[#0A8F6A] text-white text-xs py-2 px-4 border-b border-[#087758]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span className="flex items-center gap-1.5 font-medium text-emerald-50">
              <MapPin className="w-3.5 h-3.5 text-emerald-200" />
              <span>DEVI STHAN, BIDROHI CHOWK, Kurtha</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-100">
              <Clock className="w-3.5 h-3.5 text-emerald-200" />
              <span>Open 7 Days: {BUSINESS_INFO.openingHours.weekdays}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              id="top-call-btn"
              className="flex items-center gap-1.5 hover:text-emerald-100 transition-colors font-semibold"
            >
              <span className="w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
              <Phone className="w-3.5 h-3.5" />
              <span>09801235642</span>
            </a>
            <span className="text-emerald-400">|</span>
            <button 
              onClick={() => onOpenWhatsAppModal()}
              id="top-whatsapp-btn"
              className="flex items-center gap-1 text-emerald-100 hover:text-white transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-200" />
              <span>WhatsApp Order</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="glass bg-white/95 dark:bg-slate-900/95 border-b border-gray-100 dark:border-slate-800 transition-colors sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Business Title */}
            <div 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-[#0A8F6A] rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md shadow-emerald-900/10 group-hover:scale-105 transition-transform">
                S
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-xl font-bold leading-none text-[#1E40AF] dark:text-blue-400 tracking-tight">
                    {BUSINESS_INFO.name}
                  </h1>
                </div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-[#0A8F6A] dark:text-emerald-400 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#0A8F6A] dark:text-emerald-400" />
                  <span>Trusted Healthcare • Kurtha</span>
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`transition-all font-semibold ${
                      isActive
                        ? 'text-[#0A8F6A] dark:text-emerald-400 font-bold border-b-2 border-[#0A8F6A] pb-1'
                        : 'text-slate-600 dark:text-slate-300 hover:text-[#0A8F6A] dark:hover:text-emerald-400'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Action Icons & Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Medicine Search Trigger */}
              <button
                onClick={onOpenSearch}
                id="header-search-btn"
                className="px-3 py-2 rounded-full border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2 text-xs font-semibold"
                title="Search Medicines"
              >
                <Search className="w-3.5 h-3.5 text-[#0A8F6A] dark:text-emerald-400" />
                <span className="hidden xl:inline">Search Medicines...</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                id="header-dark-mode-toggle"
                className="p-2 rounded-full border border-gray-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Theme"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
              </button>

              {/* Call Phone Pill */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="header-call-now-btn"
                className="hidden xl:flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 text-xs font-semibold transition-colors"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>09801235642</span>
              </a>

              {/* WhatsApp Order Button */}
              <button
                onClick={() => onOpenWhatsAppModal()}
                id="header-whatsapp-order-btn"
                className="px-5 py-2.5 bg-[#0A8F6A] hover:bg-[#087758] text-white text-xs font-bold rounded-full shadow-lg shadow-green-900/10 flex items-center gap-2 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>
            </div>

            {/* Mobile Controls (Search, Dark mode, Hamburger) */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
              <button
                onClick={onOpenSearch}
                id="mobile-search-btn"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Search className="w-5 h-5 text-emerald-600" />
              </button>

              <button
                onClick={() => setDarkMode(!darkMode)}
                id="mobile-dark-mode-toggle"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle"
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-left font-semibold text-sm transition-colors ${
                  activeTab === item.id
                    ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="mobile-call-btn"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Call Store</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal();
                }}
                id="mobile-order-btn"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Order WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
