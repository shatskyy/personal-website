'use client'

import Link from 'next/link'
import articles from '@/data/articles.json'

export default function RelatedArticles({ currentSlug, tags, limit = 3 }) {
  const relatedArticles = articles
    .filter(article => {
      if (article.slug === currentSlug) return false
      // Find articles with matching tags
      return tags.some(tag => article.tags.includes(tag))
    })
    .slice(0, limit)

  if (relatedArticles.length === 0) {
    // Fallback: show recent articles
    const recentArticles = articles
      .filter(article => article.slug !== currentSlug)
      .slice(0, limit)
    
    if (recentArticles.length === 0) return null

    return (
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold text-navy-dark mb-6">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="block p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:border-teal-400 transition"
            >
              <h3 className="font-semibold text-navy-dark mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{article.date}</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-navy-dark mb-6">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.slug}`}
            className="block p-4 border border-gray-200 rounded-lg hover:shadow-lg hover:border-teal-400 transition"
          >
            <h3 className="font-semibold text-navy-dark mb-2">{article.title}</h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
