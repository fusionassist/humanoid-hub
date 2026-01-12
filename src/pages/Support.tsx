import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wrench, GraduationCap, Phone, Package, Shield, Clock, ArrowRight, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Shield,
    title: 'Warranty Support',
    description: 'Full manufacturer warranty coverage on all products sold. We handle warranty claims directly with manufacturers on your behalf.',
    features: ['Standard manufacturer warranty', 'Extended warranty options', 'Direct claim processing', 'Replacement units available'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Keep your robots operating at peak performance with our professional maintenance services and expert repair capabilities.',
    features: ['Scheduled maintenance programs', 'On-site and remote diagnostics', 'Component replacement', 'Software updates'],
  },
  {
    icon: GraduationCap,
    title: 'Training & Integration',
    description: 'Comprehensive training programs to ensure your team can operate and maintain your robotic systems effectively.',
    features: ['Operator training', 'Technical certification', 'Custom integration support', 'Documentation and guides'],
  },
  {
    icon: Package,
    title: 'Spare Parts',
    description: 'Genuine manufacturer spare parts with fast delivery across Ireland to minimize downtime.',
    features: ['Genuine OEM parts', 'Fast delivery nationwide', 'Parts inventory management', 'Emergency parts service'],
  },
];

const supportLevels = [
  {
    name: 'Standard Support',
    description: 'Included with all purchases',
    features: [
      'Email support (business hours)',
      'Online documentation access',
      'Software updates',
      'Standard warranty coverage',
    ],
  },
  {
    name: 'Premium Support',
    description: 'For mission-critical deployments',
    features: [
      'Priority phone support',
      '4-hour response time',
      'Dedicated account manager',
      'On-site support available',
      'Extended warranty',
      'Preventive maintenance',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise Support',
    description: 'Customized for large deployments',
    features: [
      '24/7 support line',
      '2-hour response time',
      'On-site engineers',
      'Custom SLA',
      'Training programs',
      'Fleet management',
    ],
  },
];

export default function Support() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Support & Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive support to keep your robotic systems running at peak performance. 
              From warranty coverage to training, we're here for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Support Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the level of support that matches your operational needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl border ${
                  level.highlighted 
                    ? 'bg-gradient-to-br from-primary/10 to-accent/5 border-primary/30' 
                    : 'bg-secondary/30 border-border'
                }`}
              >
                {level.highlighted && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                    Recommended
                  </span>
                )}
                <h3 className="text-xl font-semibold mb-2">{level.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{level.description}</p>
                <ul className="space-y-3">
                  {level.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Need Support?</h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Our support team is ready to help. Contact us for warranty claims, technical 
                assistance, or to discuss a support package for your organization.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Contact Support
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <a href="tel:+35312345678">
                  <Button variant="outline" size="lg">
                    <Phone className="w-4 h-4" />
                    +353 1 234 5678
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Placeholder */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Clock className="w-12 h-12 mx-auto mb-6 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-8">
              FAQ section coming soon. In the meantime, please contact our support team 
              with any questions about our services.
            </p>
            <Link to="/contact">
              <Button variant="outline">
                Ask a Question
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
