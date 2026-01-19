import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Truck, Headphones, Award, Zap, Users, Bot, Dog } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/products/ProductCard';
import { SEO, organizationSchema } from '@/components/SEO';
import { getFeaturedProducts } from '@/data/products';
import heroHumanoid from '@/assets/hero-humanoid.jpg';
import heroRobotDog from '@/assets/products/unitree-go2.png';

const features = [
  {
    icon: Shield,
    title: 'Official Unitree Partner',
    description: 'Official Unitree distributor for Ireland with full warranty support.',
  },
  {
    icon: Truck,
    title: 'Irish Delivery',
    description: 'Fast, insured delivery across Ireland & UK with white-glove service available.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Local technical support team with robotics expertise and training.',
  },
  {
    icon: Award,
    title: 'Full Compliance',
    description: 'All robots meet EU safety standards and Irish regulatory requirements.',
  },
];

const categories = [
  {
    title: 'Humanoid Robots',
    description: 'Advanced bipedal robots for research, industry, and service applications.',
    image: heroHumanoid,
    href: '/products?category=humanoid',
    icon: Bot,
  },
  {
    title: 'Robot Dogs',
    description: 'Versatile quadruped robots for inspection, security, and entertainment.',
    image: heroRobotDog,
    href: '/products?category=robot-dog',
    icon: Dog,
  },
];

export default function Home() {
  const featuredProducts = getFeaturedProducts().slice(0, 6);

  return (
    <Layout>
      <SEO 
        canonical="/"
        jsonLd={organizationSchema}
      />
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroHumanoid}
            alt="Advanced humanoid robot"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4" />
              Ireland & UK's Premier Robotics Partner
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              The Future of
              <span className="block gradient-text">Robotics is Here</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Ireland & UK's exclusive destination for world-class humanoid robots and robot dogs. 
              Bringing Unitree's cutting-edge technology to businesses and institutions across Ireland & UK.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button variant="hero" size="xl">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="xl">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humanoid robots to agile quadrupeds, discover the perfect robotic solution for your needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={category.href} className="group block">
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                          <category.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <div className="flex items-center text-primary font-medium group-hover:gap-3 gap-2 transition-all">
                        View Products
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Robots</h2>
              <p className="text-muted-foreground max-w-xl">
                Explore our curated selection of cutting-edge humanoid robots and quadrupeds from Unitree.
              </p>
            </div>
            <Link to="/products">
              <Button variant="outline">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FusionHumanoids.com?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As Ireland & UK's dedicated robotics partner, we provide end-to-end support from consultation to deployment.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how Irish organizations are leveraging robotic technology for innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <Users className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Customer Name</p>
                    <p className="text-sm text-muted-foreground">Company, Ireland</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Testimonial placeholder - Real customer testimonials will be added here to showcase 
                  the impact of robotic solutions in Irish businesses."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Contact our team for a personalized consultation and discover how robotics 
              can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="hero-outline" size="xl">
                  Browse Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
