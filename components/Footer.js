// Footer component
// Displays at the bottom of every page
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} David Shatsky. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/shatskyy" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-teal-600 transition">
              GitHub
            </a>
            <a href="https://linkedin.com/in/david-shatsky-31b01b1b3" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-teal-600 transition">
              LinkedIn
            </a>
            <a href="mailto:shatsky.david@gmail.com" className="text-gray-600 hover:text-teal-600 transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}