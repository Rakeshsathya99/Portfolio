export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveDemoUrl?: string;
  category?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  expirationDate?: string;
  description: string;
  skills?: string[];
  credentialId?: string;
  verificationUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 1-5
  category: string;
  icon: string;
}