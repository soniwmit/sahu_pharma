import { CategoryItem, FaqItem, GalleryImage, MedicineItem, ServiceItem, Testimonial } from '../types';

// Images
import heroBgImage from '../assets/images/pharmacy_hero_bg_1784876252979.jpg';
import storeFrontImage from '../assets/images/store_front_view_1784876268024.jpg';
import shelvesImage from '../assets/images/medicine_shelves_view_1784876286775.jpg';
import pharmacistImage from '../assets/images/pharmacist_consultation_1784876299779.jpg';

export const BUSINESS_INFO = {
  name: 'Sahu pharma',
  altName: 'New Sahu Medical',
  tagline: 'Your Trusted Medical Store for Genuine Medicines & Healthcare Needs',
  phone: '09801235642',
  phoneFormatted: '+91 9801235642',
  whatsappNumber: '919801235642',
  whatsappFormatted: '9801235642',
  email: 'sahupharmakurtha@gmail.com',
  address: {
    landmark: 'DEVI STHAN, BIDROHI CHOWK, near LBS COMPUTER CLASSES',
    city: 'Kurtha',
    district: 'Arwal',
    state: 'Bihar',
    pincode: '804421',
    fullAddress: 'DEVI STHAN, BIDROHI CHOWK, near LBS COMPUTER CLASSES, Kurtha, Bihar 804421'
  },
  openingHours: {
    weekdays: '7:00 AM - 10:00 PM',
    sunday: '7:00 AM - 10:00 PM',
    emergency: '24/7 Phone & WhatsApp Support Available'
  },
  googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14451.98765432109!2d84.8821!3d25.0482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d363f89012345%3A0x6789abcdef012345!2sKurtha%2C%20Bihar%20804421!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  rating: 4.9,
  totalReviews: 320,
  establishedYear: '2012',
  images: {
    heroBg: heroBgImage,
    storeFront: storeFrontImage,
    shelves: shelvesImage,
    pharmacist: pharmacistImage
  }
};

export const FEATURED_CATEGORIES: CategoryItem[] = [
  { id: '1', title: 'Tablets', slug: 'tablets', iconName: 'Pill', itemCount: 450, description: 'Essential prescription & OTC tablets for fever, pain, infection & daily care.', bgColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' },
  { id: '2', title: 'Capsules', slug: 'capsules', iconName: 'PillBottle', itemCount: 280, description: 'Antibiotics, multivitamins, acid reflux & gastro capsules from top brands.', bgColor: 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300' },
  { id: '3', title: 'Syrups', slug: 'syrups', iconName: 'GlassWater', itemCount: 190, description: 'Cough syrups, antacids, iron tonics & pediatric syrups.', bgColor: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300' },
  { id: '4', title: 'Injection & IV', slug: 'injection', iconName: 'Syringe', itemCount: 95, description: 'Sterile medical injections, IV fluids & administration kits.', bgColor: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300' },
  { id: '5', title: 'Medical Equipment', slug: 'medical-equipment', iconName: 'Stethoscope', itemCount: 85, description: 'BP monitors, glucometers, nebulizers, thermometers & pulse oximeters.', bgColor: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300' },
  { id: '6', title: 'Protein Supplements', slug: 'protein-supplements', iconName: 'Dumbbell', itemCount: 110, description: 'Health drinks, protein powders, whey & meal replacement shakes.', bgColor: 'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300' },
  { id: '7', title: 'Vitamins & Minerals', slug: 'vitamins', iconName: 'ShieldCheck', itemCount: 210, description: 'Calcium, Vitamin D3, B-Complex, Zinc & immunity boosters.', bgColor: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300' },
  { id: '8', title: 'Skin & Personal Care', slug: 'skin-care', iconName: 'Sparkles', itemCount: 160, description: 'Antiseptic creams, medicated soaps, ointments & dermatological lotion.', bgColor: 'bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300' },
  { id: '9', title: 'Baby Products', slug: 'baby-products', iconName: 'Baby', itemCount: 140, description: 'Baby formula, diapers, baby wipes, baby oil, massage powder & gripe water.', bgColor: 'bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300' },
  { id: '10', title: 'Personal Hygiene', slug: 'personal-hygiene', iconName: 'HeartHandshake', itemCount: 130, description: 'Sanitizers, masks, intimate wash, dental care & adult diapers.', bgColor: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300' },
  { id: '11', title: 'Orthopedic Support', slug: 'orthopedic-support', iconName: 'Activity', itemCount: 75, description: 'Knee supports, back belts, hot water bags, crepe bandages & ankle braces.', bgColor: 'bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300' },
  { id: '12', title: 'Diabetic Care', slug: 'diabetic-care', iconName: 'ActivitySquare', itemCount: 90, description: 'Glucometer test strips, lancets, sugar-free sweeteners & diabetic socks.', bgColor: 'bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300' }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 's1',
    title: 'Prescription Medicines',
    shortDesc: 'Complete range of branded & authentic generic prescription medicines verified by expert staff.',
    fullDesc: 'We stock genuine prescription medicines from top pharmaceutical companies like Cipla, Sun Pharma, Mankind, Lupin, Alkem, and Torrent. Bring or WhatsApp your doctor prescription for quick fulfillment.',
    iconName: 'FileText',
    features: ['100% Genuine Medicines', 'Batch Verified Expiry', 'Doctor Prescription Verification', 'Special Discount on Monthly Refills'],
    availability: 'Daily 7 AM - 10 PM'
  },
  {
    id: 's2',
    title: 'General & OTC Medicines',
    shortDesc: 'Over-the-counter remedies for pain, fever, cold, acidity, digestion, and daily ailments.',
    fullDesc: 'Access immediate relief for common everyday symptoms. Our experienced staff provides clear dosage guidance and instructions for over-the-counter healthcare products.',
    iconName: 'Pill',
    features: ['Immediate Stock Availability', 'Expert Dosage Guidance', 'Affordable Pricing', 'Safe & Trusted Formulations'],
    availability: 'In Stock Always'
  },
  {
    id: 's3',
    title: 'Health & Nutrition Supplements',
    shortDesc: 'Multivitamins, calcium, protein powders, immunity boosters, and health drinks.',
    fullDesc: 'Boost your health and daily energy with authentic health supplements, omega-3 capsules, herbal tonics, and doctor-recommended nutritional powders.',
    iconName: 'Zap',
    features: ['FSSAI Approved Brands', 'Immunity Boosters', 'Kid & Senior Nutrition', 'Fitness & Protein Supplements'],
    availability: 'In Stock Always'
  },
  {
    id: 's4',
    title: 'Baby Care & Essentials',
    shortDesc: 'Hypoallergenic baby soaps, diapers, formula food, teething gels, and baby hygiene products.',
    fullDesc: 'Complete mother and baby care supplies including infant nutrition, baby wipes, diapers, rash creams, baby oils, and gentle clinical products for delicate skin.',
    iconName: 'Baby',
    features: ['Top Brands (Huggies, Pampers, Lactogen)', 'Dermatologically Tested', 'Gentle & Safe Formulation', 'Surgical Baby Essentials'],
    availability: 'In Stock Always'
  },
  {
    id: 's5',
    title: 'Personal Care & Hygiene',
    shortDesc: 'Medicated skincare, shampoos, antiseptics, intimate hygiene, and dental supplies.',
    fullDesc: 'Comprehensive personal care items including antiseptic liquids, acne treatments, hair tonics, oral care, antibacterial washes, and daily hygiene products.',
    iconName: 'Heart',
    features: ['Medicated & Clinical Care', 'Antiseptic Solutions', 'Skin & Hair Wellness', 'Daily Personal Hygiene'],
    availability: 'In Stock Always'
  },
  {
    id: 's6',
    title: 'Medical Devices & Equipment',
    shortDesc: 'Digital BP monitors, sugar testing meters, nebulizers, digital thermometers, and oximeters.',
    fullDesc: 'Accurate home health monitoring equipment from reliable brands like Omron, Dr. Morepen, Accu-Chek, and Dr. Trust with warranty and staff guidance on how to use.',
    iconName: 'Stethoscope',
    features: ['Brand Warranty Included', 'Free Usage Demonstration', 'Digital Precision Measurement', 'Battery & Accessories Included'],
    availability: 'In Stock Always'
  },
  {
    id: 's7',
    title: 'Surgical Items & Dressing',
    shortDesc: 'Sterile cotton, bandages, surgical gloves, syringes, IV sets, gauze rolls, and antiseptic tapes.',
    fullDesc: 'High-grade hospital and surgical supplies for wound dressing, post-surgery care, home nursing, emergency first aid, and clinical procedures.',
    iconName: 'Cross',
    features: ['Hospital Standard Quality', 'Sterile Sealed Packaging', 'Complete Wound Care Kits', 'Bulk Hospital Rates'],
    availability: 'In Stock Always'
  },
  {
    id: 's8',
    title: 'First Aid Supplies',
    shortDesc: 'Custom first-aid boxes, burn creams, pain relief sprays, antiseptic liquids, and wound bands.',
    fullDesc: 'Be prepared for emergencies with pre-packed or customized first-aid kits for homes, vehicles, shops, schools, and offices in Kurtha.',
    iconName: 'ShieldPlus',
    features: ['Customized Kit Options', 'Emergency Wound Care', 'Immediate Antiseptic Relief', 'Compact Home & Travel Packs'],
    availability: 'In Stock Always'
  },
  {
    id: 's9',
    title: 'Diabetic & BP Care Supplies',
    shortDesc: 'Glucometer test strips, sugar-free supplements, diabetic footwear, lancets, and BP cuffs.',
    fullDesc: 'Specialized support for patients managing diabetes and hypertension. Get regular test strip refills, sugar substitutes, and blood pressure monitoring tools.',
    iconName: 'Activity',
    features: ['Accu-Chek & Contour Test Strips', 'Sugar-Free Natural Sweeteners', 'Diabetic Socks & Care', 'Monthly Medicine Refill Reminder'],
    availability: 'In Stock Always'
  },
  {
    id: 's10',
    title: 'Home Healthcare Products',
    shortDesc: 'Hot water bags, ice gel packs, steam inhalers, air mattresses, walking sticks, and commode chairs.',
    fullDesc: 'Patient mobility and recovery products for elderly and home-recovering patients. Quality walking aids, heating pads, vaporizers, and support gear.',
    iconName: 'Home',
    features: ['Senior Citizen Assistance', 'Post-Op Recovery Gear', 'Comfortable Patient Aids', 'Durable Quality'],
    availability: 'In Stock Always'
  }
];

export const MEDICINE_CATALOG: MedicineItem[] = [
  {
    id: 'm1',
    name: 'Paracetamol 650mg Tablets',
    genericName: 'Paracetamol',
    category: 'Tablets',
    dosageForm: 'Tablet',
    price: 30,
    mrp: 35,
    manufacturer: 'Mankind / Micro Labs',
    description: 'Fast-acting fever reducer and pain reliever for headaches, muscle ache, and viral fever.',
    uses: ['Fever', 'Headache', 'Body Pain'],
    composition: 'Paracetamol 650 mg',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 14
  },
  {
    id: 'm2',
    name: 'Amoxicillin & Potassium Clavulanate 625mg',
    genericName: 'Amoxicillin + Clavulanic Acid',
    category: 'Tablets',
    dosageForm: 'Tablet',
    price: 180,
    mrp: 205,
    manufacturer: 'Alkem / Mankind',
    description: 'Broad-spectrum antibiotic tablet for throat infections, chest infections, and bacterial fever.',
    uses: ['Bacterial Infection', 'Throat Pain', 'Dental Infection'],
    composition: 'Amoxicillin 500 mg + Clavulanic Acid 125 mg',
    stockStatus: 'In Stock',
    requiresPrescription: true,
    discountPercentage: 12
  },
  {
    id: 'm3',
    name: 'Pantoprazole 40mg + Domperidone 30mg SR',
    genericName: 'Pantoprazole + Domperidone',
    category: 'Capsules',
    dosageForm: 'Capsule',
    price: 120,
    mrp: 145,
    manufacturer: 'Sun Pharma / Cipla',
    description: 'Sustained release capsules for severe hyperacidity, GERD, gas, and nausea relief.',
    uses: ['Acid Reflux', 'Heartburn', 'Gastric Ulcer', 'Nausea'],
    composition: 'Pantoprazole 40 mg + Domperidone 30 mg SR',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 17
  },
  {
    id: 'm4',
    name: 'Benadryl Cough Formula Syrup 100ml',
    genericName: 'Diphenhydramine + Ammonium Chloride',
    category: 'Syrups',
    dosageForm: 'Syrup',
    price: 110,
    mrp: 125,
    manufacturer: 'Johnson & Johnson',
    description: 'Effective soothing relief for chesty cough, throat irritation, and bronchial allergy.',
    uses: ['Cough Relief', 'Throat Soothing', 'Bronchial Congestion'],
    composition: 'Diphenhydramine HCl + Ammonium Chloride + Sodium Citrate',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 12
  },
  {
    id: 'm5',
    name: 'Omron Automatic Digital BP Monitor (HEM-7120)',
    genericName: 'Digital Blood Pressure Monitor',
    category: 'Medical Equipment',
    dosageForm: 'Equipment',
    price: 2150,
    mrp: 2650,
    manufacturer: 'Omron Healthcare',
    description: 'Accurate clinical arm digital blood pressure monitor with Intellisense technology and memory.',
    uses: ['BP Measurement', 'Pulse Tracking', 'Home Health Care'],
    composition: 'Digital Pressure Sensor & Cuff',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 18
  },
  {
    id: 'm6',
    name: 'Accu-Chek Active Test Strips (50 Strips)',
    genericName: 'Blood Glucose Test Strips',
    category: 'Diabetic Care',
    dosageForm: 'Equipment',
    price: 920,
    mrp: 1045,
    manufacturer: 'Roche Diabetes Care',
    description: 'High-precision blood sugar testing strips for Accu-Chek Active glucometer.',
    uses: ['Blood Sugar Test', 'Diabetes Management'],
    composition: 'Glucose Dehydrogenase Reagent',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 12
  },
  {
    id: 'm7',
    name: 'Multivitamin with Zinc & Ginseng Capsules',
    genericName: 'Multivitamin & Mineral Complex',
    category: 'Vitamins',
    dosageForm: 'Capsule',
    price: 140,
    mrp: 175,
    manufacturer: 'Mankind / Cipla',
    description: 'Daily energy booster capsule packed with essential vitamins, zinc, calcium, and mineral complexes.',
    uses: ['Immunity Booster', 'Stamina & Energy', 'Vitamin Deficiency'],
    composition: 'Vitamins A, C, D3, E, B-Complex + Zinc + Ginseng',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 20
  },
  {
    id: 'm8',
    name: 'Huggies Wonder Pants Baby Diapers (Medium - 42s)',
    genericName: 'Infant Diaper Pants',
    category: 'Baby Products',
    dosageForm: 'Baby Care',
    price: 540,
    mrp: 649,
    manufacturer: 'Kimberly-Clark',
    description: 'Ultra-absorbent soft cottony diaper pants with 12-hour overnight protection for babies.',
    uses: ['Baby Dryness', 'Rash Prevention', 'Overnight Comfort'],
    composition: 'Breathable Cotton Fabric & Super Absorbent Polymer',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 16
  },
  {
    id: 'm9',
    name: 'Volini Pain Relief Gel / Spray 50g',
    genericName: 'Diclofenac Pain Relief Gel',
    category: 'Skin Care',
    dosageForm: 'Ointment',
    price: 145,
    mrp: 165,
    manufacturer: 'Sun Pharma',
    description: 'Fast acting deep penetrating pain relief ointment for joint pain, backache, and sprains.',
    uses: ['Joint Pain', 'Backache', 'Muscle Sprain', 'Neck Stiffness'],
    composition: 'Diclofenac Diethylamine + Methyl Salicylate + Menthol',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 12
  },
  {
    id: 'm10',
    name: 'Dettol Antiseptic Liquid 500ml',
    genericName: 'Chloroxylenol Antiseptic',
    category: 'Personal Hygiene',
    dosageForm: 'Personal Care',
    price: 195,
    mrp: 215,
    manufacturer: 'Reckitt Benckiser',
    description: 'Trusted multi-purpose antiseptic liquid for wound cleaning, bathing, and household disinfection.',
    uses: ['Wound Disinfection', 'First Aid', 'Personal Hygiene'],
    composition: 'Chloroxylenol 4.8% w/v',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 9
  },
  {
    id: 'm11',
    name: 'Protinex Health & Protein Powder 400g (Chocolate)',
    genericName: 'Fortified Protein Powder',
    category: 'Protein Supplements',
    dosageForm: 'Supplements',
    price: 590,
    mrp: 675,
    manufacturer: 'Danone / Protinex',
    description: 'High-protein nutritional supplement formula enriched with 34 essential vitamins and minerals.',
    uses: ['Muscle Repair', 'Daily Strength', 'Recovery Nutrition'],
    composition: 'Hydrolyzed Peanut Protein + Vitamins & Minerals',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 12
  },
  {
    id: 'm12',
    name: 'Orthopedic Lumbar Sacral Back Belt (Large)',
    genericName: 'Spinal Support Back Belt',
    category: 'Orthopedic Support',
    dosageForm: 'Equipment',
    price: 650,
    mrp: 850,
    manufacturer: 'Tynor / Vissco',
    description: 'Ergonomic lumbar support belt with flexible splints to relieve lower back pain and sciatica.',
    uses: ['Back Pain Relief', 'Posture Correction', 'Lumbar Support'],
    composition: 'Breathable Elastic Band & Flexible Metallic Splints',
    stockStatus: 'In Stock',
    requiresPrescription: false,
    discountPercentage: 23
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    customerName: 'Ramesh Kumar Verma',
    location: 'Bidrohi Chowk, Kurtha',
    rating: 5,
    reviewText: 'Sahu Pharma is the best pharmacy in Kurtha! Always get 100% genuine medicines at fair prices. Sending prescription via WhatsApp is super convenient for my elder father\'s monthly BP and diabetes medicines.',
    date: '12 July 2026',
    verifiedBuyer: true,
    avatarText: 'RK'
  },
  {
    id: 't2',
    customerName: 'Priya Sharma',
    location: 'Near LBS Computer Classes, Kurtha',
    rating: 5,
    reviewText: 'Very respectful and knowledgeable staff. When my baby needed pediatric syrup late in the evening, they quickly provided genuine medicine with clear instructions. Highly recommended local store!',
    date: '28 June 2026',
    verifiedBuyer: true,
    avatarText: 'PS'
  },
  {
    id: 't3',
    customerName: 'Dr. Alok Nath Roy',
    location: 'Devi Sthan, Kurtha',
    rating: 5,
    reviewText: 'As a medical professional, I appreciate New Sahu Medical for maintaining high standards, proper cold chain storage for injections, and verified authentic medicines from Cipla and Sun Pharma.',
    date: '15 May 2026',
    verifiedBuyer: true,
    avatarText: 'AR'
  },
  {
    id: 't4',
    customerName: 'Sunil Prasad',
    location: 'Kurtha Main Market',
    rating: 5,
    reviewText: 'Bought an Omron BP Monitor and Accu-Chek machine from Sahu Pharma. They demonstrated how to use the equipment patiently and gave a good discount. Excellent customer service.',
    date: '04 May 2026',
    verifiedBuyer: true,
    avatarText: 'SP'
  },
  {
    id: 't5',
    customerName: 'Meena Devi',
    location: 'Gramin Tola, Kurtha',
    rating: 5,
    reviewText: 'WhatsApp order process is very simple! I uploaded my prescription photo on WhatsApp, and within a few minutes they confirmed the order. Reliable and fast service.',
    date: '21 April 2026',
    verifiedBuyer: true,
    avatarText: 'MD'
  },
  {
    id: 't6',
    customerName: 'Vikas Singh',
    location: 'Arwal Road, Kurtha',
    rating: 5,
    reviewText: 'Clean store, polite staff, reasonable pricing, and availability of surgical dressings when needed. Sahu Pharma has earned our entire family\'s trust for years.',
    date: '10 March 2026',
    verifiedBuyer: true,
    avatarText: 'VS'
  }
];

export const PHARMACY_FAQS: FaqItem[] = [
  {
    id: 'faq1',
    question: 'How do I place an order for medicines via WhatsApp at Sahu Pharma?',
    answer: 'It is simple! Click the "WhatsApp Order" button on our website or text us at 09801235642. Share your doctor prescription photo or list the medicine names along with your address. Our pharmacist will verify the prescription and confirm your order promptly.',
    category: 'Ordering'
  },
  {
    id: 'faq2',
    question: 'Are all medicines available at Sahu Pharma 100% genuine and authentic?',
    answer: 'Yes! We strictly source 100% genuine medicines directly from certified pharmaceutical distributors and top manufacturers like Cipla, Sun Pharma, Mankind, Lupin, Alkem, and Mankind. All items come with verified batch numbers and long expiry dates.',
    category: 'Products'
  },
  {
    id: 'faq3',
    question: 'What are the store operating hours for Sahu Pharma in Kurtha?',
    answer: 'Our store located at DEVI STHAN, BIDROHI CHOWK, Kurtha is open 7 days a week from 7:00 AM to 10:00 PM. For emergency medical needs outside these hours, you can reach us via our hotline or WhatsApp at 09801235642.',
    category: 'Store Info'
  },
  {
    id: 'faq4',
    question: 'Do I need a prescription to buy prescription medicines?',
    answer: 'Yes. Schedule H and Schedule H1 prescription medicines (such as antibiotics, strong painkillers, cardiac drugs, and specialized injections) strictly require a valid doctor prescription. OTC medicines, vitamins, and healthcare products do not require a prescription.',
    category: 'Prescription'
  },
  {
    id: 'faq5',
    question: 'Do you deliver home medical supplies in Kurtha and nearby areas?',
    answer: 'Yes! We offer quick home delivery and pickup services for local residents in Kurtha town and nearby surrounding areas. Send your list via WhatsApp at 09801235642 for immediate dispatch.',
    category: 'Ordering'
  },
  {
    id: 'faq6',
    question: 'What payment methods do you accept at Sahu Pharma?',
    answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), QR code payments, and major debit/credit cards for complete hassle-free transactions.',
    category: 'Payments'
  },
  {
    id: 'faq7',
    question: 'Can I purchase medical equipment like BP Monitors, Glucometers, and Nebulizers?',
    answer: 'Yes, we keep digital BP monitors (Omron, Dr. Trust), Accu-Chek & Dr. Morepen Glucometers, Nebulizers, Oximeters, Digital Thermometers, and Steam Inhalers in stock with manufacturer warranty.',
    category: 'Products'
  },
  {
    id: 'faq8',
    question: 'Do you stock baby care products and mother health essentials?',
    answer: 'Yes, we carry baby formula (Lactogen, Nan Pro, Similac), diapers (Pampers, Huggies), baby wipes, baby soap/shampoo (Johnson\'s, Himalaya), gripe water, and maternal health supplements.',
    category: 'Products'
  },
  {
    id: 'faq9',
    question: 'Where is Sahu Pharma / New Sahu Medical located in Kurtha?',
    answer: 'We are conveniently located at DEVI STHAN, BIDROHI CHOWK, near LBS COMPUTER CLASSES, Kurtha, Bihar 804421. You can search "Sahu pharma Kurtha" on Google Maps or call us at 09801235642 for directions.',
    category: 'Store Info'
  },
  {
    id: 'faq10',
    question: 'Can I get monthly refill reminders for my ongoing chronic medicines?',
    answer: 'Yes! For patients taking regular BP, diabetes, thyroid, or heart medicines, we offer convenient monthly auto-refill reminders on WhatsApp so you never run out of critical medicines.',
    category: 'Prescription'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'g1',
    title: 'Sahu Pharma Store Front View',
    category: 'Store Front',
    url: storeFrontImage,
    caption: 'Welcoming store entrance at DEVI STHAN, BIDROHI CHOWK, Kurtha.'
  },
  {
    id: 'g2',
    title: 'Organized Medicine Shelves',
    category: 'Shelves',
    url: shelvesImage,
    caption: 'Neatly organized pharmaceutical shelves with temperature-monitored storage.'
  },
  {
    id: 'g3',
    title: 'Pharmacist Consultation Counter',
    category: 'Customer Care',
    url: pharmacistImage,
    caption: 'Experienced pharmacist providing friendly consultation and medicine guidance.'
  },
  {
    id: 'g4',
    title: 'Modern Medical Store Ambiance',
    category: 'Store Front',
    url: heroBgImage,
    caption: 'Clean, hygienic, and bright healthcare environment.'
  },
  {
    id: 'g5',
    title: 'Medical Devices & BP Monitors Shelf',
    category: 'Equipment',
    url: shelvesImage,
    caption: 'Digital BP monitors, glucometers, nebulizers and health monitors.'
  },
  {
    id: 'g6',
    title: 'Baby Care & Healthcare Essentials',
    category: 'Products',
    url: storeFrontImage,
    caption: 'Complete mother care, baby nutrition, and personal hygiene section.'
  }
];

export const WORKING_STEPS = [
  {
    step: '01',
    title: 'Visit Store or Contact',
    description: 'Walk into our store at Bidrohi Chowk, Kurtha or text us directly on WhatsApp/Phone.',
    iconName: 'MapPin'
  },
  {
    step: '02',
    title: 'Share Prescription',
    description: 'Provide your doctor prescription or medicine list to our qualified pharmacist.',
    iconName: 'FileCheck'
  },
  {
    step: '03',
    title: 'Get Medicines Verified',
    description: 'We carefully check batch numbers, expiry dates, and proper dosages for safety.',
    iconName: 'CheckCircle2'
  },
  {
    step: '04',
    title: 'Easy Payment & Pickup',
    description: 'Pay via Cash, UPI or QR Code and collect your genuine medicines instantly.',
    iconName: 'CreditCard'
  }
];

export const WHY_CHOOSE_US_ITEMS = [
  { title: '100% Genuine Medicines', desc: 'Directly sourced from licensed pharmaceutical companies like Cipla, Sun Pharma & Mankind.', iconName: 'ShieldCheck', color: 'emerald' },
  { title: 'Experienced Staff', desc: 'Qualified pharmacists offering expert guidance on dosage, safety and administration.', iconName: 'UserCheck', color: 'blue' },
  { title: 'Affordable Prices', desc: 'Maximum savings on MRP with genuine discounts for monthly recurring refills.', iconName: 'Tag', color: 'teal' },
  { title: 'Fast Service', desc: 'Quick counter pickup and prompt response for all WhatsApp prescription inquiries.', iconName: 'Zap', color: 'amber' },
  { title: 'Prescription Medicines', desc: 'Wide stock of specialized Schedule H & H1 drugs verified by licensed professionals.', iconName: 'FileText', color: 'indigo' },
  { title: 'Healthcare Products', desc: 'Complete range of baby care, surgical supplies, supplements & orthopedic support.', iconName: 'HeartPulse', color: 'rose' },
  { title: 'Trusted Local Pharmacy', desc: 'Serving Kurtha, Arwal and surrounding Bihar communities with integrity for over 12+ years.', iconName: 'MapPin', color: 'purple' },
  { title: 'Easy WhatsApp Support', desc: 'Send prescription photo on WhatsApp at 09801235642 for instant pre-filled order confirmation.', iconName: 'MessageSquare', color: 'green' }
];
