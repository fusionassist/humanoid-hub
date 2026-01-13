import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Search, Filter } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { products } from '@/data/products';
import { manufacturers } from '@/data/manufacturers';

const resourceTypeLabels: Record<string, string> = {
  datasheet: 'Datasheet',
  manual: 'Manual',
  brochure: 'Brochure',
  video: 'Video',
  software: 'Software',
};

const resourceTypeIcons: Record<string, string> = {
  datasheet: '📄',
  manual: '📘',
  brochure: '📃',
  video: '🎬',
  software: '💾',
};

export default function Downloads() {
  const [search, setSearch] = useState('');
  const [brandFilter, setBrandFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

  // Collect all resources with product/manufacturer context
  const allResources = useMemo(() => {
    return products.flatMap(product => {
      const manufacturer = manufacturers.find(m => m.id === product.manufacturerId);
      return product.resourceLinks.map(resource => ({
        ...resource,
        productName: product.name,
        productSlug: product.slug,
        manufacturerId: product.manufacturerId,
        manufacturerName: manufacturer?.name || 'Unknown',
      }));
    });
  }, []);

  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      const matchesSearch = search === '' || 
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.productName.toLowerCase().includes(search.toLowerCase());
      const matchesBrand = brandFilter === 'all' || resource.manufacturerId === brandFilter;
      const matchesType = typeFilter === 'all' || resource.type === typeFilter;
      return matchesSearch && matchesBrand && matchesType;
    });
  }, [allResources, search, brandFilter, typeFilter]);

  const resourceTypes = ['datasheet', 'manual', 'brochure', 'video', 'software'];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Downloads & Resources
            </h1>
            <p className="text-xl text-muted-foreground">
              Access datasheets, manuals, brochures, and technical documentation for all our products. 
              All links direct to official manufacturer resources.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Resources */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className="h-12 px-4 rounded-lg bg-card border border-border text-sm"
              >
                <option value="all">All Brands</option>
                {manufacturers.map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="h-12 px-4 rounded-lg bg-card border border-border text-sm"
              >
                <option value="all">All Types</option>
                {resourceTypes.map(type => (
                  <option key={type} value={type}>{resourceTypeLabels[type]}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <p className="text-muted-foreground mb-6">
            Showing <span className="font-semibold text-foreground">{filteredResources.length}</span> resources
          </p>

          {filteredResources.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredResources.map((resource, i) => (
                <motion.a
                  key={`${resource.productSlug}-${i}`}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 8) * 0.05 }}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{resourceTypeIcons[resource.type]}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{resource.productName}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs capitalize">
                      {resource.type}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {resource.manufacturerName}
                    </Badge>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Download className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground mb-2">No resources found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          )}

          {/* Note */}
          <div className="mt-12 p-6 rounded-xl bg-secondary/30 border border-border">
            <h3 className="font-semibold mb-2">About Downloads</h3>
            <p className="text-sm text-muted-foreground">
              All download links direct to official manufacturer websites. FusionHumanoids.com does not host 
              manufacturer documentation. For the latest versions and additional resources, visit the 
              manufacturer's official website.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
