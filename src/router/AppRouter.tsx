import React from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'
import { routes } from './routes'
import { fadeVariants, pageTransition } from '@/utils/animations'

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={fadeVariants}
      transition={pageTransition}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  )
}

const AppRouter: React.FC = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => {
          const Component = route.component
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <AnimatedPage>
                  <Component />
                </AnimatedPage>
              }
            />
          )
        })}
      </Routes>
    </AnimatePresence>
  )
}

export default AppRouter
