'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// HeroAnimation component
// Typewriter/decrypt effect for hero text
export default function HeroAnimation({ text, className = '' }) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, 100) // Adjust speed here

    return () => clearInterval(interval)
  }, [text])

  return (
    <motion.h1
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-8 bg-teal-500 ml-1"
        />
      )}
    </motion.h1>
  )
}

// StaggerText component for subtitle and description
export function StaggerText({ children, className = '', delay = 0 }) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.p>
  )
}
