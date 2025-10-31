import React from 'react';
import Index from './pages/Index';
import Formulario from './pages/Formulario';
import DetallePelicula from './pages/DetallePelicula';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        
        <Route path="/agregar" element={<Formulario />} />
        
        <Route path="/pelicula/:id" element={<DetallePelicula />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
