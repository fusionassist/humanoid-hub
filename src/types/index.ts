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

export interface ProductSpecSection {
  title: string;
  specs: ProductSpec[];
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
  detailedSpecs?: ProductSpecSection[];
  useCases: string[];
  features: string[];
  media: string[];
  gallery?: string[];
  thumbnail: string;
  resourceLinks: ProductResource[];
  availability: 'available' | 'coming-soon' | 'pre-order';
  featured: boolean;
  price?: string;
  highlights?: string[];
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

// Blog types
export interface BlogAuthor {
  name: string;
  avatar?: string;
  role: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: BlogAuthor;
  publishedAt: string;
  readingTime: number;
  category: BlogCategory;
  tags: string[];
  featured: boolean;
  relatedProductSlugs?: string[];
}

export type BlogCategory = 'news' | 'technology' | 'industry' | 'tutorials' | 'case-studies';
