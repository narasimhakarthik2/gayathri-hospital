import React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gayathri Hospital - Excellence in Healthcare',
  description: 'Gayathri Hospital provides world-class healthcare services with state-of-the-art facilities and experienced medical professionals. Your health, our priority.',
  keywords: 'hospital, healthcare, medical services, doctors, emergency care, surgery, diagnostics',
  authors: [{ name: 'Gayathri Hospital' }],
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 