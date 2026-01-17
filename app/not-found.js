import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 className="text-6xl font-bold text-navy-dark mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="bg-navy-dark text-white px-6 py-3 rounded-lg hover:bg-navy-light transition font-medium"
        >
          Go Home
        </Link>
        <Link
          href="/articles"
          className="border-2 border-navy-dark text-navy-dark px-6 py-3 rounded-lg hover:bg-navy-dark hover:text-white transition font-medium"
        >
          Browse Articles
        </Link>
      </div>
    </div>
  )
}
