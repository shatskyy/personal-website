import { generateMetadata } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davidshatsky.com'

export default function sitemap() {
  // Import data
  const articles = require('@/data/articles.json')
  const projects = require('@/data/projects.json')
  const caseStudies = require('@/data/case-studies.json')

  // Static routes
  const routes = [
    '',
    '/about',
    '/projects',
    '/articles',
    '/case-study',
    '/contact',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  // Article routes
  const articleRoutes = articles.map((article) => ({
    url: `${siteUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Case study routes
  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${siteUrl}/case-study/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...routes, ...articleRoutes, ...caseStudyRoutes]
}
