import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Tab } from './contexts/tabs.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Tab>
      <App />
    </Tab>

  </React.StrictMode>,
)
