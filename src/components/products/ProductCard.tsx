import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Product } from '@/types';
import { getManufacturerById } from '@/data/manufacturers';
import { getProductImage } from '@/data/productImages';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  index?: number;
}

const availabilityConfig = {
  'available': { label: 'Available', className: 'bg-green-500/10 text-green-500 border-green-500/20' },
  'coming-soon': { label: 'Coming Soon', className: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' },
  'pre-order': { label: 'Pre-Order', className: 'bg-primary/10 text-primary border-primary/20' },
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const manufacturer = getManufacturerById(product.manufacturerId);
  const availability = availabilityConfig[product.availability];
  const productImage = getProductImage(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/products/${product.slug}`}
        className="group block h-full"
      >
        <div className="relative h-full rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary to-muted overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {productImage ? (
              <img 
                src={productImage} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-16 h-16 text-muted-foreground/20" />
              </div>
            )}
            {/* Availability Badge */}
            <div className="absolute top-4 left-4">
              <Badge className={cn("border", availability.className)}>
                {availability.label}
              </Badge>
            </div>
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="capitalize">
                {product.category.replace('-', ' ')}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Manufacturer */}
            {manufacturer && (
              <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wider">
                {manufacturer.name}
              </p>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {product.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {product.shortDescription}
            </p>

            {/* Key Specs Preview */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.keySpecs.slice(0, 3).map((spec, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                  {spec.label}: {spec.value}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center text-sm font-medium text-primary group-hover:gap-3 gap-2 transition-all">
              View Details
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
