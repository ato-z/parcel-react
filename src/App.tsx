import React from 'react'
import { BrowserRouter as Router } from 'react-router'
import Navigation from '@/components/Navigation'
import { AppRouter } from '@/router'

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <AppRouter />
        </main>
      </div>
    </Router>
  )
}

export default App
