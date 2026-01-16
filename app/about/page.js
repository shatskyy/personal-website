import about from '@/data/about.json'

// About page
// Your bio, skills, and resume
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{about.name}</h1>
      <p className="text-xl text-blue-600 font-medium mb-6">{about.title}</p>
      
      {/* Bio */}
      <div className="mb-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          {about.bio}
        </p>
      </div>

      {/* Education */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold">{about.education.school}</h3>
          <p className="text-gray-600">{about.education.degree}, {about.education.minor} Minor</p>
          <p className="text-gray-500 text-sm">{about.education.period} | GPA: {about.education.gpa}</p>
          <div className="mt-3">
            <p className="text-sm text-gray-600 font-medium mb-2">Relevant Coursework:</p>
            <div className="flex flex-wrap gap-2">
              {about.education.coursework.map((course, index) => (
                <span key={index} className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border">
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {about.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>
      
      {/* Experience */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h2>
        <div className="space-y-6">
          {about.experience.map((job, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <p className="text-blue-600 font-medium">{job.company}</p>
              <p className="text-gray-500 text-sm">{job.location} | {job.period}</p>
              <p className="text-gray-700 mt-2">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-700">
              <span className="font-medium">Email:</span>{' '}
              <a href={`mailto:${about.email}`} className="text-blue-600 hover:text-blue-800">
                {about.email}
              </a>
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span> {about.phone}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Location:</span> {about.location}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">GitHub:</span>{' '}
              <a href={about.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                github.com/shatskyy
              </a>
            </p>
          </div>
          <p className="text-gray-700 mt-4">
            <span className="font-medium">LinkedIn:</span>{' '}
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              linkedin.com/in/david-shatsky
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}