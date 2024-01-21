// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='set-0 purple-dark text-foreground bg-background'>
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
)