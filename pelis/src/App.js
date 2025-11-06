import React, { useState } from 'react';
import Index from './pages/Index';
import Formulario from './pages/Formulario';
import DetallePelicula from './pages/DetallePelicula';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [vista, setVista] = useState('lista'); // 'lista', 'agregar', 'detalle'
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  const agregarPelicula = (nuevaPelicula) => {
    const pelicula = {
      ...nuevaPelicula,
      id: Date.now()
    };
    setPeliculas([...peliculas, pelicula]);
  };

  const verDetalle = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setVista('detalle');
  };

  const irALista = () => {
    setVista('lista');
    setPeliculaSeleccionada(null);
  };

  const irAFormulario = () => {
    setVista('agregar');
  };

  if (vista === 'agregar') {
    return <Formulario onAgregar={agregarPelicula} onVolver={irALista} />;
  }

  if (vista === 'detalle') {
    return <DetallePelicula pelicula={peliculaSeleccionada} onVolver={irALista} />;
  }

  return <Index peliculas={peliculas} onVerDetalle={verDetalle} onAgregar={irAFormulario} />;
}

export default App;