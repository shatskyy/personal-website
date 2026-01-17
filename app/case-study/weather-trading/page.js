'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import TradingPerformanceChart from '@/components/TradingPerformanceChart'
import caseStudy from '@/data/case-studies.json'

export default function WeatherTradingCaseStudy() {
  const study = caseStudy.find(cs => cs.slug === 'weather-trading')

  if (!study) {
    return <div>Case study not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <ScrollReveal>
        <div className="text-center mb-12">
          <Link href="/projects" className="text-teal-600 hover:text-teal-800 mb-4 inline-block">
            ← Back to Projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            {study.title}
          </h1>
          <p className="text-xl text-teal-600 font-medium mb-6">
            {study.subtitle}
          </p>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-navy-dark text-white p-4 rounded-lg">
              <div className="text-sm opacity-80">Win Rate</div>
              <div className="text-2xl font-bold">{study.metrics.winRate}</div>
            </div>
            <div className="bg-navy-dark text-white p-4 rounded-lg">
              <div className="text-sm opacity-80">ROI</div>
              <div className="text-2xl font-bold">{study.metrics.roi}</div>
            </div>
            <div className="bg-navy-dark text-white p-4 rounded-lg">
              <div className="text-sm opacity-80">Brier Improvement</div>
              <div className="text-2xl font-bold">{study.metrics.brierImprovement}</div>
            </div>
            <div className="bg-navy-dark text-white p-4 rounded-lg">
              <div className="text-sm opacity-80">Trades</div>
              <div className="text-2xl font-bold">{study.metrics.trades}</div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Problem Section */}
      <ScrollReveal delay={0.2}>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy-dark mb-6">{study.problem.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {study.problem.description}
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-navy-dark mb-4">Key Challenges:</h3>
            <ul className="space-y-2">
              {study.problem.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Approach Section */}
      <ScrollReveal delay={0.3}>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy-dark mb-6">{study.approach.title}</h2>
          <div className="space-y-8">
            {study.approach.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-2xl font-semibold text-navy-dark mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {section.description}
                </p>
                <ul className="space-y-2">
                  {section.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-600">
                      <span className="text-teal-600 mr-2">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Results Section */}
      <ScrollReveal delay={0.4}>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy-dark mb-6">{study.results.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {study.results.summary}
          </p>
          
          {/* Performance Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <TradingPerformanceChart />
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {study.results.metrics.map((metric, index) => (
              <div key={index} className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                <div className="text-teal-600 font-semibold">{metric}</div>
              </div>
            ))}
          </div>

          {/* Key Learnings */}
          <div className="bg-navy-dark text-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Key Learnings</h3>
            <ul className="space-y-2">
              {study.results.learnings.map((learning, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-teal-500 mr-2">→</span>
                  <span>{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </ScrollReveal>

      {/* Tech Stack */}
      <ScrollReveal delay={0.5}>
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-navy-dark mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  )
}
