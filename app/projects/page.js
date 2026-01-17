'use client'

import ProjectCard from '@/components/ProjectCard'
import CardHover from '@/components/CardHover'
import ScrollReveal from '@/components/ScrollReveal'
import projects from '@/data/projects.json'

// Projects page
// Displays all your projects in a grid
export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-navy-dark mb-4">Projects</h1>
        <p className="text-lg text-gray-600 mb-8">
          A collection of trading systems, ML models, and product experiments I've built.
        </p>
      </ScrollReveal>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <ScrollReveal delay={0.2}>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-navy-dark mb-6">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={0.1 * index}>
                  <CardHover>
                    <ProjectCard project={project} featured={true} />
                  </CardHover>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <ScrollReveal delay={0.3}>
          <div>
            <h2 className="text-2xl font-semibold text-navy-dark mb-6">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={0.1 * index}>
                  <CardHover>
                    <ProjectCard project={project} featured={false} />
                  </CardHover>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </div>
  )
}