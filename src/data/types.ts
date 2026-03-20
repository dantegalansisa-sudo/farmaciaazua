import type { ReactNode } from 'react';

export type CategorySlug = 'medicamentos' | 'vitaminas' | 'cosmeticos' | 'bebes' | 'equipos' | 'primeros-auxilios';

export interface Product {
  id: string;
  name: string;
  category: CategorySlug;
  priceRange: string;
  image: string;
  inStock: boolean;
  popular: boolean;
  tags: string[];
  dosage?: string;
  manufacturer?: string;
  activeIngredients?: string[];
  indications?: string[];
  warnings?: string[];
  requiresPrescription?: boolean;
}

export interface Category {
  slug: CategorySlug;
  icon: ReactNode;
  title: string;
  desc: string;
  image: string;
  color: string;
  productCount: number;
}

export interface TeamMember {
  name: string;
  title: string;
  specialty: string;
  image: string;
  initials: string;
  featured?: boolean;
  bio?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  category: string;
  verified: boolean;
  date: string;
}

export interface Offer {
  id: string;
  product: string;
  discount: string;
  detail: string;
  icon: ReactNode;
  expiresAt: string;
  featured: boolean;
}

export interface HealthArticle {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
