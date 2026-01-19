import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: 'website' | 'product' | 'article';
  image?: string;
  noIndex?: boolean;
  jsonLd?: object;
}

const DEFAULT_TITLE = 'Fusion Humanoids Ireland & UK';
const DEFAULT_DESCRIPTION = 'Official distributor of Unitree robots in Ireland and the UK. Explore humanoid robots and robot dogs for research, education, and industry.';
const SITE_URL = 'https://fusionhumanoids.com';
const DEFAULT_IMAGE = '/og-image.jpg';

export function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  type = 'website',
  image = DEFAULT_IMAGE,
  noIndex = false,
  jsonLd,
}: SEOProps) {
  const fullTitle = title ? `${title} | ${DEFAULT_TITLE}` : DEFAULT_TITLE;
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  const fullCanonical = canonical ? `${SITE_URL}${canonical}` : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImage} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:site_name" content={DEFAULT_TITLE} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}

// Pre-built JSON-LD schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fusion Humanoids",
  "url": "https://fusionhumanoids.com",
  "logo": "https://fusionhumanoids.com/fusion-logo.png",
  "description": "Official distributor of Unitree robots in Ireland and the UK",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dromone, Oldcastle",
    "addressLocality": "Co Meath",
    "postalCode": "A82E0W4",
    "addressCountry": "IE"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+353-44-967-2855",
    "contactType": "sales",
    "email": "sales@fusionhumanoids.com",
    "availableLanguage": "English"
  },
  "sameAs": []
};

export function createProductSchema(product: {
  name: string;
  description: string;
  image: string;
  slug: string;
  availability: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "url": `https://fusionhumanoids.com/products/${product.slug}`,
    "brand": {
      "@type": "Brand",
      "name": "Unitree"
    },
    "offers": {
      "@type": "Offer",
      "availability": product.availability === 'available' 
        ? "https://schema.org/InStock" 
        : product.availability === 'pre-order'
        ? "https://schema.org/PreOrder"
        : "https://schema.org/OutOfStock",
      "priceCurrency": "EUR",
      "seller": {
        "@type": "Organization",
        "name": "Fusion Humanoids"
      }
    }
  };
}
