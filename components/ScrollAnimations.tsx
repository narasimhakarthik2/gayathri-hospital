'use client'

import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  distance?: number
  duration?: number
}

export const ScrollAnimation = ({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up', 
  distance = 50, 
  duration = 0.8 
}: ScrollAnimationProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 0 }
  const springProgress = useSpring(scrollYProgress, springConfig)

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return { y: distance }
      case 'down':
        return { y: -distance }
      case 'left':
        return { x: distance }
      case 'right':
        return { x: -distance }
      default:
        return { y: distance }
    }
  }

  const opacity = useTransform(springProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const transform = useTransform(springProgress, [0, 0.2, 0.8, 1], [
    getTransform(),
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    getTransform()
  ])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        transform,
      }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  )
}

export const ParallaxSection = ({ children, speed = 0.5 }: { children: React.ReactNode, speed?: number }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export const StaggeredGrid = ({ children, staggerDelay = 0.1 }: { children: React.ReactNode[], staggerDelay?: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {React.Children.map(children, (child, index) => (
        <ScrollAnimation
          key={index}
          delay={index * staggerDelay}
          direction="up"
          distance={30}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}

export const FadeInOnScroll = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <ScrollAnimation className={className} direction="up" distance={20}>
      {children}
    </ScrollAnimation>
  )
}

export const ScaleOnScroll = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ scale, opacity }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
} 