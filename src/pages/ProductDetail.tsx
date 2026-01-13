import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, ExternalLink, Check, Zap, MessageSquare, Play, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { QuoteForm } from '@/components/forms/QuoteForm';
import { getProductBySlug } from '@/data/products';
import { getManufacturerById } from '@/data/manufacturers';
import { getProductImage, getProductGallery } from '@/data/productImages';
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
  const productImage = product ? getProductImage(product.id) : null;
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const productGallery = product ? getProductGallery(product.id) : [];
  const allImages = product ? [
    ...(productImage ? [productImage] : []),
    ...productGallery,
    ...(product.gallery || []),
  ] : [];

  const nextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

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
            {/* Product Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {/* Main Image */}
              <div className="relative aspect-[16/10] rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                {allImages.length > 0 ? (
                  <img 
                    src={allImages[currentGalleryIndex]} 
                    alt={`${product.name} - Image ${currentGalleryIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Zap className="w-32 h-32 text-muted-foreground/20" />
                  </div>
                )}
                
                {/* Navigation Arrows */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-background/80 text-sm">
                      {currentGalleryIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}

                <div className="absolute top-6 left-6 flex flex-col gap-2">
                  <Badge className={cn("border text-sm px-3 py-1", availability.className)}>
                    {availability.label}
                  </Badge>
                  <Badge variant="secondary" className="capitalize text-sm px-3 py-1">
                    {product.category.replace('-', ' ')}
                  </Badge>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {allImages.slice(0, 8).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentGalleryIndex(i)}
                      className={cn(
                        "flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors",
                        currentGalleryIndex === i ? "border-primary" : "border-transparent hover:border-muted-foreground/50"
                      )}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                  {allImages.length > 8 && (
                    <div className="flex-shrink-0 w-20 h-14 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
                      +{allImages.length - 8} more
                    </div>
                  )}
                </div>
              )}
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
              {allImages.length > 1 && (
                <TabsTrigger 
                  value="gallery"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
                >
                  Gallery ({allImages.length})
                </TabsTrigger>
              )}
              {product.media.length > 0 && (
                <TabsTrigger 
                  value="videos"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6 py-4"
                >
                  Videos
                </TabsTrigger>
              )}
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
              
              {/* Key Specs Summary */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {product.keySpecs.map((spec, i) => (
                  <div key={i} className="p-4 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-xs text-muted-foreground mb-1">{spec.label}</p>
                    <p className="text-lg font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>

              {/* Detailed Specs Accordion */}
              {product.detailedSpecs && product.detailedSpecs.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Full Specifications</h3>
                  <Accordion type="multiple" className="space-y-2">
                    {product.detailedSpecs.map((section, i) => (
                      <AccordionItem 
                        key={i} 
                        value={`section-${i}`}
                        className="border border-border rounded-xl px-6 bg-card"
                      >
                        <AccordionTrigger className="text-lg font-medium hover:no-underline">
                          {section.title}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="grid sm:grid-cols-2 gap-4 pb-4">
                            {section.specs.map((spec, j) => (
                              <div key={j} className="flex justify-between items-start py-2 border-b border-border/50 last:border-0">
                                <span className="text-muted-foreground text-sm">{spec.label}</span>
                                <span className="text-right font-medium text-sm max-w-[60%]">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}
            </TabsContent>

            {/* Gallery Tab */}
            {allImages.length > 1 && (
              <TabsContent value="gallery" className="mt-0">
                <h2 className="text-2xl font-bold mb-6">Image Gallery</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentGalleryIndex(i)}
                      className="group relative aspect-video rounded-xl overflow-hidden bg-secondary/50 border border-border hover:border-primary/50 transition-colors"
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} - Image ${i + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <ImageIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                </div>
              </TabsContent>
            )}

            {product.media.length > 0 && (
              <TabsContent value="videos" className="mt-0">
                <h2 className="text-2xl font-bold mb-6">Product Videos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.media.map((videoUrl, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-secondary/50 border border-border">
                      <video
                        src={videoUrl}
                        controls
                        className="w-full aspect-video object-cover"
                        poster=""
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="p-4">
                        <div className="flex items-center gap-2">
                          <Play className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Demo Video {i + 1}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  * Videos sourced from official Unitree product pages.
                </p>
              </TabsContent>
            )}

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
