import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Trajes from './pages/Trajes.tsx';
import PreWedding from './pages/PreWedding.tsx';
import Presentes from './pages/Presentes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trajes" element={<Trajes />} />
        <Route path="/pre-wedding" element={<PreWedding />} />
        <Route path="/presentes" element={<Presentes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
