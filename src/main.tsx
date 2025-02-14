import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
// import { Todos } from './todos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Todos /> */}
    <App />
  </React.StrictMode>,
)
