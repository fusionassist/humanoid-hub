import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

export default function Cookies() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Cookies are small text files that are placed on your device when you visit a website. 
                  They are widely used to make websites work more efficiently and provide information 
                  to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground mb-4">FusionHumanoids.com uses cookies for the following purposes:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-muted-foreground border border-border rounded-lg">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="text-left p-4 border-b border-border">Cookie</th>
                        <th className="text-left p-4 border-b border-border">Purpose</th>
                        <th className="text-left p-4 border-b border-border">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-4 border-b border-border">session_id</td>
                        <td className="p-4 border-b border-border">Essential - maintains user session</td>
                        <td className="p-4 border-b border-border">Session</td>
                      </tr>
                      <tr>
                        <td className="p-4 border-b border-border">cookie_consent</td>
                        <td className="p-4 border-b border-border">Stores your cookie preferences</td>
                        <td className="p-4 border-b border-border">1 year</td>
                      </tr>
                      <tr>
                        <td className="p-4">_ga, _gid</td>
                        <td className="p-4">Google Analytics (with consent)</td>
                        <td className="p-4">2 years / 24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in various ways. Most browsers allow you to 
                  refuse or delete cookies. The methods for doing so vary from browser to browser.
                </p>
                <p className="text-muted-foreground">
                  Please note that blocking all cookies may negatively impact your experience on 
                  our website and limit the functionality available to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
                <p className="text-muted-foreground mb-4">
                  When you first visit our website, you will be asked to consent to the use of 
                  cookies. You can change your preferences at any time by clicking the cookie 
                  settings link in the footer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about our use of cookies, please contact us at:
                </p>
                <p className="text-muted-foreground mt-2">
                  Email: privacy@fusionhumanoids.com<br />
                  Address: Dromone, Oldcastle, Co Meath A82E0W4, Ireland
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
