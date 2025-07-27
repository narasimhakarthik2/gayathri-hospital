import React from 'react'
import { motion } from 'framer-motion'
import ScrollDownButton from './ScrollDownButton'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-300 via-primary-400 to-primary-500 opacity-95"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
            Your Health, Our Priority
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience world-class healthcare with state-of-the-art facilities and compassionate medical professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4">
              Book Appointment
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Our Services
            </button>
          </div>
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
            <div className="text-sm md:text-base">Expert Doctors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
            <div className="text-sm md:text-base">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm md:text-base">Emergency Care</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
            <div className="text-sm md:text-base">Years Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollDownButton 
          targetId="services"
          text="Discover Our Services"
        />
      </div>
    </section>
  )
}

export default HeroSection