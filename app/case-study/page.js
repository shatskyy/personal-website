'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import caseStudies from '@/data/case-studies.json'
import projects from '@/data/projects.json'

export default function CaseStudiesPage() {
  // Get all case studies from projects that have caseStudy slug
  const availableCaseStudies = projects
    .filter(p => p.caseStudy)
    .map(p => {
      const study = caseStudies.find(cs => cs.slug === p.caseStudy)
      return study ? { ...study, projectId: p.id } : null
    })
    .filter(Boolean)

  const [selectedTab, setSelectedTab] = useState(availableCaseStudies[0]?.slug || null)
  const selectedStudy = caseStudies.find(cs => cs.slug === selectedTab)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal>
        <div className="mb-8">
          <Link href="/projects" className="text-teal-600 hover:text-teal-800 mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-4xl font-bold text-navy-dark mb-4">Case Studies</h1>
          <p className="text-lg text-gray-600">
            Deep dives into selected projects with detailed analysis, approach, and results.
          </p>
        </div>
      </ScrollReveal>

      {/* Tabs */}
      <ScrollReveal delay={0.1}>
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-4 overflow-x-auto">
            {availableCaseStudies.map((study) => (
              <button
                key={study.slug}
                onClick={() => setSelectedTab(study.slug)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition whitespace-nowrap ${
                  selectedTab === study.slug
                    ? 'border-teal-600 text-teal-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {study.title}
              </button>
            ))}
          </nav>
        </div>
      </ScrollReveal>

      {/* Case Study Content */}
      {selectedStudy && (
        <ScrollReveal delay={0.2}>
          <div>
            <Link
              href={`/case-study/${selectedStudy.slug}`}
              className="inline-block mb-6 text-teal-600 hover:text-teal-800 font-medium"
            >
              View Full Case Study →
            </Link>

            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-navy-dark mb-4">{selectedStudy.title}</h2>
              <p className="text-xl text-teal-600 font-medium mb-6">{selectedStudy.subtitle}</p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Object.entries(selectedStudy.metrics).map(([key, value]) => (
                  <div key={key} className="bg-navy-dark text-white p-4 rounded-lg">
                    <div className="text-sm opacity-80 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                    <div className="text-2xl font-bold">{value}</div>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-navy-dark mb-3">Summary</h3>
                <p className="text-gray-700 leading-relaxed">{selectedStudy.results.summary}</p>
              </div>

              {/* Key Learnings */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-navy-dark mb-4">Key Learnings</h3>
                <ul className="space-y-2">
                  {selectedStudy.results.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-teal-600 mr-2">→</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  )
}
