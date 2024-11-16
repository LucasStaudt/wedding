import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import Trajes from './pages/Trajes.tsx';
import PreWedding from './pages/PreWedding.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/wedding/" element={<Home />} />
        <Route path="/wedding/trajes" element={<Trajes />} />
        <Route path="/wedding/pre-wedding" element={<PreWedding />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
