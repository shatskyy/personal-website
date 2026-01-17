'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function SearchBar({ onClose }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (query.length > 0) {
      // Import data dynamically to avoid SSR issues
      Promise.all([
        import('@/data/articles.json'),
        import('@/data/projects.json'),
      ]).then(([articlesModule, projectsModule]) => {
        const articles = articlesModule.default
        const projects = projectsModule.default
        
        const searchQuery = query.toLowerCase()
        const articleResults = articles
          .filter(article => 
            article.title.toLowerCase().includes(searchQuery) ||
            article.excerpt.toLowerCase().includes(searchQuery) ||
            article.tags.some(tag => tag.toLowerCase().includes(searchQuery))
          )
          .map(article => ({
            ...article,
            type: 'article',
            url: `/articles/${article.slug}`,
          }))
          .slice(0, 3)

        const projectResults = projects
          .filter(project =>
            project.title.toLowerCase().includes(searchQuery) ||
            project.description.toLowerCase().includes(searchQuery) ||
            project.techStack.some(tech => tech.toLowerCase().includes(searchQuery))
          )
          .map(project => ({
            ...project,
            type: 'project',
            url: project.caseStudy ? `/case-study/${project.caseStudy}` : '/projects',
          }))
          .slice(0, 3)

        setResults([...articleResults, ...projectResults])
      })
    } else {
      setResults([])
    }
  }, [query])

  const handleResultClick = (url) => {
    router.push(url)
    setQuery('')
    setResults([])
    if (onClose) onClose()
  }

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder="Search articles, projects..."
          className="w-full md:w-64 px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto"
          >
            {results.map((result, index) => (
              <button
                key={`${result.type}-${result.id}`}
                onClick={() => handleResultClick(result.url)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 transition border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        result.type === 'article' 
                          ? 'bg-teal-100 text-teal-700' 
                          : 'bg-navy-dark text-white'
                      }`}>
                        {result.type === 'article' ? 'Article' : 'Project'}
                      </span>
                    </div>
                    <h3 className="font-semibold text-navy-dark">{result.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {result.excerpt || result.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close */}
      {isOpen && results.length > 0 && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
