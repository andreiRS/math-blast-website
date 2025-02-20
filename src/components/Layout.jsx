import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-brand-blue via-brand-pink to-brand-mint bg-clip-text text-transparent">
              MathBlast!
            </Link>
            <div className="hidden sm:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-brand-blue font-semibold">
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4">
            <nav className="flex flex-wrap justify-center gap-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/legal" className="text-gray-400 hover:text-white transition-colors">
                Legal Notice
              </Link>
            </nav>
            <p className="text-center text-base text-gray-400">
              &copy; 2025 MathBlast! All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
