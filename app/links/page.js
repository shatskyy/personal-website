import links from '@/data/links.json'

// Links page
// Displays curated links and resources
export default function LinksPage() {
  // Group links by category
  const categories = [...new Set(links.map(link => link.category))]
  
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Links</h1>
      <p className="text-lg text-gray-600 mb-8">
        Curated resources and interesting links I've found useful.
      </p>
      
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">{category}</h2>
          <div className="space-y-4">
            {links
              .filter(link => link.category === category)
              .map((link) => (
                <div key={link.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" 
                     className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                    {link.title} →
                  </a>
                  <p className="text-gray-600 mt-1">{link.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
