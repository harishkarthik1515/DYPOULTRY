import { EthicalPractice, Testimonial, TimelineEvent } from '../types';

export const ethicalPractices: EthicalPractice[] = [
  {
    id: 1,
    title: 'Cage-Free',
    description: 'Our chickens roam freely with access to open pastures and natural environments.',
    icon: 'bird',
  },
  {
    id: 2,
    title: 'Organic Feed',
    description: 'We use only certified organic, non-GMO feed without antibiotics or growth hormones.',
    icon: 'wheat',
  },
  {
    id: 3,
    title: 'Family-Owned',
    description: 'Our farm has been family-owned for generations, preserving traditional farming methods.',
    icon: 'home',
  },
  {
    id: 4,
    title: 'Low Carbon Footprint',
    description: 'Sustainable practices reduce our environmental impact and promote biodiversity.',
    icon: 'leaf',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Local Chef',
    quote: 'DY Poultry Farms provides the highest quality, most flavorful poultry I\'ve ever used in my restaurant. My customers can taste the difference.',
    image: 'https://images.pexels.com/photos/3771106/pexels-photo-3771106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'James Thompson',
    location: 'Loyal Customer',
    quote: 'Once you try ethically raised chicken from DY Farms, you can never go back to store-bought. The quality and taste are incomparable.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Nutritionist',
    quote: 'I recommend DY Poultry Farms to all my clients who care about where their food comes from. Truly sustainable and nutritious poultry.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: '1982',
    title: 'The Beginning',
    description: 'Daniel Young founded DY Poultry Farms with just 50 chickens and a vision for ethical farming.',
  },
  {
    id: 2,
    year: '1998',
    title: 'Organic Certification',
    description: 'We received our first organic certification and expanded our practices to focus on sustainability.',
  },
  {
    id: 3,
    year: '2008',
    title: 'Farm-to-Table Program',
    description: 'Launched our farm-to-table program, connecting directly with local restaurants and markets.',
  },
  {
    id: 4,
    year: '2020',
    title: 'Sustainable Innovation',
    description: 'Implemented solar power and rainwater harvesting systems to further reduce our environmental impact.',
  },
];

export const farmImages = [
  'https://i.ibb.co/hFgHdvCS/Whats-App-Image-2025-04-03-at-5-47-19-PM.jpg',
  'https://i.ibb.co/99rc7Vzy/Whats-App-Image-2025-04-03-at-5-49-41-PM.jpg',
  'https://i.ibb.co/LXT5cGbS/Whats-App-Image-2025-04-03-at-5-49-46-PM-2.jpg',
  'https://i.ibb.co/Ng95zJWM/Whats-App-Image-2025-04-03-at-5-49-48-PM.jpg',
];