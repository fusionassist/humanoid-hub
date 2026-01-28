import { BlogPost, BlogCategory } from '@/types';
import heroHumanoid from '@/assets/hero-humanoid.jpg';
import unitreeG1 from '@/assets/products/unitree-g1.jpg';
import unitreeGo2 from '@/assets/products/unitree-go2.jpg';
import unitreeH1 from '@/assets/products/unitree-h1.jpg';

export const blogCategories: { id: BlogCategory; label: string; description: string }[] = [
  { id: 'news', label: 'News', description: 'Latest updates from the robotics industry' },
  { id: 'technology', label: 'Technology', description: 'Deep dives into robotics technology' },
  { id: 'industry', label: 'Industry', description: 'Applications across various sectors' },
  { id: 'tutorials', label: 'Tutorials', description: 'How-to guides and best practices' },
  { id: 'case-studies', label: 'Case Studies', description: 'Real-world success stories' },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'rise-of-humanoid-robots-in-ireland',
    title: 'The Rise of Humanoid Robots in Ireland: What Businesses Need to Know',
    excerpt: 'Discover how Irish businesses are embracing humanoid robotics to transform their operations, from manufacturing to customer service.',
    content: `
## The Humanoid Revolution

Ireland is experiencing a significant shift in how businesses approach automation. Humanoid robots, once confined to science fiction, are now becoming a practical reality for Irish enterprises.

### Why Humanoid Robots?

Unlike traditional industrial robots designed for specific tasks, humanoid robots offer:

- **Versatility**: They can navigate human environments without modification
- **Intuitive Interaction**: Natural communication with human workers
- **Adaptability**: Capable of learning new tasks without reprogramming

### Industries Leading the Charge

**Manufacturing**: Irish manufacturing plants are deploying humanoid robots for quality inspection and assembly tasks that require human-like dexterity.

**Healthcare**: Hospitals and care facilities are exploring humanoid assistants for patient interaction and logistics support.

**Hospitality**: Hotels and restaurants are testing humanoid concierges and service staff.

### Regulatory Landscape

Ireland's approach to robotics regulation is evolving. The EU AI Act and local workplace safety guidelines are shaping how businesses can deploy these systems.

### Getting Started

For businesses considering humanoid robots, we recommend:

1. **Assessment**: Evaluate your current workflows for automation opportunities
2. **Pilot Programs**: Start with a controlled deployment to learn and adapt
3. **Training**: Invest in staff training for human-robot collaboration
4. **Partnership**: Work with experienced distributors like Fusion Humanoids

Contact our team for a personalized consultation on how humanoid robotics can benefit your organization.
    `,
    coverImage: heroHumanoid,
    author: {
      name: 'Fusion Humanoids Team',
      role: 'Technical Writers',
    },
    publishedAt: '2025-01-15',
    readingTime: 5,
    category: 'industry',
    tags: ['humanoid robots', 'Ireland', 'business automation', 'industry 4.0'],
    featured: true,
    relatedProductSlugs: ['unitree-g1', 'unitree-h1'],
  },
  {
    id: '2',
    slug: 'unitree-g1-deep-dive',
    title: 'Unitree G1: A Deep Dive into the Most Affordable Humanoid Robot',
    excerpt: "An in-depth look at the Unitree G1's specifications, capabilities, and why it's revolutionizing the humanoid robotics market.",
    content: `
## Introducing the Unitree G1

The Unitree G1 represents a paradigm shift in humanoid robotics accessibility. At a fraction of the cost of competitors, it delivers impressive capabilities that make humanoid robots practical for research, education, and commercial applications.

### Technical Specifications

**Physical Dimensions**
- Height: 127cm (50 inches)
- Weight: 35kg
- 23 Degrees of Freedom

**Performance**
- Walking Speed: Up to 2 m/s
- Payload Capacity: 3kg per arm
- Battery Life: 2+ hours continuous operation

### Key Features

#### Advanced Locomotion
The G1 utilizes Unitree's proven locomotion algorithms, refined through years of quadruped development. It can:
- Walk on various terrains
- Climb stairs
- Recover from pushes and disturbances

#### Dexterous Manipulation
Optional end effectors enable:
- Object grasping and manipulation
- Tool usage
- Gesture-based communication

#### AI Integration
Built-in support for:
- Computer vision
- Natural language processing
- Custom AI model deployment

### Use Cases

**Research & Education**
Universities and research institutions are using the G1 for:
- Human-robot interaction studies
- AI and machine learning experiments
- Robotics curriculum development

**Commercial Applications**
Early adopters are deploying G1 for:
- Reception and greeting services
- Warehouse assistance
- Entertainment and events

### Conclusion

The Unitree G1 democratizes access to humanoid robotics, making it possible for organizations of all sizes to explore this transformative technology.
    `,
    coverImage: unitreeG1,
    author: {
      name: 'Fusion Humanoids Team',
      role: 'Technical Writers',
    },
    publishedAt: '2025-01-10',
    readingTime: 7,
    category: 'technology',
    tags: ['Unitree G1', 'humanoid robot', 'specifications', 'robotics'],
    featured: true,
    relatedProductSlugs: ['unitree-g1'],
  },
  {
    id: '3',
    slug: 'robot-dogs-industrial-inspection',
    title: 'How Robot Dogs Are Transforming Industrial Inspection',
    excerpt: 'Learn how quadruped robots like the Unitree Go2 and B2 are revolutionizing safety inspections in hazardous environments.',
    content: `
## The Future of Industrial Inspection

Traditional industrial inspections often put human workers in dangerous situations. Robot dogs are changing this paradigm by providing a safe, efficient, and comprehensive alternative.

### Why Quadruped Robots?

**Terrain Adaptability**
Unlike wheeled or tracked robots, quadrupeds can:
- Navigate stairs and ladders
- Traverse uneven surfaces
- Step over obstacles

**Stability**
Four-legged locomotion provides:
- Superior balance on slippery surfaces
- Recovery from unexpected disturbances
- Stable platform for sensors and cameras

### Industrial Applications

#### Oil & Gas
- Pipeline inspection in remote areas
- Facility monitoring in hazardous zones
- Leak detection with specialized sensors

#### Manufacturing
- Quality control patrols
- Equipment monitoring
- Safety compliance verification

#### Construction
- Site surveying and mapping
- Progress documentation
- Safety hazard identification

### The Unitree Advantage

**Unitree Go2**: Perfect for indoor inspections and lighter-duty applications
- Compact and agile
- Extended battery life
- Easy deployment

**Unitree B2**: Built for demanding industrial environments
- IP68 rating for dust and water resistance
- Payload capacity for heavy sensors
- Rugged construction

### ROI Considerations

Investing in robot dog inspection solutions typically delivers:
- 40-60% reduction in inspection time
- Significant improvement in worker safety
- More consistent and detailed data collection
- Lower long-term operational costs

### Getting Started

Fusion Humanoids provides comprehensive support for industrial inspection deployments, including site assessment, training, and ongoing maintenance.
    `,
    coverImage: unitreeGo2,
    author: {
      name: 'Fusion Humanoids Team',
      role: 'Technical Writers',
    },
    publishedAt: '2025-01-05',
    readingTime: 6,
    category: 'case-studies',
    tags: ['robot dogs', 'industrial inspection', 'Unitree Go2', 'Unitree B2', 'safety'],
    featured: false,
    relatedProductSlugs: ['unitree-go2', 'unitree-b2'],
  },
  {
    id: '4',
    slug: 'future-of-robotics-2025',
    title: 'Robotics Trends to Watch in 2025',
    excerpt: 'From AI integration to sustainable manufacturing, explore the key trends shaping the robotics industry this year.',
    content: `
## Robotics in 2025: What to Expect

The robotics industry continues to evolve at a rapid pace. Here are the key trends we're watching this year.

### 1. AI-First Robotics

**Large Language Models (LLMs)** are transforming how robots understand and respond to commands. Expect to see:
- Natural language task instructions
- Improved contextual understanding
- More intuitive human-robot collaboration

### 2. Humanoid Robot Commercialization

2025 marks a turning point for humanoid robots entering mainstream commercial use:
- More affordable platforms (like Unitree G1)
- Proven use cases in hospitality and retail
- Improved reliability and uptime

### 3. Edge AI Processing

On-device AI processing is enabling:
- Faster response times
- Reduced cloud dependency
- Enhanced privacy and security

### 4. Sustainable Robotics

Environmental considerations are driving:
- Energy-efficient designs
- Recyclable materials
- Longer product lifecycles

### 5. Collaborative Robots (Cobots) Evolution

The line between industrial and collaborative robots continues to blur:
- Higher payloads with safety features
- More flexible deployment options
- Integration with humanoid platforms

### Ireland's Position

Ireland is well-positioned to benefit from these trends:
- Strong tech sector and talent pool
- Progressive regulatory environment
- Growing ecosystem of robotics companies

### Preparing for the Future

To stay ahead, organizations should:
- Invest in workforce training
- Pilot emerging technologies
- Partner with experienced robotics providers

Fusion Humanoids is committed to helping Irish businesses navigate these exciting developments.
    `,
    coverImage: unitreeH1,
    author: {
      name: 'Fusion Humanoids Team',
      role: 'Technical Writers',
    },
    publishedAt: '2024-12-20',
    readingTime: 5,
    category: 'news',
    tags: ['trends', '2025', 'AI', 'humanoid robots', 'industry'],
    featured: true,
    relatedProductSlugs: ['unitree-g1', 'unitree-h1', 'unitree-h2'],
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getRelatedPosts(post: BlogPost, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(p => p.id !== post.id)
    .filter(p => p.category === post.category || p.tags.some(t => post.tags.includes(t)))
    .slice(0, limit);
}
