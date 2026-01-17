'use client'

import Link from 'next/link'
import Image from 'next/image'
import HeroAnimation, { StaggerText } from '@/components/HeroAnimation'
import AuroraBackground from '@/components/AuroraBackground'
import ScrollReveal from '@/components/ScrollReveal'
import ResumeDownload from '@/components/ResumeDownload'

// Home page component
// Main landing page with hero section
export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <AuroraBackground className="rounded-2xl p-8 mb-16">
        <div className="text-center">
          {/* Headshot */}
          <ScrollReveal delay={0.2}>
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-teal-500 shadow-lg bg-gradient-to-br from-navy-dark to-navy-light flex items-center justify-center">
              <div className="absolute inset-0">
                <Image
                  src="/images/headshot.jpg"
                  alt="David Shatsky"
                  fill
                  className="object-cover"
                  sizes="128px"
                  priority
                />
              </div>
              <div className="relative z-10 text-white text-4xl font-bold">
                DS
              </div>
            </div>
          </ScrollReveal>
          
          <HeroAnimation text="David Shatsky" className="text-5xl md:text-6xl font-bold text-navy-dark mb-4" />
          
          <StaggerText delay={0.3} className="text-xl md:text-2xl text-teal-600 font-medium mb-6">
            Data Science · Capital Markets · Builder
          </StaggerText>
          
          <StaggerText delay={0.4} className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Data science graduate working in capital markets. Passionate about building products 
            that solve real problems— from AI tools to automated trading systems. 
          </StaggerText>
          
          <ScrollReveal delay={0.5}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/projects" 
                className="bg-navy-dark text-white px-6 py-3 rounded-lg hover:bg-navy-light transition font-medium shadow-lg hover:shadow-xl"
              >
                View Projects
              </Link>
              <Link 
                href="/about" 
                className="border-2 border-navy-dark text-navy-dark px-6 py-3 rounded-lg hover:bg-navy-dark hover:text-white transition font-medium"
              >
                About Me
              </Link>
              <ResumeDownload />
            </div>
          </ScrollReveal>
        </div>
      </AuroraBackground>

      {/* Featured Projects Preview */}
      <ScrollReveal>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy-dark mb-6">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-teal-400 transition bg-white">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-lg font-semibold mb-2 text-navy-dark">Weather Trading System</h3>
              <p className="text-gray-600 text-sm mb-3">
                Automated trading with 67% win rate and +14% ROI using ensemble forecasting
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-teal-100 text-navy-dark text-xs px-2 py-1 rounded font-medium">Python</span>
                <span className="bg-teal-100 text-navy-dark text-xs px-2 py-1 rounded font-medium">ML</span>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-teal-400 transition bg-white">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2 text-navy-dark">Lokin Platform</h3>
              <p className="text-gray-600 text-sm mb-3">
                Startup automation with agentic AI for teammate matching and competitor analysis
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-teal-100 text-navy-dark text-xs px-2 py-1 rounded font-medium">FastAPI</span>
                <span className="bg-teal-100 text-navy-dark text-xs px-2 py-1 rounded font-medium">AI</span>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-teal-400 transition bg-white">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold mb-2 text-navy-dark">Semantic Search</h3>
              <p className="text-gray-600 text-sm mb-3">
                76K+ product search with embeddings, &lt;300ms latency
              </p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-teal-100 text-navy-dark text-xs px-2 py-1 rounded font-medium">Pinecone</span>
                <span className="bg-teal-100 text-navy-dark text-xs px-2 py-1 rounded font-medium">NLP</span>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/projects" className="text-teal-600 hover:text-teal-800 font-medium">
              View all projects →
            </Link>
          </div>
        </div>
      </ScrollReveal>
      
      {/* Quick Links Grid */}
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/projects" className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-teal-400 transition bg-white">
            <h2 className="text-2xl font-semibold mb-2 text-navy-dark">Projects</h2>
            <p className="text-gray-600">
              Trading systems, ML models, and startup tools
            </p>
          </Link>
          
          <Link href="/articles" className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-teal-400 transition bg-white">
            <h2 className="text-2xl font-semibold mb-2 text-navy-dark">Articles</h2>
            <p className="text-gray-600">
              Curated articles, videos, and resources
            </p>
          </Link>
          
          <Link href="/case-study" className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-teal-400 transition bg-white">
            <h2 className="text-2xl font-semibold mb-2 text-navy-dark">Case Studies</h2>
            <p className="text-gray-600">
              Deep dives into selected projects
            </p>
          </Link>
          
          <Link href="/about" className="p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:border-teal-400 transition bg-white">
            <h2 className="text-2xl font-semibold mb-2 text-navy-dark">About</h2>
            <p className="text-gray-600">
              Background, skills, and experience
            </p>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  )
}