'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import resources from '@/data/resources.json'

// Articles/Resources page - now a links page with videos, articles, readings
export default function ArticlesPage() {
  const [selectedType, setSelectedType] = useState(null) // 'article', 'link', 'video', null for all
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedTag, setSelectedTag] = useState(null)

  // Get unique values for filters
  const allTypes = ['article', 'link', 'video']
  const allCategories = useMemo(() => {
    const cats = new Set(resources.map(r => r.category))
    return Array.from(cats).sort()
  }, [])
  const allTags = useMemo(() => {
    const tags = new Set()
    resources.forEach(r => {
      r.tags.forEach(tag => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  // Filter resources
  const filteredResources = useMemo(() => {
    return resources.filter(resource => {
      if (selectedType && resource.type !== selectedType) return false
      if (selectedCategory && resource.category !== selectedCategory) return false
      if (selectedTag && !resource.tags.includes(selectedTag)) return false
      return true
    })
  }, [selectedType, selectedCategory, selectedTag])

  const getTypeIcon = (type) => {
    switch (type) {
      case 'article':
        return '📝'
      case 'video':
        return '🎥'
      case 'link':
        return '🔗'
      default:
        return '📄'
    }
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 'article':
        return 'Article'
      case 'video':
        return 'Video'
      case 'link':
        return 'Link'
      default:
        return 'Resource'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-dark mb-4">Articles & Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Curated articles, videos, links, and readings on trading, AI, product management, and building.
          </p>
        </div>
      </ScrollReveal>

      {/* Filters */}
      <ScrollReveal delay={0.1}>
        <div className="mb-8 space-y-4">
          {/* Type Filter */}
          <div>
            <span className="text-sm font-medium text-gray-700 block mb-2">Type:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  selectedType === null
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {allTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition capitalize ${
                    selectedType === type
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {getTypeIcon(type)} {getTypeLabel(type)}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <span className="text-sm font-medium text-gray-700 block mb-2">Category:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  selectedCategory === null
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Filter */}
          <div>
            <span className="text-sm font-medium text-gray-700 block mb-2">Tags:</span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                  selectedTag === null
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {allTags.slice(0, 10).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition ${
                    selectedTag === tag
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Resources Grid */}
      <ScrollReveal delay={0.2}>
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <ScrollReveal key={resource.id} delay={0.1 * index}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-teal-400 transition">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {getTypeLabel(resource.type)}
                    </span>
                  </div>
                  
                  {resource.type === 'article' ? (
                    <Link href={resource.url}>
                      <h3 className="text-lg font-semibold text-navy-dark mb-2 hover:text-teal-600 transition">
                        {resource.title}
                      </h3>
                    </Link>
                  ) : (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <h3 className="text-lg font-semibold text-navy-dark mb-2 hover:text-teal-600 transition">
                        {resource.title} →
                      </h3>
                    </a>
                  )}
                  
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <span>{resource.category}</span>
                    {resource.date && <span>{new Date(resource.date).toLocaleDateString()}</span>}
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {resource.readTime && (
                    <div className="mt-3 text-xs text-gray-500">
                      {resource.readTime}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No resources found with the selected filters.</p>
          </div>
        )}
      </ScrollReveal>
    </div>
  )
}
