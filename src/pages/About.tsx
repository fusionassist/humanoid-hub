import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Users, Shield, Globe, ArrowRight, Building2, Award, Handshake } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Target,
    title: 'Innovation First',
    description: 'We partner with the world\'s most innovative robotics companies to bring cutting-edge technology to Ireland.',
  },
  {
    icon: Users,
    title: 'Customer Success',
    description: 'Your success is our priority. We provide comprehensive support from consultation through deployment.',
  },
  {
    icon: Shield,
    title: 'Trust & Compliance',
    description: 'All products meet EU safety standards and Irish regulatory requirements, backed by full warranties.',
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    description: 'Based in Dublin, we understand the Irish market and provide localized support and service.',
  },
];

const milestones = [
  { year: '2024', event: 'Founded as part of Fusion Technologies' },
  { year: '2024', event: 'Official Unitree Robotics partnership for Ireland' },
  { year: '2025', event: 'Expanded product range and service capabilities' },
  { year: 'Future', event: 'UK and EU market expansion planned' },
];

export default function About() {
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
              About FusionHumanoids.com
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ireland's premier destination for advanced robotics technology. 
              We're on a mission to bring the future of automation to Irish businesses and institutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At FusionHumanoids.com, we believe that advanced robotics should be accessible to every 
                organization in Ireland. Whether you're a research institution exploring the frontiers 
                of AI, a manufacturer looking to automate operations, or an enterprise seeking innovative 
                solutions, we're here to help.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                As part of Fusion Technologies, we combine deep technical expertise with strong 
                manufacturer relationships to deliver world-class robotic solutions tailored to the 
                Irish market.
              </p>
              <Link to="/contact">
                <Button variant="hero">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Building2, label: 'Part of Fusion Technologies' },
                { icon: Award, label: 'Official Unitree Partner' },
                { icon: Handshake, label: 'Irish Business Focus' },
                { icon: Shield, label: 'EU Compliant Products' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl bg-card border border-border text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at FusionHumanoids.com.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fusion Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20">
              <h2 className="text-3xl font-bold mb-6">Part of Fusion Technologies</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                FusionHumanoids.com operates as a division of Fusion Technologies (FusionTechnologies.ie), 
                a leading Irish technology company specializing in advanced solutions for businesses. 
                This partnership enables us to leverage extensive technical expertise, established 
                supplier relationships, and robust support infrastructure.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fusion Technologies provides the backbone for our operations, including logistics, 
                customer service, technical support, and compliance management. This allows FusionHumanoids.com 
                to focus on what we do best: bringing world-class robotics to Ireland.
              </p>
              <a 
                href="https://fusiontechnologies.ie" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  Visit Fusion Technologies
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-primary">{milestone.year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <p className="font-medium">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8">
              Whether you're exploring robotics for the first time or ready to deploy, 
              our team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg">
                  Browse Products
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
