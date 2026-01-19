import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';
import { products } from '@/data/products';
import { manufacturers } from '@/data/manufacturers';
import { ProductCategory, ProductAvailability } from '@/types';

const categoryOptions: { value: ProductCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All Categories' },
  { value: 'humanoid', label: 'Humanoid Robots' },
  { value: 'robot-dog', label: 'Robot Dogs' },
  { value: 'industrial', label: 'Industrial' },
];

const availabilityOptions: { value: ProductAvailability | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'available', label: 'Available' },
  { value: 'pre-order', label: 'Pre-Order' },
  { value: 'coming-soon', label: 'Coming Soon' },
];

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categoryFilter = (searchParams.get('category') as ProductCategory) || 'all';
  const brandFilter = searchParams.get('brand') || 'all';
  const availabilityFilter = (searchParams.get('availability') as ProductAvailability) || 'all';

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete(key);
    } else {
      params.set(key, value);
    }
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearch('');
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = search === '' || 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(search.toLowerCase());
      
      const matchesCategory = categoryFilter === 'all' || product.category === categoryFilter;
      const matchesBrand = brandFilter === 'all' || product.manufacturerId === brandFilter;
      const matchesAvailability = availabilityFilter === 'all' || product.availability === availabilityFilter;

      return matchesSearch && matchesCategory && matchesBrand && matchesAvailability;
    });
  }, [search, categoryFilter, brandFilter, availabilityFilter]);

  const hasActiveFilters = categoryFilter !== 'all' || brandFilter !== 'all' || availabilityFilter !== 'all' || search !== '';

  return (
    <Layout>
      <SEO 
        title="Products"
        description="Browse our full range of Unitree humanoid robots and robot dogs. Available for purchase in Ireland and the UK with full warranty and support."
        canonical="/products"
      />
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Product Catalog
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our full range of humanoid robots and robotic solutions available in Ireland & UK.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <Badge variant="secondary" className="ml-2">Active</Badge>
              )}
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`lg:w-64 shrink-0 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}
            >
              {/* Category Filter */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4">Category</h3>
                <div className="space-y-2">
                  {categoryOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('category', option.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        categoryFilter === option.value
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4">Brand</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => updateFilter('brand', 'all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      brandFilter === 'all'
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-secondary'
                    }`}
                  >
                    All Brands
                  </button>
                  {manufacturers.map((manufacturer) => (
                    <button
                      key={manufacturer.id}
                      onClick={() => updateFilter('brand', manufacturer.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        brandFilter === manufacturer.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      {manufacturer.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="font-semibold mb-4">Availability</h3>
                <div className="space-y-2">
                  {availabilityOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateFilter('availability', option.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        availabilityFilter === option.value
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <Button variant="outline" onClick={clearFilters} className="w-full">
                  <X className="w-4 h-4 mr-2" />
                  Clear All Filters
                </Button>
              )}
            </motion.aside>

            {/* Product Grid */}
            <div className="flex-1">
              {/* Results Count */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredProducts.length}</span> products
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground mb-4">No products found</p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
