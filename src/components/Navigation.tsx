import React from 'react'
import { Link, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import { getNavigationRoutes } from '@/router'

const Navigation: React.FC = () => {
  const location = useLocation()
  const navigationRoutes = getNavigationRoutes()

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-green-500 font-semibold">
                <img src="/logo.svg" alt="logo" className="w-10 h-10" />
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {navigationRoutes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`py-2 px-4 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300 relative ${
                  isActive(route.path) ? 'text-green-500' : ''
                }`}
              >
                {route.title}
                {isActive(route.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
