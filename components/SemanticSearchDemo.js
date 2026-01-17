'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

// SemanticSearchDemo component
// Interactive semantic search demo with mock results
export default function SemanticSearchDemo() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)

  // Mock product database
  const mockProducts = [
    { id: 1, name: 'Wireless Bluetooth Headphones', category: 'Electronics', description: 'Premium noise-cancelling headphones with 30-hour battery life' },
    { id: 2, name: 'Smart Fitness Watch', category: 'Wearables', description: 'Track your heart rate, steps, and sleep with advanced sensors' },
    { id: 3, name: 'Portable Laptop Stand', category: 'Accessories', description: 'Ergonomic aluminum stand for better posture while working' },
    { id: 4, name: 'Mechanical Keyboard', category: 'Electronics', description: 'RGB backlit keyboard with Cherry MX switches' },
    { id: 5, name: 'USB-C Hub', category: 'Accessories', description: '7-in-1 hub with HDMI, USB ports, and SD card reader' },
    { id: 6, name: 'Standing Desk Converter', category: 'Furniture', description: 'Convert any desk to standing desk with adjustable height' },
    { id: 7, name: 'Wireless Mouse', category: 'Electronics', description: 'Ergonomic mouse with long battery life and precise tracking' },
    { id: 8, name: 'Monitor Stand', category: 'Furniture', description: 'Dual monitor stand with cable management' },
  ]

  // Simple semantic matching (mock - in real app would use embeddings)
  const performSearch = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)
    
    // Simulate API delay
    setTimeout(() => {
      const queryLower = searchQuery.toLowerCase()
      const matched = mockProducts
        .map(product => {
          const nameMatch = product.name.toLowerCase().includes(queryLower)
          const descMatch = product.description.toLowerCase().includes(queryLower)
          const categoryMatch = product.category.toLowerCase().includes(queryLower)
          
          let score = 0
          if (nameMatch) score += 3
          if (descMatch) score += 2
          if (categoryMatch) score += 1
          
          // Check for semantic similarity (mock)
          const semanticKeywords = {
            'headphone': ['audio', 'sound', 'music', 'earbuds'],
            'watch': ['time', 'fitness', 'health', 'tracker'],
            'stand': ['desk', 'mount', 'holder', 'support'],
            'keyboard': ['typing', 'input', 'keys', 'typing'],
            'mouse': ['pointer', 'click', 'tracking', 'cursor'],
          }
          
          Object.keys(semanticKeywords).forEach(keyword => {
            if (queryLower.includes(keyword) || semanticKeywords[keyword].some(k => queryLower.includes(k))) {
              mockProducts.forEach(p => {
                if (p.name.toLowerCase().includes(keyword) || p.description.toLowerCase().includes(keyword)) {
                  score += 0.5
                }
              })
            }
          })
          
          return { ...product, score }
        })
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5)
        .map(item => ({
          ...item,
          similarity: Math.min(95, 60 + item.score * 7) // Mock similarity score
        }))

      setResults(matched)
      setIsSearching(false)
    }, 300) // Simulate 300ms latency
  }

  const handleSearch = (e) => {
    e.preventDefault()
    performSearch(query)
  }

  return (
    <div className="w-full">
      <ScrollReveal>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-navy-dark mb-4">
            Try Semantic Search
          </h3>
          <p className="text-gray-600 text-sm mb-6">
            Search 76K+ products using semantic similarity. Try queries like "audio device", 
            "work setup", or "typing tool" to see how semantic search finds related products.
          </p>

          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  performSearch(e.target.value)
                }}
                placeholder="Search products semantically..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button
                type="submit"
                disabled={isSearching}
                className="bg-navy-dark text-white px-6 py-3 rounded-lg hover:bg-navy-light transition font-medium disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>
          </form>

          {/* Results */}
          {results.length > 0 && (
            <div className="space-y-3">
              <div className="text-sm text-gray-600 mb-2">
                Found {results.length} results (showing top matches)
              </div>
              {results.map((result) => (
                <div
                  key={result.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-teal-400 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-navy-dark">{result.name}</h4>
                    <span className="text-xs bg-teal-100 text-navy-dark px-2 py-1 rounded">
                      {result.similarity.toFixed(0)}% match
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{result.description}</p>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {result.category}
                  </span>
                </div>
              ))}
            </div>
          )}

          {query && results.length === 0 && !isSearching && (
            <div className="text-center py-8 text-gray-500">
              No results found. Try different keywords.
            </div>
          )}

          {!query && (
            <div className="text-center py-8 text-gray-500">
              Enter a search query to see semantic search in action.
            </div>
          )}
        </div>
      </ScrollReveal>
    </div>
  )
}
