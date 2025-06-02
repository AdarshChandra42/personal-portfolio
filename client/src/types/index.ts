// Common interfaces for the portfolio application

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description?: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ThreeModelProps {
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  isActive?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string[];
  technologies: string[];
} 