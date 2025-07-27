'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Heart, 
  Stethoscope, 
  Users, 
  Award,
  CheckCircle,
  Shield,
  Activity
} from 'lucide-react'
import { StaggeredGrid, FadeInOnScroll, ScaleOnScroll } from './ScrollAnimations'
import ScrollDownButton from './ScrollDownButton'

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiology",
      description: "Comprehensive heart care with advanced diagnostic and treatment facilities",
      features: ["ECG & Echo", "Angiography", "Cardiac Surgery"]
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Medicine",
      description: "Complete medical care for all age groups with personalized treatment plans",
      features: ["Health Checkups", "Chronic Disease Management", "Preventive Care"]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response teams",
      features: ["Trauma Care", "ICU", "Ambulance Service"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Pediatrics",
      description: "Specialized care for children with child-friendly environment",
      features: ["Vaccination", "Growth Monitoring", "Child Psychology"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Orthopedics",
      description: "Advanced bone and joint care with modern surgical techniques",
      features: ["Joint Replacement", "Sports Medicine", "Rehabilitation"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Diagnostics",
      description: "State-of-the-art diagnostic facilities for accurate results",
      features: ["MRI & CT Scan", "Laboratory Tests", "X-Ray Services"]
    }
  ]

  return (
    <section id="services" ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <FadeInOnScroll className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services with the latest medical technology and experienced professionals
          </p>
        </FadeInOnScroll>

        <StaggeredGrid staggerDelay={0.15}>
          {services.map((service, index) => (
            <ScaleOnScroll key={index}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-300 to-primary-400 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-primary-300 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-500"></div>
              </div>
            </ScaleOnScroll>
          ))}
        </StaggeredGrid>
      </div>

      {/* Scroll Down Button */}
      <div className="flex justify-center mt-16">
        <ScrollDownButton 
          targetId="doctors"
          text="Meet Our Doctors"
          theme="light"
        />
      </div>
    </section>
  )
}

export default ServicesSection 