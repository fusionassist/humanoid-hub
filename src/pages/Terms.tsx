import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

export default function Terms() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Humanoids.ie ("the Site"), you accept and agree to be bound 
                  by these Terms of Service. If you do not agree to these terms, please do not use our Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Products and Services</h2>
                <p className="text-muted-foreground mb-4">
                  Humanoids.ie is operated by Fusion Technologies and serves as an authorized reseller 
                  of robotics products in Ireland. All products are subject to availability and may 
                  require lead times for delivery.
                </p>
                <p className="text-muted-foreground">
                  Prices displayed are exclusive of VAT (23% for Ireland) unless otherwise stated. 
                  Final pricing will be confirmed in formal quotes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Quote Requests</h2>
                <p className="text-muted-foreground mb-4">
                  Quote requests submitted through our website are not binding offers. Formal quotes 
                  will be provided separately and are valid for the period stated therein. All sales 
                  are subject to our standard terms and conditions of sale.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground mb-4">
                  All content on this Site, including text, graphics, logos, and images, is the property 
                  of Humanoids.ie/Fusion Technologies or its content suppliers. Product images and 
                  specifications are provided by manufacturers and used with permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  To the fullest extent permitted by law, Humanoids.ie and Fusion Technologies shall 
                  not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages arising from your use of the Site or our products.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
                <p className="text-muted-foreground mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of Ireland. 
                  Any disputes arising shall be subject to the exclusive jurisdiction of the Irish courts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, please contact us at:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: legal@humanoids.ie<br />
                  Address: Dublin, Ireland
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
