import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FiltersProvider } from './context/FilterContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>
)
