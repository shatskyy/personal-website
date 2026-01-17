import Link from 'next/link'

// ArticleCard component
// Displays article previews with date, excerpt, tags, and read time
export default function ArticleCard({ article }) {
  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-teal-400 transition cursor-pointer h-full">
        <div className="flex justify-between items-start mb-3">
          <span className="text-sm text-gray-500">{article.date}</span>
          <span className="text-sm text-gray-500">{article.readTime}</span>
        </div>
        
        <h3 className="text-xl font-semibold text-navy-dark mb-3 hover:text-teal-600 transition">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {article.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
