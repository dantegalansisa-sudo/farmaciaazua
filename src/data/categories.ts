import type { CategorySlug } from './types';

export interface CategoryData {
  slug: CategorySlug;
  title: string;
  desc: string;
  image: string;
  color: string;
  productCount: number;
}

export const categories: CategoryData[] = [
  {
    slug: 'medicamentos',
    title: 'Medicamentos',
    desc: 'Medicamentos de marca y genéricos. Recetados y de venta libre.',
    image: '/images/pharma-placeholder.jpg',
    color: '#1A7340',
    productCount: 8,
  },
  {
    slug: 'vitaminas',
    title: 'Vitaminas & Suplementos',
    desc: 'Vitaminas, minerales y suplementos para toda la familia.',
    image: '/images/pharma-placeholder.jpg',
    color: '#229654',
    productCount: 6,
  },
  {
    slug: 'cosmeticos',
    title: 'Cosméticos & Cuidado',
    desc: 'Cremas, lociones, protectores y productos de belleza.',
    image: '/images/pharma-placeholder.jpg',
    color: '#C0392B',
    productCount: 5,
  },
  {
    slug: 'bebes',
    title: 'Bebés & Maternidad',
    desc: 'Pañales, fórmulas, cremas y todo para tu bebé.',
    image: '/images/pharma-placeholder.jpg',
    color: '#2980B9',
    productCount: 4,
  },
  {
    slug: 'equipos',
    title: 'Equipos Médicos',
    desc: 'Tensiómetros, glucómetros, termómetros y más.',
    image: '/images/pharma-placeholder.jpg',
    color: '#8E44AD',
    productCount: 4,
  },
  {
    slug: 'primeros-auxilios',
    title: 'Primeros Auxilios',
    desc: 'Vendas, antisépticos, gasas y todo para emergencias.',
    image: '/images/pharma-placeholder.jpg',
    color: '#E74C3C',
    productCount: 5,
  },
];
