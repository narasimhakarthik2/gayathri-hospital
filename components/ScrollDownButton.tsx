'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface ScrollDownButtonProps {
  targetId?: string
  className?: string
  text?: string
  theme?: 'light' | 'dark'
}

const ScrollDownButton = ({ 
  targetId = 'services', 
  className = '',
  text = 'Scroll to explore',
  theme = 'dark'
}: ScrollDownButtonProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <motion.div
      className={`flex flex-col items-center cursor-pointer group ${className}`}
      onClick={scrollToSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Text */}
      <motion.span 
        className={`text-sm font-medium mb-3 transition-colors duration-300 ${
          theme === 'dark' 
            ? 'text-white/70 group-hover:text-white' 
            : 'text-gray-600 group-hover:text-gray-800'
        }`}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {text}
      </motion.span>

      {/* Scroll Icon Container */}
      <motion.div 
        className="relative w-12 h-12 flex items-center justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Outer Ring */}
        <motion.div 
          className={`absolute inset-0 border-2 rounded-full ${
            theme === 'dark' ? 'border-white/30' : 'border-gray-400/30'
          }`}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Inner Ring */}
        <motion.div 
          className={`absolute inset-2 border-2 rounded-full ${
            theme === 'dark' ? 'border-white/50' : 'border-gray-400/50'
          }`}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        {/* Chevron Icon */}
        <motion.div
          className="relative z-10"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown 
            className={`w-6 h-6 transition-colors duration-300 ${
              theme === 'dark' 
                ? 'text-white group-hover:text-white/90' 
                : 'text-gray-600 group-hover:text-gray-800'
            }`}
            strokeWidth={2}
          />
        </motion.div>

        {/* Pulse Effect */}
        <motion.div 
          className={`absolute inset-0 rounded-full ${
            theme === 'dark' ? 'bg-white/10' : 'bg-gray-400/10'
          }`}
          animate={{ 
            scale: [0, 1.5, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

    </motion.div>
  )
}

export default ScrollDownButton 