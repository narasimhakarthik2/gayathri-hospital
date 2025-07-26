'use client'

import React from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(true)
  const [lastScrollY, setLastScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header if at the top
      if (currentScrollY <= 50) {
        setIsVisible(true)
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
        
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false)
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true)
        }
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200/50' 
        : 'bg-gradient-to-r from-[#561416] via-[#6d1a1f] to-[#561416]'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className={`logo-container w-16 h-16 flex items-center justify-center rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-[#561416] shadow-lg' 
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}>
              <img 
                src="/logo.png" 
                alt="Gayathri Hospital Logo" 
                className="w-12 h-12 object-contain"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const nextSibling = target.nextElementSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="hidden w-8 h-8 items-center justify-center text-white font-bold text-xs">
                GH
              </div>
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Gayathri Hospital
              </h1>
              <p className={`text-xs transition-all duration-300 ${
                isScrolled ? 'text-gray-600' : 'text-white/80'
              }`}>
                Excellence in Healthcare
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-[#561416]' 
                : 'text-white/90 hover:text-white'
            }`}>
              Home
            </a>
            <a href="#services" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-[#561416]' 
                : 'text-white/90 hover:text-white'
            }`}>
              Services
            </a>
            <a href="#doctors" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-[#561416]' 
                : 'text-white/90 hover:text-white'
            }`}>
              Doctors
            </a>
            <a href="#about" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-[#561416]' 
                : 'text-white/90 hover:text-white'
            }`}>
              About
            </a>
            <a href="#contact" className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-[#561416]' 
                : 'text-white/90 hover:text-white'
            }`}>
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <button className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg ${
              isScrolled
                ? 'bg-[#561416] text-white hover:bg-[#6d1a1f] shadow-md'
                : 'bg-white text-[#561416] hover:bg-white/90 shadow-lg'
            }`}>
              Book Appointment
            </button>

            {/* Mobile Menu Button */}
            <button className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
      )}
    </header>
  )
}

export default Header