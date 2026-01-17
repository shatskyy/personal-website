'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import SemanticSearchDemo from '@/components/SemanticSearchDemo'

export default function SemanticSearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal>
        <Link href="/projects" className="text-teal-600 hover:text-teal-800 mb-6 inline-block">
          ← Back to Projects
        </Link>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-navy-dark mb-4">
            Semantic Search Engine
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Built semantic search for 76K+ products using MiniLM embeddings and Pinecone DB. 
            The system delivers top-10 similar results with TF-IDF keywords via FastAPI/CLI interface, 
            achieving &lt;300ms latency and deployed on Railway.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-navy-dark mb-4">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-semibold text-navy-dark mb-2">Embeddings</h3>
              <p className="text-sm text-gray-600">
                Product descriptions converted to 384-dimensional vectors using MiniLM
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-navy-dark mb-2">Vector Search</h3>
              <p className="text-sm text-gray-600">
                Pinecone DB performs fast similarity search across 76K+ products
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-semibold text-navy-dark mb-2">Performance</h3>
              <p className="text-sm text-gray-600">
                &lt;300ms latency with FastAPI backend, deployed on Railway
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <SemanticSearchDemo />
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <div className="mt-12 bg-navy-dark text-white p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Technical Details</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">•</span>
              <span><strong>Embeddings:</strong> MiniLM (384 dimensions)</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">•</span>
              <span><strong>Vector DB:</strong> Pinecone (76K+ vectors)</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">•</span>
              <span><strong>Backend:</strong> FastAPI with async endpoints</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">•</span>
              <span><strong>Deployment:</strong> Railway with auto-scaling</span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">•</span>
              <span><strong>Latency:</strong> &lt;300ms average response time</span>
            </li>
          </ul>
        </div>
      </ScrollReveal>
    </div>
  )
}
