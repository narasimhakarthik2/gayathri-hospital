'use client'

import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Gayathri Hospital</h3>
                <p className="text-xs text-gray-400">Excellence in Healthcare</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Providing world-class healthcare services with compassion and excellence since 2008.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#doctors" className="text-gray-400 hover:text-white transition-colors">Doctors</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cardiology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Orthopedics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pediatrics</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Emergency Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Diagnostics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Emergency Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-400">Emergency: <span className="text-white font-semibold">108</span></p>
              <p className="text-gray-400">Ambulance: <span className="text-white font-semibold">+1 (555) 123-4567</span></p>
              <p className="text-gray-400">24/7 Helpline: <span className="text-white font-semibold">+1 (555) 987-6543</span></p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Gayathri Hospital. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 