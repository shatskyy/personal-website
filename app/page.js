import Link from 'next/link'

// Home page component
// Main landing page with hero section
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          David Shatsky
        </h1>
        <p className="text-xl text-blue-600 font-medium mb-6">
          Data Science · Capital Markets · Builder
        </p>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          I build automated trading systems, agentic AI tools, and data-driven products. 
          Currently exploring the intersection of quantitative finance and product development.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            View Projects
          </Link>
          <Link 
            href="/about" 
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-blue-500 hover:text-blue-600 transition font-medium"
          >
            About Me
          </Link>
        </div>
      </div>

      {/* Featured Projects Preview */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
            <div className="text-3xl mb-3">📈</div>
            <h3 className="text-lg font-semibold mb-2">Weather Trading System</h3>
            <p className="text-gray-600 text-sm mb-3">
              Automated trading with 67% win rate and +14% ROI using ensemble forecasting
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ML</span>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Lokin Platform</h3>
            <p className="text-gray-600 text-sm mb-3">
              Startup automation with agentic AI for teammate matching and competitor analysis
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">FastAPI</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AI</span>
            </div>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="text-lg font-semibold mb-2">Semantic Search</h3>
            <p className="text-gray-600 text-sm mb-3">
              76K+ product search with embeddings, &lt;300ms latency
            </p>
            <div className="flex flex-wrap gap-1">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Pinecone</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">NLP</span>
            </div>
          </div>
        </div>
        <div className="text-center mt-6">
          <Link href="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
            View all projects →
          </Link>
        </div>
      </div>
      
      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Link href="/projects" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-gray-600">
            Trading systems, ML models, and startup tools
          </p>
        </Link>
        
        <Link href="/articles" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">Articles</h2>
          <p className="text-gray-600">
            Thoughts on markets, AI, and building
          </p>
        </Link>
        
        <Link href="/links" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">Resources</h2>
          <p className="text-gray-600">
            Curated tools and learning materials
          </p>
        </Link>
        
        <Link href="/about" className="p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-blue-500 transition">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-gray-600">
            Background, skills, and experience
          </p>
        </Link>
      </div>
    </div>
  )
}