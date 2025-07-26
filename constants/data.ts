import React from 'react'
import { 
  Heart, 
  Stethoscope, 
  Users, 
  Award,
  Shield,
  Activity
} from 'lucide-react'

// Services data
export const servicesData = [
  {
    icon: React.createElement(Heart, { className: "w-8 h-8" }),
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment facilities",
    features: ["ECG & Echo", "Angiography", "Cardiac Surgery"]
  },
  {
    icon: React.createElement(Stethoscope, { className: "w-8 h-8" }),
    title: "General Medicine",
    description: "Complete medical care for all age groups with personalized treatment plans",
    features: ["Health Checkups", "Chronic Disease Management", "Preventive Care"]
  },
  {
    icon: React.createElement(Activity, { className: "w-8 h-8" }),
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response teams",
    features: ["Trauma Care", "ICU", "Ambulance Service"]
  },
  {
    icon: React.createElement(Users, { className: "w-8 h-8" }),
    title: "Pediatrics",
    description: "Specialized care for children with child-friendly environment",
    features: ["Vaccination", "Growth Monitoring", "Child Psychology"]
  },
  {
    icon: React.createElement(Shield, { className: "w-8 h-8" }),
    title: "Orthopedics",
    description: "Advanced bone and joint care with modern surgical techniques",
    features: ["Joint Replacement", "Sports Medicine", "Rehabilitation"]
  },
  {
    icon: React.createElement(Award, { className: "w-8 h-8" }),
    title: "Diagnostics",
    description: "State-of-the-art diagnostic facilities for accurate results",
    features: ["MRI & CT Scan", "Laboratory Tests", "X-Ray Services"]
  }
]

// Doctors data
export const doctorsData = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    rating: 4.9
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Orthopedic Surgeon",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    rating: 4.8
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1594824475545-9d0c7c495d57?w=400&h=400&fit=crop&crop=face",
    rating: 4.9
  },
  {
    name: "Dr. David Kim",
    specialty: "Neurologist",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 4.7
  }
]

// Testimonials data
export const testimonialsData = [
  {
    name: "Maria Garcia",
    text: "The care I received at Gayathri Hospital was exceptional. The doctors and staff were professional and caring throughout my treatment.",
    rating: 5
  },
  {
    name: "John Smith",
    text: "Excellent medical facilities and very knowledgeable doctors. I felt safe and well-cared for during my entire stay.",
    rating: 5
  },
  {
    name: "Lisa Wang",
    text: "The pediatric department is amazing. My children always feel comfortable and the doctors are great with kids.",
    rating: 5
  }
]

// Hospital stats
export const hospitalStats = [
  { number: "50+", label: "Expert Doctors" },
  { number: "1000+", label: "Happy Patients" },
  { number: "24/7", label: "Emergency Care" },
  { number: "15+", label: "Years Experience" }
]

// Contact information
export const contactInfo = {
  phone: "+1 (555) 123-4567",
  emergency: "108",
  email: "info@gayathrihospital.com",
  appointmentsEmail: "appointments@gayathrihospital.com",
  address: {
    street: "123 Healthcare Avenue",
    city: "Medical District, City, State 12345"
  },
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 8:00 PM",
    saturday: "Saturday: 9:00 AM - 6:00 PM",
    emergency: "Emergency: 24/7"
  }
} 