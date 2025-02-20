import { FC } from 'react'
import { Link } from 'react-router-dom'

const Footer: FC = () => {
  const footerLinks = [
    { path: '/privacy', label: 'Privacy', isExternal: false },
    { path: '/terms', label: 'Terms', isExternal: false },
    { path: '/legal', label: 'Legal', isExternal: false },
    { path: 'mailto:mathblast@surdu.de', label: 'Contact', isExternal: true },
  ]

  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-gray-500">
            {new Date().getFullYear()} MathBlast All rights reserved.
          </div>
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              link.isExternal ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
