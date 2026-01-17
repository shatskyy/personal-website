import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import { generateMetadata as genMeta } from '@/lib/seo'

// Metadata for the site
export const metadata = genMeta({
  title: 'David Shatsky | Data Science · Capital Markets · Builder',
  description: 'Portfolio of David Shatsky - Data Science graduate interested in building agentic AI tools, automated systems, and information-driven products.',
  path: '/',
})

// Root layout component - wraps all pages
// Navbar and Footer appear on every page
export default function RootLayout({ children }) {
  // Add structured data for Person
  const personStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'David Shatsky',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://davidshatsky.com',
    jobTitle: 'Data Science · Capital Markets · Builder',
    sameAs: [
      'https://github.com/shatskyy',
      'https://linkedin.com/in/david-shatsky-31b01b1b3',
    ],
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}