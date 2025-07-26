// Service type definition
export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

// Doctor type definition
export interface Doctor {
  name: string;
  specialty: string;
  experience: string;
  image: string;
  rating: number;
}

// Testimonial type definition
export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

// Contact information type
export interface ContactInfo {
  type: 'phone' | 'email' | 'address' | 'hours';
  title: string;
  details: string[];
  icon: React.ReactNode;
} 