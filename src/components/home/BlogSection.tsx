import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogCard } from '@/components/blog/BlogCard';
import { getFeaturedPosts, getAllPosts } from '@/data/blog';

export function BlogSection() {
  // Get featured posts first, then fill with latest if needed
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();
  
  // Show 3 posts: prioritize featured, fill with latest
  const displayPosts = [
    ...featuredPosts.slice(0, 3),
    ...allPosts.filter(p => !featuredPosts.includes(p)),
  ].slice(0, 3);

  if (displayPosts.length === 0) return null;

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest Insights
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Stay updated with the latest news, tutorials, and insights from the world of robotics.
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
