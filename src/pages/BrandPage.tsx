import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { getManufacturerBySlug } from '@/data/manufacturers';
import { getProductsByManufacturer } from '@/data/products';

export default function BrandPage() {
  const { slug } = useParams<{ slug: string }>();
  const manufacturer = getManufacturerBySlug(slug || '');
  const products = manufacturer ? getProductsByManufacturer(manufacturer.id) : [];

  if (!manufacturer) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Brand Not Found</h1>
          <p className="text-muted-foreground mb-8">The brand you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button>View All Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const humanoids = products.filter(p => p.category === 'humanoid');
  const robotDogs = products.filter(p => p.category === 'robot-dog');

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                <span className="text-2xl font-bold gradient-text">U</span>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{manufacturer.name}</h1>
                <a
                  href={manufacturer.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:underline mt-1"
                >
                  Official Website
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {manufacturer.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Humanoid Robots */}
      {humanoids.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">Humanoid Robots</h2>
                <p className="text-muted-foreground">
                  Advanced bipedal robots for research, industry, and service applications.
                </p>
              </div>
              <Link to="/products?category=humanoid" className="hidden md:block">
                <Button variant="outline">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {humanoids.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Robot Dogs */}
      {robotDogs.length > 0 && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-end justify-between mb-12"
            >
              <div>
                <h2 className="text-3xl font-bold mb-2">Robot Dogs</h2>
                <p className="text-muted-foreground">
                  Versatile quadruped robots for inspection, security, and entertainment.
                </p>
              </div>
              <Link to="/products?category=robot-dog" className="hidden md:block">
                <Button variant="outline">
                  View All
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {robotDogs.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Interested in {manufacturer.name} Products?
            </h2>
            <p className="text-muted-foreground mb-8">
              As an official partner, we provide full sales support, warranty coverage, 
              and technical assistance for all {manufacturer.name} products in Ireland.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Sales
                </Button>
              </Link>
              <Link to="/support">
                <Button variant="outline" size="lg">
                  View Support Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
