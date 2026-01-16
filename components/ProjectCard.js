// ProjectCard component
// Displays a single project with title, description, tech stack, and link
export default function ProjectCard({ project, featured }) {
  return (
    <div className={`bg-white border rounded-lg p-6 hover:shadow-lg transition ${
      featured ? 'border-blue-200 hover:border-blue-400' : 'border-gray-200 hover:border-gray-400'
    }`}>
      {featured && (
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mb-3">
          Featured
        </span>
      )}
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      
      {/* Link */}
      {project.link !== '#' && (
        <a href={project.link} target="_blank" rel="noopener noreferrer"
           className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          View Project →
        </a>
      )}
    </div>
  )
}