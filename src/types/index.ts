// CMS-like data model types

export interface Manufacturer {
  id: string;
  name: string;
  slug: string;
  logo: string;
  description: string;
  website: string;
  featured: boolean;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductResource {
  title: string;
  url: string;
  type: 'datasheet' | 'manual' | 'brochure' | 'video' | 'software';
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  manufacturerId: string;
  category: 'humanoid' | 'robot-dog' | 'industrial' | 'other';
  shortDescription: string;
  longDescription: string;
  keySpecs: ProductSpec[];
  useCases: string[];
  features: string[];
  media: string[];
  thumbnail: string;
  resourceLinks: ProductResource[];
  availability: 'available' | 'coming-soon' | 'pre-order';
  featured: boolean;
}

export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  productId?: string;
  region: 'ireland' | 'uk' | 'eu';
  type: 'quote' | 'contact' | 'newsletter';
  createdAt?: string;
}

export interface Region {
  id: string;
  name: string;
  code: string;
  currency: string;
  currencySymbol: string;
  enabled: boolean;
  vatRate: number;
}

export type ProductCategory = 'humanoid' | 'robot-dog' | 'industrial' | 'other';
export type ProductAvailability = 'available' | 'coming-soon' | 'pre-order';
