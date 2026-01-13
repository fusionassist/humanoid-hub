import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Check, Zap, MessageSquare } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { getProductBySlug } from '@/data/products';
import { getManufacturerById } from '@/data/manufacturers';
import { cn } from '@/lib/utils';

const availabilityConfig = {
  'available': { label: 'Available Now', className: 'bg-green-500/10 text-green-500 border-green-500/20' },
  'coming-soon': { label: 'Coming Soon', className: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' },
  'pre-order': { label: 'Pre-Order Available', className: 'bg-primary/10 text-primary border-primary/20' },
};

const resourceTypeIcons: Record<string, string> = {
  datasheet: '📄',
  manual: '📘',
  brochure: '📃',
  video: '🎬',
  software: '💾',
};

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const manufacturer = product ? getManufacturerById(product.manufacturerId) : null;

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const availability = availabilityConfig[product.availability];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/products" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-32 h-32 text-muted-foreground/20" />
              </div>
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <Badge className={cn("border text-sm px-3 py-1", availability.className)}>
                  {availability.label}
                </Badge>
                <Badge variant="secondary" className="capitalize text-sm px-3 py-1">
                  {product.category.replace('-', ' ')}
                </Badge>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              {manufacturer && (
                <Link 
                  to={`/brands/${manufacturer.slug}`}
                  className="inline-flex items-center text-sm text-primary hover:underline mb-4"
                >
                  {manufacturer.name}
                </Link>
              )}

              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                {product.keySpecs.map((spec, i) => (
                  <div key={i} className="p-4 rounded-xl bg-card border border-border">
                    <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                    <p className="font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Price / CTA */}
              <div className="p-6 rounded-xl bg-card border border-border mb-8">
                <p className="text-sm text-muted-foreground mb-2">Price</p>
                <p className="text-2xl font-bold mb-1">Request a Quote</p>
                <p className="text-xs text-muted-foreground">
                  All prices exclusive of VAT (23% Ireland, 20% UK). Contact us for enterprise pricing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="flex-1" asChild>
                  <a href="#quote-form">
                    <MessageSquare className="w-4 h-4" />
                    Request Quote
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-start border-b border-border rounded-none bg-transparent h-auto p-0 mb-8">
              <TabsTrigger 
                value="overview"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger 
                value="specs"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="downloads"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
              >
                Downloads
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-0">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">About {product.name}</h2>
                  <div className="prose prose-invert max-w-none">
                    {product.longDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-muted-foreground mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Use Cases</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, i) => (
                        <Badge key={i} variant="secondary" className="text-sm px-3 py-1">
                          {useCase}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="mt-0">
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.keySpecs.map((spec, i) => (
                  <div key={i} className="p-6 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">{spec.label}</p>
                    <p className="text-xl font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="downloads" className="mt-0">
              <h2 className="text-2xl font-bold mb-6">Downloads & Resources</h2>
              {product.resourceLinks.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.resourceLinks.map((resource, i) => (
                    <a
                      key={i}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-2xl">{resourceTypeIcons[resource.type] || '📄'}</span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        {resource.type} • Opens in new tab
                      </p>
                    </a>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  No downloads available yet. Contact us for documentation.
                </p>
              )}
              <p className="text-sm text-muted-foreground mt-6">
                * All resources link to official manufacturer documentation on external websites.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Request a Quote</h2>
              <p className="text-muted-foreground">
                Interested in the {product.name}? Fill out the form below and our team 
                will get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <QuoteForm productId={product.id} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
