'use client'

import ScrollReveal from '@/components/ScrollReveal'
import LearningCard from '@/components/LearningCard'
import learningData from '@/data/learning.json'

export default function LearningPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy-dark mb-4">What I'm Learning</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuously building PM skills through courses, books, and hands-on practice.
            Here's what I'm working on to prepare for Associate Product Management roles.
          </p>
        </div>
      </ScrollReveal>

      {/* Courses Section */}
      <ScrollReveal delay={0.2}>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy-dark mb-6">Courses & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningData.courses.map((course) => (
              <LearningCard key={course.id} item={course} type="course" />
            ))}
            {learningData.certifications.map((cert) => (
              <LearningCard key={cert.id} item={cert} type="certification" />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Books Section */}
      <ScrollReveal delay={0.3}>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy-dark mb-6">Books & Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {learningData.books.map((book) => (
              <LearningCard key={book.id} item={book} type="book" />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal delay={0.4}>
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-navy-dark mb-6">Skills in Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningData.skills.map((skill) => (
              <LearningCard key={skill.id} item={skill} type="skill" />
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  )
}
