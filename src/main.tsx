import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/css/main.css'
import DataManager from './data/dataManager.ts' 

// init data manager
DataManager.loadData()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
