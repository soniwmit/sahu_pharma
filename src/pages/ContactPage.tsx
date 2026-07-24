import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  Sparkles
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { GoogleMapSection } from '../components/GoogleMapSection';
import { QuickInquiryFormData } from '../types';

interface ContactPageProps {
  onOpenWhatsAppModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenWhatsAppModal }) => {
  const [form, setForm] = useState<QuickInquiryFormData>({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Query',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setForm({ name: '', phone: '', email: '', subject: 'General Medicine Query', message: '' });
      alert('Thank you! Your message has been received. Our pharmacist will contact you shortly.');
    }, 1000);
  };

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors animate-in fade-in duration-300 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Banner Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            Contact Sahu Pharma
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Get in Touch with Our Pharmacists
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Have questions about medicine availability, prices, or doctor prescriptions? Call us, text us on WhatsApp, or send an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Business Details Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
            <div className="space-y-2">
              <h2 className="text-2xl font-black text-white">{BUSINESS_INFO.name}</h2>
              <p className="text-xs text-emerald-400 font-bold">{BUSINESS_INFO.altName}</p>
              <p className="text-xs text-slate-300">{BUSINESS_INFO.tagline}</p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Store Address</p>
                  <p className="text-slate-300 mt-0.5">{BUSINESS_INFO.address.fullAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Phone Hotline</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-emerald-300 font-extrabold hover:underline">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">WhatsApp Order Number</p>
                  <p className="text-emerald-300 font-extrabold">{BUSINESS_INFO.whatsappFormatted}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Working Hours</p>
                  <p className="text-slate-300 mt-0.5">Mon - Sun: {BUSINESS_INFO.openingHours.weekdays}</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenWhatsAppModal}
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Open WhatsApp Order Form</span>
            </button>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Send Us a Quick Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Verma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="09801235642"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm outline-none"
                  >
                    <option value="General Medicine Query">General Medicine Query</option>
                    <option value="Prescription Refill">Prescription Refill</option>
                    <option value="Medical Equipment Inquiry">Medical Equipment Inquiry</option>
                    <option value="Store Location Inquiry">Store Location Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Message / Medicine Request</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us what medicine or service you need details for..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                {isSubmitted ? (
                  <CheckCircle2 className="w-5 h-5 animate-bounce" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <GoogleMapSection onOpenWhatsAppModal={onOpenWhatsAppModal} />
    </div>
  );
};
