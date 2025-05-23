import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/App'

const app = createRoot(document.getElementById('root') as HTMLElement)
app.render(<App />)
