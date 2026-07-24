import React from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Building2, 
  Compass,
  MessageSquare
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pharmacyData';

interface GoogleMapSectionProps {
  onOpenWhatsAppModal: () => void;
}

export const GoogleMapSection: React.FC<GoogleMapSectionProps> = ({ onOpenWhatsAppModal }) => {
  const handleOpenGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.name + ' ' + BUSINESS_INFO.address.fullAddress)}`;
    window.open(mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs uppercase tracking-wider">
            Store Location
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Visit Our Store in <span className="text-emerald-600 dark:text-emerald-400">Kurtha</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Conveniently located at Bidrohi Chowk near LBS Computer Classes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Store Address & Info Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {BUSINESS_INFO.name} ({BUSINESS_INFO.altName})
                  </h3>
                  <p className="text-xs text-emerald-600 font-semibold">{BUSINESS_INFO.tagline}</p>
                </div>
              </div>

              {/* Address detail list */}
              <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Full Address</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      {BUSINESS_INFO.address.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Key Landmarks</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      DEVI STHAN, BIDROHI CHOWK, near LBS COMPUTER CLASSES
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Phone & Hotline</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 font-semibold">
                      {BUSINESS_INFO.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Store Hours</p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      Mon - Sun: {BUSINESS_INFO.openingHours.weekdays}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleOpenGoogleMaps}
                id="get-directions-map-btn"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </button>

              <button
                onClick={onOpenWhatsAppModal}
                id="location-whatsapp-btn"
                className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md min-h-[380px] relative bg-slate-200 dark:bg-slate-800">
            <iframe
              title="Sahu Pharma Location Map"
              src="https://maps.google.com/maps?q=Kurtha,Bihar,804421&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
