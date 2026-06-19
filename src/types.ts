export type CategoryType = 'longform' | 'shorts';

export interface PortfolioItem {
  id: string;
  title: string;
  category: CategoryType;
  imageUrl: string;
  videoUrl?: string; // YouTube/Vimeo embed URL or high-quality mock video loop
  tags: string[];
  client: string;
  stats?: {
    label: string;
    value: string;
  };
  description: string;
  duration?: string;
  softwareUsed: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  content: string;
  statsHighlight?: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}
