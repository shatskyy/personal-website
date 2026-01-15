import Link from 'next/link'

// Navigation bar component
// Displays at the top of every page
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600">
            David Shatsky
          </Link>
          
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/projects" className="text-gray-700 hover:text-blue-600">
              Projects
            </Link>
            <Link href="/articles" className="text-gray-700 hover:text-blue-600">
              Articles
            </Link>
            <Link href="/notes" className="text-gray-700 hover:text-blue-600">
              Notes
            </Link>
            <Link href="/links" className="text-gray-700 hover:text-blue-600">
              Links
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
