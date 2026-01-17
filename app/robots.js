const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://davidshatsky.com'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
