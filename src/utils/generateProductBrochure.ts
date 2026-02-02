import { Product } from '@/types';
import { getManufacturerById } from '@/data/manufacturers';
import { getProductImage, getProductGallery } from '@/data/productImages';

export function generateProductBrochure(product: Product): void {
  const manufacturer = getManufacturerById(product.manufacturerId);
  const mainImage = getProductImage(product.id);
  const galleryImages = getProductGallery(product.id);
  
  // Create a printable HTML document
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download the brochure');
    return;
  }

  // Get absolute URLs for images
  const getAbsoluteUrl = (path: string) => {
    if (path.startsWith('http')) return path;
    return new URL(path, window.location.origin).href;
  };

  const mainImageUrl = mainImage ? getAbsoluteUrl(mainImage) : '';
  const galleryImageUrls = galleryImages.slice(0, 6).map(img => getAbsoluteUrl(img));

  const specsHTML = product.detailedSpecs?.map(section => `
    <div class="spec-section">
      <h3>${section.title}</h3>
      <table>
        ${section.specs.map(spec => `
          <tr>
            <td class="spec-label">${spec.label}</td>
            <td class="spec-value">${spec.value}</td>
          </tr>
        `).join('')}
      </table>
    </div>
  `).join('') || '';

  const keySpecsHTML = product.keySpecs.map(spec => `
    <div class="key-spec">
      <div class="key-spec-value">${spec.value}</div>
      <div class="key-spec-label">${spec.label}</div>
    </div>
  `).join('');

  const featuresHTML = product.features.map(feature => `
    <li>✓ ${feature}</li>
  `).join('');

  const useCasesHTML = product.useCases.map(useCase => `
    <span class="use-case-tag">${useCase}</span>
  `).join('');

  const galleryHTML = galleryImageUrls.length > 0 ? `
    <section class="gallery">
      <h2>Product Gallery</h2>
      <div class="gallery-grid">
        ${galleryImageUrls.map(url => `
          <div class="gallery-item">
            <img src="${url}" alt="${product.name}" />
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${product.name} - Product Brochure | FusionHumanoids</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #1a1a1a;
          line-height: 1.6;
          background: white;
        }
        
        .page {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
        }
        
        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 3px solid #0066ff;
          padding-bottom: 20px;
          margin-bottom: 40px;
        }
        
        .logo {
          font-size: 24px;
          font-weight: 700;
          color: #0066ff;
        }
        
        .logo span {
          color: #1a1a1a;
        }
        
        .manufacturer {
          font-size: 14px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        /* Hero */
        .hero {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .hero-image {
          width: 100%;
          max-width: 500px;
          height: auto;
          margin: 0 auto 30px;
          display: block;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.15);
        }
        
        .product-name {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 15px;
          color: #0066ff;
        }
        
        .tagline {
          font-size: 20px;
          color: #444;
          max-width: 600px;
          margin: 0 auto;
        }
        
        /* Key Specs Grid */
        .key-specs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 50px;
        }
        
        .key-spec {
          text-align: center;
          padding: 25px 15px;
          background: linear-gradient(135deg, #f8f9ff 0%, #fff 100%);
          border: 1px solid #e0e7ff;
          border-radius: 12px;
        }
        
        .key-spec-value {
          font-size: 24px;
          font-weight: 700;
          color: #0066ff;
          margin-bottom: 5px;
        }
        
        .key-spec-label {
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Gallery */
        .gallery {
          margin-bottom: 50px;
          page-break-inside: avoid;
        }
        
        .gallery h2 {
          font-size: 28px;
          margin-bottom: 25px;
          color: #1a1a1a;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }
        
        .gallery-item {
          border-radius: 12px;
          overflow: hidden;
          background: #f8f9ff;
          border: 1px solid #e0e7ff;
        }
        
        .gallery-item img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        
        /* Description */
        .description {
          margin-bottom: 50px;
        }
        
        .description h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #1a1a1a;
        }
        
        .description p {
          color: #444;
          margin-bottom: 15px;
          text-align: justify;
        }
        
        /* Features */
        .features {
          margin-bottom: 50px;
        }
        
        .features h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #1a1a1a;
        }
        
        .features ul {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        
        .features li {
          color: #333;
          padding: 10px 15px;
          background: #f8f9ff;
          border-radius: 8px;
          font-size: 14px;
        }
        
        /* Use Cases */
        .use-cases {
          margin-bottom: 50px;
        }
        
        .use-cases h2 {
          font-size: 28px;
          margin-bottom: 20px;
          color: #1a1a1a;
        }
        
        .use-cases-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        
        .use-case-tag {
          padding: 8px 16px;
          background: #0066ff;
          color: white;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 500;
        }
        
        /* Specifications */
        .specifications {
          margin-bottom: 50px;
        }
        
        .specifications h2 {
          font-size: 28px;
          margin-bottom: 25px;
          color: #1a1a1a;
        }
        
        .spec-section {
          margin-bottom: 30px;
          page-break-inside: avoid;
        }
        
        .spec-section h3 {
          font-size: 18px;
          color: #0066ff;
          margin-bottom: 15px;
          padding-bottom: 8px;
          border-bottom: 2px solid #e0e7ff;
        }
        
        .spec-section table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .spec-section tr {
          border-bottom: 1px solid #eee;
        }
        
        .spec-section td {
          padding: 10px 5px;
          font-size: 13px;
        }
        
        .spec-label {
          color: #666;
          width: 45%;
        }
        
        .spec-value {
          color: #1a1a1a;
          font-weight: 500;
        }
        
        /* Footer */
        .footer {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 3px solid #0066ff;
          text-align: center;
        }
        
        .footer-logo {
          font-size: 20px;
          font-weight: 700;
          color: #0066ff;
          margin-bottom: 10px;
        }
        
        .footer-logo span {
          color: #1a1a1a;
        }
        
        .footer-info {
          font-size: 13px;
          color: #666;
          margin-bottom: 5px;
        }
        
        .footer-contact {
          font-size: 14px;
          color: #0066ff;
          font-weight: 500;
        }
        
        .disclaimer {
          margin-top: 20px;
          font-size: 11px;
          color: #999;
          font-style: italic;
        }
        
        /* Print Styles */
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          .page {
            padding: 20px;
          }
          
          .no-print {
            display: none !important;
          }
          
          .hero-image {
            max-width: 400px;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .gallery-item img {
            height: 120px;
          }
        }
        
        /* Download Button */
        .download-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #0066ff;
          color: white;
          padding: 15px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
        }
        
        .download-bar button {
          background: white;
          color: #0066ff;
          border: none;
          padding: 10px 25px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }
        
        .download-bar button:hover {
          background: #f0f0f0;
        }
        
        .spacer {
          height: 70px;
        }
      </style>
    </head>
    <body>
      <div class="download-bar no-print">
        <span>📄 ${product.name} Product Brochure</span>
        <button onclick="window.print()">⬇️ Download as PDF</button>
      </div>
      
      <div class="spacer no-print"></div>
      
      <div class="page">
        <header class="header">
          <div class="logo">Fusion<span>Humanoids</span></div>
          <div class="manufacturer">${manufacturer?.name || 'Premium Robotics'}</div>
        </header>
        
        <div class="hero">
          ${mainImageUrl ? `<img src="${mainImageUrl}" alt="${product.name}" class="hero-image" />` : ''}
          <h1 class="product-name">${product.name}</h1>
          <p class="tagline">${product.shortDescription}</p>
        </div>
        
        <div class="key-specs">
          ${keySpecsHTML}
        </div>
        
        ${galleryHTML}
        
        <section class="description">
          <h2>Overview</h2>
          ${product.longDescription.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </section>
        
        <section class="features">
          <h2>Key Features</h2>
          <ul>
            ${featuresHTML}
          </ul>
        </section>
        
        <section class="use-cases">
          <h2>Applications</h2>
          <div class="use-cases-grid">
            ${useCasesHTML}
          </div>
        </section>
        
        ${specsHTML ? `
        <section class="specifications">
          <h2>Technical Specifications</h2>
          ${specsHTML}
        </section>
        ` : ''}
        
        <footer class="footer">
          <div class="footer-logo">Fusion<span>Humanoids</span></div>
          <p class="footer-info">Ireland & UK's Premier Robotics Partner</p>
          <p class="footer-info">Official ${manufacturer?.name || ''} Distributor</p>
          <p class="footer-contact">sales@fusionhumanoids.com | +353 44 936 2018</p>
          <p class="footer-info" style="margin-top: 10px;">Dromone, Oldcastle, Co Meath A82E0W4, Ireland</p>
          <p class="disclaimer">
            Specifications subject to change. For the latest information, visit fusionhumanoids.com
          </p>
        </footer>
      </div>
      
      <script>
        // Auto-focus for better UX
        document.title = '${product.name} - Product Brochure | FusionHumanoids';
      </script>
    </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
}
