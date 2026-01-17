// SEO utility functions for generating metadata

export function generateMetadata({ title, description, path, image, type = 'website' }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davidshatsky.com'
  const fullUrl = `${siteUrl}${path}`
  const defaultImage = `${siteUrl}/images/og-image.jpg`
  const siteTitle = 'David Shatsky | Data Science · Capital Markets · Builder'
  const siteDescription = 'Portfolio of David Shatsky - Data Science graduate interested in building agentic AI tools, automated systems, and information-driven products.'
  
  const metaTitle = title ? `${title} | ${siteTitle.split(' | ')[0]}` : siteTitle
  const metaDescription = description || siteDescription
  const metaImage = image || defaultImage

  return {
    title: metaTitle,
    description: metaDescription,
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: fullUrl,
      siteName: 'David Shatsky',
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: title || 'David Shatsky',
        },
      ],
      locale: 'en_US',
      type: type,
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: '@davidshatsky', // Update with your Twitter handle
    },
    alternates: {
      canonical: fullUrl,
    },
  }
}

export function generateStructuredData({ type, data }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davidshatsky.com'
  
  const schemas = {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'David Shatsky',
      url: siteUrl,
      jobTitle: 'Data Science · Capital Markets · Builder',
      sameAs: [
        'https://github.com/shatskyy',
        'https://linkedin.com/in/david-shatsky-31b01b1b3',
      ],
      ...data,
    },
    article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.headline,
      description: data.description,
      datePublished: data.datePublished,
      dateModified: data.dateModified || data.datePublished,
      author: {
        '@type': 'Person',
        name: 'David Shatsky',
        url: siteUrl,
      },
      publisher: {
        '@type': 'Person',
        name: 'David Shatsky',
      },
      ...data,
    },
    project: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: data.name,
      description: data.description,
      creator: {
        '@type': 'Person',
        name: 'David Shatsky',
      },
      ...data,
    },
  }

  return schemas[type] || null
}
