import Link from 'next/link'

// Home page component
// Main landing page with hero section
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Hi, I'm David Shatsky
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Developer | Builder | Learner
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Welcome to my personal space on the web. I build things, share what I learn, 
          and curate interesting content.
        </p>
      </div>
      
      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/projects" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-gray-600">
            Explore my latest work and side projects.
          </p>
        </Link>
        
        <Link href="/articles" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">Articles</h2>
          <p className="text-gray-600">
            Interesting articles and my thoughts.
          </p>
        </Link>
        
        <Link href="/notes" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">Notes</h2>
          <p className="text-gray-600">
            Podcast notes and learning resources.
          </p>
        </Link>
        
        <Link href="/about" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-gray-600">
            Learn more about me and my work.
          </p>
        </Link>
      </div>
    </div>
  )
}
