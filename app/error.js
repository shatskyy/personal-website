'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log error to console or error reporting service
    console.error('Error:', error)
  }, [error])

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold text-navy-dark mb-4">500</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Something went wrong</h2>
      <p className="text-lg text-gray-600 mb-8">
        We encountered an unexpected error. Please try again later.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={reset}
          className="bg-navy-dark text-white px-6 py-3 rounded-lg hover:bg-navy-light transition font-medium"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="border-2 border-navy-dark text-navy-dark px-6 py-3 rounded-lg hover:bg-navy-dark hover:text-white transition font-medium"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
