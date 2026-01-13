// Product image imports
import unitreeH1 from '@/assets/products/unitree-h1.png';
import unitreeH2 from '@/assets/products/unitree-h2.png';
import unitreeG1 from '@/assets/products/unitree-g1.png';
import unitreeGo2 from '@/assets/products/unitree-go2.png';
import unitreeB2 from '@/assets/products/unitree-b2.png';

// G1 gallery images
import g1Gallery1 from '@/assets/products/g1/g1-gallery-1.jpg';
import g1Gallery2 from '@/assets/products/g1/g1-gallery-2.jpg';
import g1Gallery3 from '@/assets/products/g1/g1-gallery-3.jpg';
import g1Gallery4 from '@/assets/products/g1/g1-gallery-4.jpg';
import g1Gallery5 from '@/assets/products/g1/g1-gallery-5.jpg';
import g1Gallery6 from '@/assets/products/g1/g1-gallery-6.jpg';
import g1Gallery7 from '@/assets/products/g1/g1-gallery-7.jpg';
import g1Gallery8 from '@/assets/products/g1/g1-gallery-8.jpg';
import g1Gallery9 from '@/assets/products/g1/g1-gallery-9.jpg';
import g1Gallery10 from '@/assets/products/g1/g1-gallery-10.jpg';
import g1Gallery11 from '@/assets/products/g1/g1-gallery-11.png';
import g1Gallery12 from '@/assets/products/g1/g1-gallery-12.png';

export const productImages: Record<string, string> = {
  'unitree-h1': unitreeH1,
  'unitree-h2': unitreeH2,
  'unitree-g1': unitreeG1,
  'unitree-r1': unitreeH1, // Fallback to H1 image
  'unitree-go2': unitreeGo2,
  'unitree-b2': unitreeB2,
  'unitree-b2w': unitreeB2, // Fallback to B2 image
  'unitree-go1': unitreeGo2, // Fallback to Go2 image
  'unitree-aliengo': unitreeGo2, // Fallback to Go2 image
};

export const g1GalleryImages: string[] = [
  g1Gallery1,
  g1Gallery2,
  g1Gallery3,
  g1Gallery4,
  g1Gallery5,
  g1Gallery6,
  g1Gallery7,
  g1Gallery8,
  g1Gallery9,
  g1Gallery10,
  g1Gallery11,
  g1Gallery12,
];

export const productGalleries: Record<string, string[]> = {
  'unitree-g1': g1GalleryImages,
};

export const getProductImage = (productId: string): string | undefined => {
  return productImages[productId];
};

export const getProductGallery = (productId: string): string[] => {
  return productGalleries[productId] || [];
};
