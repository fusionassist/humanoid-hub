import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

export default function Privacy() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground mb-4">
                  Humanoids.ie, operated by Fusion Technologies ("we", "us", or "our"), is committed 
                  to protecting your privacy. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We may collect information about you in various ways:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Personal Data: Name, email address, phone number, company name</li>
                  <li>Usage Data: Pages visited, time spent, browser type, device information</li>
                  <li>Communications: Records of correspondence if you contact us</li>
                  <li>Form Submissions: Information you provide through quote requests and contact forms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Process quote requests and sales inquiries</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
                <p className="text-muted-foreground mb-4">
                  Your data is stored securely using industry-standard encryption and security measures. 
                  We retain your personal data only for as long as necessary to fulfill the purposes 
                  for which it was collected.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Your Rights (GDPR)</h2>
                <p className="text-muted-foreground mb-4">Under GDPR, you have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request erasure of your data</li>
                  <li>Restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  For any privacy-related questions or to exercise your rights, please contact us at:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: privacy@humanoids.ie<br />
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
