// ProjectCard component
// Displays a single project with title, description, tech stack, and link
export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      
      {/* Link */}
      <a href={project.link} target="_blank" rel="noopener noreferrer"
         className="text-blue-600 hover:text-blue-800 font-medium">
        View Project →
      </a>
    </div>
  )
}
