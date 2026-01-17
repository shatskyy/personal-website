import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import ReadingProgress from '@/components/ReadingProgress'
import SocialShare from '@/components/SocialShare'
import RelatedArticles from '@/components/RelatedArticles'
import BackToTop from '@/components/BackToTop'
import ArticleContent from './ArticleContent'
import articles from '@/data/articles.json'
import { generateStructuredData, generateMetadata } from '@/lib/seo'

export async function generateMetadata({ params }) {
  const article = articles.find(a => a.slug === params.slug)
  
  if (!article) {
    return generateMetadata({
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.',
      path: `/articles/${params.slug}`,
    })
  }

  return generateMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/articles/${article.slug}`,
    type: 'article',
  })
}

export default function ArticlePage({ params }) {
  const article = articles.find(a => a.slug === params.slug)

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Article not found</p>
        <Link href="/articles" className="text-teal-600 hover:text-teal-800">
          ← Back to Articles
        </Link>
      </div>
    )
  }

  // Generate structured data
  const structuredData = generateStructuredData({
    type: 'article',
    data: {
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      dateModified: article.date,
      url: `/articles/${article.slug}`,
    },
  })

  return (
    <>
      <ReadingProgress />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ScrollReveal>
          <Link href="/articles" className="text-teal-600 hover:text-teal-800 mb-6 inline-block">
            ← Back to Articles
          </Link>
          
          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <span className="text-sm text-gray-500">{article.date}</span>
              <span className="text-sm text-gray-500">{article.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <article className="prose prose-lg max-w-none">
            <div className="bg-gray-50 border-l-4 border-teal-500 p-6 mb-8 rounded">
              <p className="text-lg text-gray-700 italic">{article.excerpt}</p>
            </div>
            
            <ArticleContent content={article.content} />

            <SocialShare
              title={article.title}
              url={`/articles/${article.slug}`}
              description={article.excerpt}
            />
          </article>
        </ScrollReveal>

        <RelatedArticles
          currentSlug={article.slug}
          tags={article.tags}
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </div>
      <BackToTop />
    </>
  )
}
