


import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from '../hooks/useTheme'
import { useEffect, useState } from 'react'

export function ThemeToggle () {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className='w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 dark:bg-gray-800'>
        <div className='w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse' />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='w-9 h-9 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200'
      aria-label='Toggle theme'
    >
      {theme === 'dark'
        ? <FiSun className='w-4 h-4 text-yellow-500' />
        : <FiMoon className='w-4 h-4 text-gray-600' />}
    </button>
  )
}
