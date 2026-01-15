import ProjectCard from '@/components/ProjectCard'
import projects from '@/data/projects.json'

// Projects page
// Displays all your projects in a grid
export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
      <p className="text-lg text-gray-600 mb-8">
        Here are some of the projects I've worked on.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
