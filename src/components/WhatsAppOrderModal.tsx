import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  Upload, 
  Phone, 
  FileText, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  User, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';
import { WhatsAppOrderFormData } from '../types';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicineName?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicineName = ''
}) => {
  const [formData, setFormData] = useState<WhatsAppOrderFormData>({
    customerName: '',
    mobileNumber: '',
    email: '',
    address: 'Kurtha, Bihar',
    medicineName: prefilledMedicineName,
    hasPrescription: 'No',
    prescriptionFileName: '',
    message: '',
    preferredTime: 'Immediate (15-30 Mins)'
  });

  const [prescriptionFile, setPrescriptionFile] = useState<File | null>(null);
  const [filePreviewUrl, setFilePreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledMedicineName) {
      setFormData((prev) => ({ ...prev, medicineName: prefilledMedicineName }));
    }
  }, [prefilledMedicineName]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPrescriptionFile(file);
      setFormData((prev) => ({
        ...prev,
        hasPrescription: 'Yes',
        prescriptionFileName: file.name
      }));
      setFilePreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.customerName.trim() || !formData.mobileNumber.trim()) {
      alert('Please fill in your Name and Mobile Number to proceed.');
      return;
    }

    // Format message string as specified in requirements
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
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white rounded-t-2xl flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold">WhatsApp Medicine Order</h2>
              <p className="text-xs text-emerald-100 flex items-center gap-1">
                <span>Directly connects to {BUSINESS_INFO.name} Pharmacist</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            id="close-whatsapp-modal-btn"
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSendWhatsApp} className="p-6 space-y-4">
          <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl p-3 flex items-start gap-2 text-xs text-emerald-800 dark:text-emerald-300">
            <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>Upload prescription or write medicine names. We confirm total price and dispatch quickly in Kurtha!</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Customer Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-emerald-600" />
                <span>Customer Name *</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={formData.customerName}
                onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mobile Number *</span>
              </label>
              <input
                type="tel"
                required
                placeholder="09801235642"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            {/* Preferred Delivery Time */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" />
                <span>Preferred Pickup / Time</span>
              </label>
              <select
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
              >
                <option value="Immediate (15-30 Mins)">Immediate Store Pickup</option>
                <option value="Today Morning">Today Morning</option>
                <option value="Today Evening">Today Evening</option>
                <option value="Home Delivery Kurtha">Home Delivery (Kurtha Local)</option>
              </select>
            </div>
          </div>

          {/* Delivery Address */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              <span>Full Address in Kurtha / Nearby Area *</span>
            </label>
            <textarea
              rows={2}
              required
              placeholder="e.g. Near Devi Sthan, Bidrohi Chowk, Kurtha, Bihar"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Medicine Name Required */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Medicine Name(s) & Dosage</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Paracetamol 650mg (1 strip), Amoxicillin 625mg (1 strip)"
              value={formData.medicineName}
              onChange={(e) => setFormData({ ...formData, medicineName: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Upload Prescription */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1">
                <Upload className="w-3.5 h-3.5 text-emerald-600" />
                <span>Upload Doctor Prescription Photo</span>
              </span>
              <span className="text-[10px] text-emerald-600 font-semibold">(JPG, PNG, PDF up to 10MB)</span>
            </label>

            <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-emerald-500 rounded-xl p-4 text-center cursor-pointer bg-slate-50/50 dark:bg-slate-800/50 transition-colors relative">
              <input
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              {prescriptionFile ? (
                <div className="flex items-center justify-center gap-3 text-emerald-700 dark:text-emerald-300">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                  <div className="text-left">
                    <p className="text-xs font-bold">{prescriptionFile.name}</p>
                    <p className="text-[10px] text-slate-500">{(prescriptionFile.size / 1024).toFixed(1)} KB - Ready to attach</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-1">
                  <Upload className="w-6 h-6 mx-auto text-slate-400 dark:text-slate-500" />
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Click or Drag doctor prescription image here
                  </p>
                  <p className="text-[10px] text-slate-400">Clear photo helps speed up fulfillment</p>
                </div>
              )}
            </div>

            {filePreviewUrl && (
              <div className="mt-2 p-2 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center gap-3">
                <img src={filePreviewUrl} alt="Prescription Preview" className="w-12 h-12 object-cover rounded-lg" />
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">Prescription photo attached</span>
              </div>
            )}
          </div>

          {/* Message / Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
              Special Message or Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Please confirm total bill before sending."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              id="submit-whatsapp-order-btn"
              className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Send via WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              id="call-directly-order-btn"
              className="py-3 px-5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call Now</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
