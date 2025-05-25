export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  image: string;
}

export interface EthicalPractice {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}