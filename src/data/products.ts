import { Product } from '@/types';

export const products: Product[] = [
  // Humanoid Robots
  {
    id: 'unitree-h1',
    name: 'Unitree H1',
    slug: 'unitree-h1',
    manufacturerId: 'unitree',
    category: 'humanoid',
    shortDescription: 'Universal humanoid robot with powerful athletic capabilities and advanced AI.',
    longDescription: `The Unitree H1 represents a breakthrough in humanoid robotics, combining exceptional mobility with advanced artificial intelligence. Standing at 1.8 meters tall, this humanoid robot features 19 degrees of freedom and can walk at speeds up to 3.3 m/s, making it one of the fastest humanoid robots available.

Built for versatility, the H1 excels in research, industrial automation, and service applications. Its modular design allows for easy customization and integration of various sensors and end-effectors. The advanced control system enables smooth, natural movements and stable locomotion across various terrains.`,
    keySpecs: [
      { label: 'Height', value: '1.8m' },
      { label: 'Weight', value: '47kg' },
      { label: 'Max Speed', value: '3.3 m/s' },
      { label: 'Degrees of Freedom', value: '19 DoF' },
      { label: 'Payload', value: '10kg' },
      { label: 'Battery Life', value: '2+ hours' },
    ],
    useCases: [
      'Industrial Automation',
      'Research & Development',
      'Hazardous Environment Operations',
      'Service Robotics',
      'Entertainment & Events',
    ],
    features: [
      'Advanced whole-body control',
      'Real-time obstacle avoidance',
      'Natural language interaction ready',
      'Modular limb design',
      'Remote operation capable',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'H1 Datasheet', url: 'https://www.unitree.com/h1', type: 'datasheet' },
      { title: 'Technical Manual', url: 'https://www.unitree.com/h1', type: 'manual' },
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'unitree-h2',
    name: 'Unitree H2',
    slug: 'unitree-h2',
    manufacturerId: 'unitree',
    category: 'humanoid',
    shortDescription: 'Next-generation humanoid with enhanced dexterity and industrial capabilities.',
    longDescription: `The Unitree H2 builds upon the success of the H1, introducing enhanced manipulation capabilities and greater industrial robustness. This next-generation humanoid features advanced hand dexterity, improved payload capacity, and enhanced durability for demanding applications.

Designed for real-world deployment, the H2 incorporates lessons learned from extensive field testing. Its improved actuators deliver more precise movements, while the enhanced sensor suite provides superior environmental awareness.`,
    keySpecs: [
      { label: 'Height', value: '1.85m' },
      { label: 'Weight', value: '55kg' },
      { label: 'Max Speed', value: '4.0 m/s' },
      { label: 'Degrees of Freedom', value: '23 DoF' },
      { label: 'Payload', value: '15kg' },
      { label: 'Battery Life', value: '3+ hours' },
    ],
    useCases: [
      'Manufacturing Assembly',
      'Warehouse Operations',
      'Construction Support',
      'Healthcare Assistance',
      'Security Patrol',
    ],
    features: [
      'Enhanced hand dexterity',
      'Improved payload handling',
      'Industrial-grade durability',
      'Advanced AI integration',
      'Multi-robot coordination',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'H2 Specifications', url: 'https://www.unitree.com', type: 'datasheet' },
    ],
    availability: 'pre-order',
    featured: true,
  },
  {
    id: 'unitree-g1',
    name: 'Unitree G1',
    slug: 'unitree-g1',
    manufacturerId: 'unitree',
    category: 'humanoid',
    shortDescription: 'Compact humanoid designed for agile movement and AI research applications.',
    longDescription: `The Unitree G1 is a compact humanoid robot optimized for agility and research applications. With its smaller form factor and exceptional mobility, the G1 is ideal for AI research, education, and demonstration purposes.

The G1 features Unitree's latest joint actuator technology, enabling remarkably fluid movements. Its open development platform supports ROS2 and various programming interfaces, making it perfect for academic and commercial R&D.`,
    keySpecs: [
      { label: 'Height', value: '1.27m' },
      { label: 'Weight', value: '35kg' },
      { label: 'Max Speed', value: '2.0 m/s' },
      { label: 'Degrees of Freedom', value: '23 DoF' },
      { label: 'Payload', value: '3kg per arm' },
      { label: 'Battery Life', value: '2 hours' },
    ],
    useCases: [
      'AI Research',
      'Educational Demonstrations',
      'Motion Capture Reference',
      'Human-Robot Interaction Studies',
      'Proof of Concept Development',
    ],
    features: [
      'Compact form factor',
      'Force-controlled joints',
      'ROS2 compatible',
      'Python/C++ SDK',
      'Simulation support',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'G1 Developer Guide', url: 'https://www.unitree.com/g1', type: 'manual' },
      { title: 'SDK Documentation', url: 'https://www.unitree.com/g1', type: 'software' },
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'unitree-r1',
    name: 'Unitree R1',
    slug: 'unitree-r1',
    manufacturerId: 'unitree',
    category: 'humanoid',
    shortDescription: 'Research-focused humanoid platform with advanced sensing capabilities.',
    longDescription: `The Unitree R1 is purpose-built for research institutions and advanced development teams. This platform prioritizes flexibility and customization, allowing researchers to modify and extend capabilities according to their specific requirements.

With comprehensive sensor integration options and an open architecture, the R1 serves as an ideal foundation for cutting-edge robotics research. The platform supports various perception systems, manipulation tools, and AI frameworks.`,
    keySpecs: [
      { label: 'Height', value: '1.65m' },
      { label: 'Weight', value: '42kg' },
      { label: 'Max Speed', value: '2.5 m/s' },
      { label: 'Degrees of Freedom', value: '21 DoF' },
      { label: 'Payload', value: '5kg' },
      { label: 'Battery Life', value: '2.5 hours' },
    ],
    useCases: [
      'Academic Research',
      'Algorithm Development',
      'Perception Studies',
      'Locomotion Research',
      'Collaborative Robotics',
    ],
    features: [
      'Modular sensor mounting',
      'Open-source compatible',
      'High-speed data interfaces',
      'Custom end-effector support',
      'Extensive API access',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'R1 Research Platform Guide', url: 'https://www.unitree.com', type: 'manual' },
    ],
    availability: 'available',
    featured: false,
  },
  // Robot Dogs
  {
    id: 'unitree-go2',
    name: 'Unitree Go2',
    slug: 'unitree-go2',
    manufacturerId: 'unitree',
    category: 'robot-dog',
    shortDescription: 'Advanced quadruped robot with AI capabilities for consumers and professionals.',
    longDescription: `The Unitree Go2 represents the pinnacle of consumer-accessible quadruped robotics. Combining cutting-edge mobility with intuitive AI features, the Go2 is designed for both enthusiasts and professional applications.

Featuring embodied AI capabilities, the Go2 can understand and respond to natural language commands, navigate complex environments autonomously, and perform a wide range of tasks. Its robust construction and water resistance make it suitable for outdoor use.`,
    keySpecs: [
      { label: 'Weight', value: '15kg' },
      { label: 'Max Speed', value: '3.5 m/s' },
      { label: 'Payload', value: '8kg' },
      { label: 'Battery Life', value: '1-2 hours' },
      { label: 'Protection', value: 'IP54' },
      { label: 'Climb Angle', value: '±30°' },
    ],
    useCases: [
      'Security Patrol',
      'Site Inspection',
      'Entertainment',
      'Research & Education',
      'Outdoor Exploration',
    ],
    features: [
      'Embodied AI assistant',
      '4D LiDAR sensing',
      'Voice command recognition',
      'Autonomous navigation',
      'Mobile app control',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'Go2 Product Page', url: 'https://www.unitree.com/go2', type: 'datasheet' },
      { title: 'User Manual', url: 'https://www.unitree.com/go2', type: 'manual' },
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'unitree-b2',
    name: 'Unitree B2',
    slug: 'unitree-b2',
    manufacturerId: 'unitree',
    category: 'robot-dog',
    shortDescription: 'Industrial-grade quadruped for heavy-duty inspection and logistics.',
    longDescription: `The Unitree B2 is an industrial-strength quadruped robot designed for demanding professional environments. With exceptional payload capacity and rugged construction, the B2 excels in inspection, logistics, and security applications.

Built to withstand harsh conditions, the B2 features IP67 water and dust resistance, making it suitable for outdoor and industrial environments. Its powerful actuators enable stable locomotion while carrying heavy payloads.`,
    keySpecs: [
      { label: 'Weight', value: '60kg' },
      { label: 'Max Speed', value: '6 m/s' },
      { label: 'Payload', value: '40kg' },
      { label: 'Battery Life', value: '4-6 hours' },
      { label: 'Protection', value: 'IP67' },
      { label: 'Operating Temp', value: '-20°C to 55°C' },
    ],
    useCases: [
      'Industrial Inspection',
      'Warehouse Logistics',
      'Mining Operations',
      'Power Plant Monitoring',
      'Emergency Response',
    ],
    features: [
      'Heavy payload capacity',
      'All-weather operation',
      'Autonomous charging dock',
      'Fleet management ready',
      'Industrial sensor integration',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'B2 Industrial Specifications', url: 'https://www.unitree.com/b2', type: 'datasheet' },
    ],
    availability: 'available',
    featured: true,
  },
  {
    id: 'unitree-b2w',
    name: 'Unitree B2-W',
    slug: 'unitree-b2w',
    manufacturerId: 'unitree',
    category: 'robot-dog',
    shortDescription: 'Wheeled-leg hybrid quadruped for maximum efficiency and speed.',
    longDescription: `The Unitree B2-W combines the best of legged and wheeled locomotion. This innovative hybrid design allows for high-speed wheeled movement on flat surfaces while retaining the ability to traverse obstacles and stairs using its legs.

This versatility makes the B2-W ideal for large facility inspection, where it can quickly cover distances on smooth floors and navigate complex areas when needed.`,
    keySpecs: [
      { label: 'Weight', value: '70kg' },
      { label: 'Max Speed (Wheels)', value: '20+ m/s' },
      { label: 'Max Speed (Legs)', value: '6 m/s' },
      { label: 'Payload', value: '40kg' },
      { label: 'Battery Life', value: '4+ hours' },
      { label: 'Protection', value: 'IP67' },
    ],
    useCases: [
      'Large Facility Patrol',
      'Warehouse Automation',
      'Airport Operations',
      'Manufacturing Floor',
      'Mixed Terrain Navigation',
    ],
    features: [
      'Hybrid locomotion modes',
      'Ultra-high speed capability',
      'Automatic mode switching',
      'Extended battery life',
      'Advanced path planning',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'B2-W Overview', url: 'https://www.unitree.com/b2', type: 'datasheet' },
    ],
    availability: 'coming-soon',
    featured: false,
  },
  {
    id: 'unitree-go1',
    name: 'Unitree Go1',
    slug: 'unitree-go1',
    manufacturerId: 'unitree',
    category: 'robot-dog',
    shortDescription: 'Entry-level quadruped robot perfect for education and development.',
    longDescription: `The Unitree Go1 is the accessible entry point into quadruped robotics. Designed for education, hobbyists, and developers, the Go1 offers professional-grade capabilities at an approachable price point.

With multiple configuration options ranging from basic to pro specifications, the Go1 scales to meet different needs and budgets while maintaining the quality and performance Unitree is known for.`,
    keySpecs: [
      { label: 'Weight', value: '12kg' },
      { label: 'Max Speed', value: '3.7 m/s' },
      { label: 'Payload', value: '5kg' },
      { label: 'Battery Life', value: '1 hour' },
      { label: 'Protection', value: 'IP54' },
      { label: 'Sensors', value: 'Camera, IMU' },
    ],
    useCases: [
      'Educational Robotics',
      'Hobby Development',
      'Research Prototyping',
      'Demonstrations',
      'Companion Robot',
    ],
    features: [
      'Affordable pricing',
      'Multiple configurations',
      'App control',
      'SDK available',
      'Active community',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'Go1 Product Details', url: 'https://www.unitree.com/go1', type: 'datasheet' },
    ],
    availability: 'available',
    featured: false,
  },
  {
    id: 'unitree-aliengo',
    name: 'Unitree AlienGo',
    slug: 'unitree-aliengo',
    manufacturerId: 'unitree',
    category: 'robot-dog',
    shortDescription: 'Professional-grade research quadruped with advanced capabilities.',
    longDescription: `The Unitree AlienGo is a professional research platform designed for advanced quadruped robotics studies. With powerful actuators and comprehensive sensor options, AlienGo serves researchers and developers working on cutting-edge locomotion and perception algorithms.

The platform's open architecture and extensive documentation make it a favorite among robotics researchers worldwide.`,
    keySpecs: [
      { label: 'Weight', value: '20kg' },
      { label: 'Max Speed', value: '3 m/s' },
      { label: 'Payload', value: '10kg' },
      { label: 'Battery Life', value: '1.5 hours' },
      { label: 'Degrees of Freedom', value: '12 DoF' },
      { label: 'Torque', value: '40Nm peak' },
    ],
    useCases: [
      'Academic Research',
      'Locomotion Studies',
      'Perception Research',
      'Algorithm Development',
      'Commercial Prototyping',
    ],
    features: [
      'Research-grade platform',
      'High-torque actuators',
      'ROS support',
      'Gazebo simulation',
      'Extensive documentation',
    ],
    media: [],
    thumbnail: '/placeholder.svg',
    resourceLinks: [
      { title: 'AlienGo Research Guide', url: 'https://www.unitree.com/aliengo', type: 'manual' },
    ],
    availability: 'available',
    featured: false,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByManufacturer = (manufacturerId: string): Product[] => {
  return products.filter((p) => p.manufacturerId === manufacturerId);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};
