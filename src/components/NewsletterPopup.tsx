import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NEWSLETTER_DISMISSED_KEY = 'newsletter_popup_dismissed';
const POPUP_DELAY = 2000; // 2 seconds delay before showing

export function NewsletterPopup() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already dismissed or subscribed
    const dismissed = localStorage.getItem(NEWSLETTER_DISMISSED_KEY);
    if (dismissed) return;

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(NEWSLETTER_DISMISSED_KEY, 'true');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call - in production, this would connect to your email service
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Thank you for subscribing! You\'ll receive the latest robotics news and updates.');
    setIsSubmitting(false);
    setIsOpen(false);
    localStorage.setItem(NEWSLETTER_DISMISSED_KEY, 'subscribed');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close newsletter popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 pt-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    <Zap className="w-3 h-3" />
                    Stay Updated
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    Join the Robotics Revolution
                  </h2>
                  <p className="text-muted-foreground">
                    Subscribe to our newsletter for the latest updates on humanoid robots, 
                    exclusive offers, and industry insights.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                  </Button>
                </form>

                {/* Privacy note */}
                <p className="text-xs text-muted-foreground text-center mt-4">
                  By subscribing, you agree to our{' '}
                  <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                  . Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
