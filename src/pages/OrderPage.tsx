import React, { useState } from 'react';
import { 
  MessageSquare, 
  Upload, 
  Phone, 
  FileText, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  User, 
  Sparkles 
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { WhatsAppOrderFormData } from '../types';

export const OrderPage: React.FC = () => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Kurtha, Bihar',
    medicineName: '',
    hasPrescription: 'No',
    prescriptionFileName: '',
    message: '',
    preferredTime: 'Immediate (15-30 Mins)'
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setFormData((prev) => ({
        ...prev,
        hasPrescription: 'Yes',
        prescriptionFileName: file.name
      }));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName.trim() || !formData.mobileNumber.trim()) {
      alert('Please fill in your Name and Mobile Number.');
      return;
    }

    const messageText = `Hello ${BUSINESS_INFO.name},

Customer Name: ${formData.customerName}
Phone: ${formData.mobileNumber}
Email: ${formData.email || 'N/A'}
Medicine Required: ${formData.medicineName || 'General Medicines / Prescription Uploaded'}
Address: ${formData.address}
Prescription Attached: ${formData.hasPrescription}${formData.prescriptionFileName ? ` (${formData.prescriptionFileName})` : ''}
Preferred Delivery Time: ${formData.preferredTime}

Message/Notes: ${formData.message || 'None'}`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodedMsg}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Banner Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            WhatsApp Prescription & Order Form
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Order Medicines Directly on WhatsApp
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Fill in your details below or upload a doctor prescription photo. Clicking "Send via WhatsApp" will prefill a formatted message directly to Sahu Pharma!
          </p>
        </div>

        {/* Complete WhatsApp Order Card */}
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6">
          <form onSubmit={handleSendWhatsApp} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Customer Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="09801235642"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Preferred Time / Pickup</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none"
                >
                  <option value="Immediate (15-30 Mins)">Immediate Store Pickup</option>
                  <option value="Today Morning">Today Morning</option>
                  <option value="Today Evening">Today Evening</option>
                  <option value="Home Delivery Kurtha">Home Delivery (Kurtha Local)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Address in Kurtha / Nearby Area *</label>
              <textarea
                rows={2}
                required
                placeholder="e.g. Near Devi Sthan, Bidrohi Chowk, Kurtha, Bihar"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Medicine Name(s) Required</label>
              <input
                type="text"
                placeholder="e.g. Paracetamol 650mg, Benadryl Syrup, Pantoprazole 40mg"
                value={formData.medicineName}
                onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Upload Doctor Prescription Photo</label>
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 hover:border-emerald-500 rounded-2xl p-6 text-center cursor-pointer bg-white dark:bg-slate-900 relative">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-700 dark:text-slate-200">
                  {prescriptionFile ? prescriptionFile.name : 'Click to select or drop doctor prescription photo'}
                </p>
                <p className="text-[10px] text-slate-400 mt-1">Accepts JPG, PNG, PDF up to 10MB</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Message / Special Instructions</label>
              <input
                type="text"
                placeholder="e.g. Call before dispatching"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none"
              />
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                id="page-send-whatsapp-btn"
                className="flex-1 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Send via WhatsApp</span>
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="py-4 px-6 rounded-2xl bg-white dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm border border-slate-300 dark:border-slate-600 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Call Store</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
