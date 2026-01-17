import Image from 'next/image'
import Link from 'next/link'

// ProjectCard component
// Displays a single project with title, description, tech stack, and link
export default function ProjectCard({ project, featured }) {
  const hasImage = project.image && project.image !== '/projects/placeholder.jpg'
  
  return (
    <div className={`bg-white border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
      featured ? 'border-teal-200 hover:border-teal-400' : 'border-gray-200 hover:border-gray-400'
    }`}>
      {/* Project Image */}
      {hasImage && (
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      <div className="p-6">
        {featured && (
          <span className="inline-block bg-teal-100 text-navy-dark text-xs px-2 py-1 rounded mb-3 font-medium">
            Featured
          </span>
        )}
        
        <h3 className="text-xl font-semibold mb-2 text-navy-dark">{project.title}</h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
        
        {/* Metrics */}
        {project.metrics && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.metrics.map((metric, index) => (
              <span key={index} className="bg-navy-light text-white text-xs px-2 py-1 rounded font-medium">
                {metric}
              </span>
            ))}
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          {project.caseStudy && (
            <Link href={`/case-study/${project.caseStudy}`}
               className="text-teal-600 hover:text-teal-800 font-medium text-sm">
              View Case Study →
            </Link>
          )}
          {project.link && project.link !== '#' && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
               className="text-navy-light hover:text-navy-dark font-medium text-sm">
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}