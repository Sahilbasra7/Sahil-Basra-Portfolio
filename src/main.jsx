import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './styles/global.css';

document.documentElement.style.scrollBehavior = 'smooth';

document.body.style.fontFamily =
  "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
document.body.style.lineHeight = '1.6';
document.documentElement.style.scrollBehavior = 'smooth';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
