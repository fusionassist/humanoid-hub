// Product image imports
import unitreeH1 from '@/assets/products/unitree-h1.png';
import unitreeH2 from '@/assets/products/unitree-h2.jpg';
import unitreeG1 from '@/assets/products/unitree-g1.png';
import unitreeGo2 from '@/assets/products/unitree-go2.jpg';
import unitreeB2 from '@/assets/products/unitree-b2.jpg';

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

export const getProductImage = (productId: string): string | undefined => {
  return productImages[productId];
};
