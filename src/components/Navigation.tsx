import { FC } from 'react'
import { Link } from 'react-router-dom'

const Navigation: FC = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              MathBlast
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              Home
            </Link>
            <a
              href="mailto:mathblast@surdu.de"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
