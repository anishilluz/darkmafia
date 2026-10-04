export type VehicleType = 'car' | 'bike' | 'both';

export interface Vehicle {
  id: string;
  type: 'car' | 'bike';
  make: string;
  model: string;
  generation: string;
  yearRange: string;
  variant?: string;
  headlightSocket: string;
  fogSocket?: string;
  image?: string;
  badge?: string;
}

export interface ProductAttribute {
  name: string;
  options: string[];
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: number;
  regularPrice: number;
  salePrice?: number;
  onSale: boolean;
  stockStatus: 'instock' | 'outofstock' | 'onbackorder';
  stockQuantity?: number;
  rating: number;
  reviewCount: number;
  category: 'lighting' | 'accessories' | 'styling' | 'performance';
  categoryName: string;
  subCategory?: string;
  vehicleType: VehicleType;
  compatibleVehicleIds?: string[];
  isUniversal: boolean;
  images: string[];
  shortDescription: string;
  description: string;
  features: string[];
  specs: ProductSpec[];
  warranty: string;
  shipping: string;
  installationDifficulty: 'Plug & Play' | 'Moderate' | 'Professional Recommended';
  isFeatured?: boolean;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  bannerImage: string;
  beforeAfter: {
    beforeImage: string;
    afterImage: string;
    caption: string;
  };
  startingPrice: string;
  estimatedDuration: string;
  warranty: string;
  benefits: ServiceBenefit[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
  compatibleVehicleTypes: VehicleType[];
  linkedProductIds: string[];
  highlightTag?: string;
}

export interface Build {
  id: string;
  slug: string;
  title: string;
  vehicleName: string;
  vehicleType: 'car' | 'bike';
  year: string;
  location: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  gallery: string[];
  story: string;
  servicesPerformed: string[];
  productsUsedIds: string[];
  featured: boolean;
}

export interface CustomizationEnquiry {
  id?: string;
  ticketId?: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  vehicleType: 'car' | 'bike';
  make: string;
  model: string;
  year: string;
  selectedServices: string[];
  requirements: string;
  budgetRange: string;
  preferredDate?: string;
  status?: 'New' | 'Reviewing' | 'Contacted' | 'Quotation Sent' | 'Approved' | 'Scheduled' | 'In Progress' | 'Completed';
  createdAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedAttributes?: Record<string, string>;
  selectedServiceAddon?: {
    id: string;
    name: string;
    price: number;
  };
}
