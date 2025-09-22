import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '#about' }, // Will scroll to section
    { name: 'Projects', path: '#projects' }, // Will scroll to section
    { name: 'Skills', path: '#skills' }, // Will scroll to section
    { name: 'Contact', path: '#contact' }, // Will scroll to section
  ]

  const handleNavClick = (path, isHashLink = false) => {
    if (isHashLink && location.pathname === '/') {
      // If we're already on home page, just scroll to section
      const section = document.querySelector(path)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (isHashLink) {
      // If we're on another page, navigate to home first, then scroll
      window.location.href = `/${path}`
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="bg-blue-600 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 text-white font-bold text-xl">
            Prem Kumar Ponnada
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path, item.path.startsWith('#'))}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition duration-150 cursor-pointer ${
                    location.pathname === item.path 
                      ? 'bg-blue-700 text-white' 
                      : 'text-white hover:bg-blue-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
              >
                Resume
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-blue-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-600">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path, item.path.startsWith('#'))}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path 
                    ? 'bg-blue-700 text-white' 
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                {item.name}
              </button>
            ))}
            <a
              href="https://docs.google.com/document/d/14bd7_1G1G95foroA3g_bl15Fn58HPJ2C/edit?usp=sharing&ouid=111446156556230336637&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar