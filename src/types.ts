export interface MedicineItem {
  id: string;
  name: string;
  genericName: string;
  category: string;
  dosageForm: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Ointment' | 'Equipment' | 'Supplements' | 'Baby Care' | 'Personal Care';
  price: number;
  mrp: number;
  manufacturer: string;
  description: string;
  uses: string[];
  composition: string;
  stockStatus: 'In Stock' | 'Limited Stock' | 'Available on Request';
  requiresPrescription: boolean;
  image?: string;
  discountPercentage?: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  features: string[];
  availability: string;
}

export interface CategoryItem {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  itemCount: number;
  description: string;
  bgColor: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  reviewText: string;
  date: string;
  verifiedBuyer: boolean;
  avatarText: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Prescription' | 'Store Info' | 'Ordering' | 'Products' | 'Payments';
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'Store Front' | 'Shelves' | 'Equipment' | 'Customer Care' | 'Products';
  url: string;
  caption: string;
}

export interface WhatsAppOrderFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  hasPrescription: 'Yes' | 'No';
  prescriptionFileName?: string;
  message: string;
  preferredTime: string;
}

export interface QuickInquiryFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
