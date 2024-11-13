import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={"https://lucasstaudt.github.io/wedding/"}>
      <Home />
    </BrowserRouter>
  </StrictMode>,
)