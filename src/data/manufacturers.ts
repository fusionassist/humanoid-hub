import { Manufacturer } from '@/types';

export const manufacturers: Manufacturer[] = [
  {
    id: 'unitree',
    name: 'Unitree Robotics',
    slug: 'unitree',
    logo: '/placeholder.svg',
    description: 'Unitree Robotics is a leading developer of high-performance quadruped and humanoid robots. Founded in 2016, Unitree has pioneered affordable, powerful robotic platforms for research, industry, and entertainment applications worldwide.',
    website: 'https://www.unitree.com',
    featured: true,
  },
];

export const getManufacturerById = (id: string): Manufacturer | undefined => {
  return manufacturers.find((m) => m.id === id);
};

export const getManufacturerBySlug = (slug: string): Manufacturer | undefined => {
  return manufacturers.find((m) => m.slug === slug);
};
