import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/css/main.css'
import DataManager from './data/dataManager.ts' // !! debug remove when done. it's for clearing cache

// init data manager
DataManager.loadData()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// !! debug; remove when done it's for when clearing cache
window.addEventListener('keydown', (e:KeyboardEvent)=>{
  if(e.key === 'm'){DataManager.clearCache()}
})