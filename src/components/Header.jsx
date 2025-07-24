import { useState } from 'react'
import {
  LayoutGridIcon,
  PhoneIcon as LuPhone,
  MailIcon as LuMail,
  MapPinIcon as LuMapPin
} from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }
  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Space', href: '#space' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'OurMission', href: '#mission' }
  ]
  return (
    <header className='bg-white border-b border-gray-200 fixed top-0  w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <div className='flex items-center gap-2'>
            <LayoutGridIcon className='h-8 w-8 text-teal-500' />
            <span className='text-xl font-bold'>
              Business <span className='text-teal-500'>Cafe</span>
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className='hidden md:flex items-center space-x-8'>
            {navLinks.map(link =>
              <a
                key={link.href}
                href={link.href}
                className={`text-gray-700 font-medium hover:text-teal-600 transition-colors ${link.label ===
                'Home'
                  ? 'text-teal-500'
                  : ''}`}
              >
                {link.label}
              </a>
            )}
          </nav>

          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-gray-700 hover:text-teal-600 p-2'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen &&
        <div className='md:hidden bg-white border-t border-gray-200'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {navLinks.map(link =>
              <a
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium hover:bg-teal-50 ${link.label ===
                'Home'
                  ? 'text-teal-500'
                  : 'text-gray-700 hover:text-teal-600'}`}
              >
                {link.label}
              </a>
            )}
          </div>
        </div>}
    </header>
  )
}

export default Header
