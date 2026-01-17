'use client'

import Link from 'next/link'

// LearningCard component
// Displays learning items with progress indicators
export default function LearningCard({ item, type = 'course' }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-300'
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-300'
      case 'reading':
        return 'bg-purple-100 text-purple-800 border-purple-300'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300'
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 'advanced':
        return 'bg-teal-600'
      case 'intermediate':
        return 'bg-teal-400'
      case 'beginner':
        return 'bg-teal-200'
      default:
        return 'bg-gray-300'
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-navy-dark mb-2">
            {item.title}
            {item.author && (
              <span className="text-gray-600 font-normal text-base ml-2">
                by {item.author}
              </span>
            )}
          </h3>
          {item.provider && (
            <p className="text-sm text-gray-600 mb-2">{item.provider}</p>
          )}
          <p className="text-gray-700 text-sm">{item.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
          {item.status === 'in-progress' ? 'In Progress' : 
           item.status === 'reading' ? 'Reading' : 
           item.status === 'completed' ? 'Completed' : item.status}
        </span>
      </div>

      {/* Progress Bar */}
      {item.progress !== undefined && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Progress</span>
            <span>{item.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${getLevelColor(item.level || 'intermediate')}`}
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Level Badge for Skills */}
      {item.level && (
        <div className="mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(item.level)}`}>
            {item.level.charAt(0).toUpperCase() + item.level.slice(1)}
          </span>
        </div>
      )}

      {/* Link */}
      {item.link && (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-600 hover:text-teal-800 font-medium text-sm inline-flex items-center gap-1"
        >
          Learn More →
        </Link>
      )}
    </div>
  )
}
