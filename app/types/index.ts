// SOLID: Interface Segregation Principle - Separate interfaces for different concerns

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  quote: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  status: 'completed' | 'planning';
  location?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  salutation: 'Herr' | 'Frau';
  interest: 'Immobilien' | 'Architektur' | 'Innenarchitektur';
  name: string;
  email: string;
  message: string;
  privacyAccepted: boolean;
  captcha: string;
}
