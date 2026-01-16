import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Metadata for the site
export const metadata = {
  title: 'David Shatsky | Data Science · Capital Markets · Builder',
  description: 'Portfolio of David Shatsky - Data Science graduate intereseted in building agentic AI tools, automated systems, and information-driven products.',
}

// Root layout component - wraps all pages
// Navbar and Footer appear on every page
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}