'use client'

import { motion } from 'framer-motion'

// AuroraBackground component
// Creates an animated gradient background effect
export default function AuroraBackground({ children, className = '' }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="absolute inset-0 aurora-gradient opacity-30"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          backgroundSize: '400% 400%',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
