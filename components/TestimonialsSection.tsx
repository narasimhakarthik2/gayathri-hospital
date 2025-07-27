'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star } from 'lucide-react'

const TestimonialsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const testimonials = [
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

  return (
    <section ref={ref} className="section-padding hospital-gradient">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">
            What Our Patients Say
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied patients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-white"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-lg mb-6 italic">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 