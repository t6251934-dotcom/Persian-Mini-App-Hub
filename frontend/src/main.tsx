import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.simple.tsx'
import './index.css'

// Simple initialization
console.log('Initializing Persian Mini-App Hub...');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)