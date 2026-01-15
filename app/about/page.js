import about from '@/data/about.json'

// About page
// Your bio, skills, and resume
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
      
      {/* Bio */}
      <div className="mb-8">
        <p className="text-lg text-gray-700 leading-relaxed">
          {about.bio}
        </p>
      </div>
      
      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {about.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
        <div className="space-y-6">
          {about.experience.map((job, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-gray-600">{job.company} | {job.period}</p>
              <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
        <p className="text-gray-700">
          Email: <a href={`mailto:${about.email}`} className="text-blue-600 hover:text-blue-800">{about.email}</a>
        </p>
        <p className="text-gray-700">
          GitHub: <a href={about.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">{about.github}</a>
        </p>
        <p className="text-gray-700">
          LinkedIn: <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">{about.linkedin}</a>
        </p>
      </div>
    </div>
  )
}
