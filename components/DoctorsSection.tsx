'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'
import { StaggeredGrid, FadeInOnScroll, ScaleOnScroll } from './ScrollAnimations'

const DoctorsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const doctors = [
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

  return (
    <section id="doctors" ref={ref} className="section-padding">
      <div className="container-custom">
        <FadeInOnScroll className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced and qualified medical professionals is dedicated to providing the best care
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <ScaleOnScroll key={index}>
              <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-primary-200 transition-all duration-500">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm mb-4">{doctor.experience} experience</p>
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700 ml-2">{doctor.rating}</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Book Appointment
                  </button>
                </div>
                
                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-500"></div>
              </div>
            </ScaleOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DoctorsSection 