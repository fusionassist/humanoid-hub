import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NEWSLETTER_DISMISSED_KEY = 'newsletter_popup_dismissed';
const POPUP_DELAY = 8000; // 8 seconds delay before showing

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(NEWSLETTER_DISMISSED_KEY);
    if (dismissed) return;

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
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Thank you for subscribing! You'll receive the latest robotics news and updates.");
    setIsSubmitting(false);
    setIsOpen(false);
    localStorage.setItem(NEWSLETTER_DISMISSED_KEY, 'subscribed');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 80, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 w-full max-w-sm"
        >
          <div className="relative bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Decorative gradient top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close newsletter popup"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 pt-7">
              {/* Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium mb-1">
                    <Zap className="w-3 h-3" />
                    Stay Updated
                  </div>
                  <h2 className="text-base font-bold leading-tight">Join the Robotics Revolution</h2>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">
                Get the latest updates on humanoid robots and exclusive offers.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-10 bg-secondary/50 border-border focus:border-primary text-sm"
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="sm"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-3">
                By subscribing, you agree to our{' '}
                <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
