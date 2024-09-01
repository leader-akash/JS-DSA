import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SubAddContextProvider } from './contextApi/sub-add-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SubAddContextProvider>
      <App />
    </SubAddContextProvider>
  </React.StrictMode>,
)

