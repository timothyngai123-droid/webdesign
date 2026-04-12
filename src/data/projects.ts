export type ProjectCategory = 'All' | 'Restaurants' | 'Trades & Services' | 'Services';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  categoryLabel: string;
  description: string;
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 'ember-and-oak',
    name: 'Ember & Oak',
    subtitle: 'Farm-to-Table Restaurant',
    category: 'Restaurants',
    categoryLabel: 'Restaurant Website',
    description:
      'A cinematic dining experience brought online with 3D menu navigation and reservation flow.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    color: '#D97706',
  },
  {
    id: 'keymaster-24',
    name: 'KeyMaster 24',
    subtitle: '24/7 Emergency Locksmith',
    category: 'Trades & Services',
    categoryLabel: 'Trades & Services',
    description:
      'Dark, trustworthy aesthetic with live availability checker and instant quote calculator.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    color: '#2563EB',
  },
  {
    id: 'flowright-plumbing',
    name: 'FloWright Plumbing',
    subtitle: 'Premium Residential Plumbing',
    category: 'Trades & Services',
    categoryLabel: 'Trades & Services',
    description:
      'Clean palette with animated service breakdowns, fixed pricing, and trust stats.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80',
    color: '#0EA5E9',
  },
  {
    id: 'purespace-cleaning',
    name: 'PureSpace Cleaning',
    subtitle: 'Eco-Friendly Commercial Cleaning',
    category: 'Services',
    categoryLabel: 'Services',
    description:
      'Fresh aesthetic with before/after interactive slider and instant booking.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    color: '#10B981',
  },
  {
    id: 'voltedge-electrical',
    name: 'VoltEdge Electrical',
    subtitle: 'Modern Electrical Contractor',
    category: 'Trades & Services',
    categoryLabel: 'Trades & Services',
    description:
      'Bold palette with animated service area map and emergency call-out CTA.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    color: '#EAB308',
  },
];

export const categories: ProjectCategory[] = [
  'All',
  'Restaurants',
  'Trades & Services',
  'Services',
];
