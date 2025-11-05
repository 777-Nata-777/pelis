import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Index.css';

function Index() {
    const [peliculas] = useState([
        {
            id: 1,
            titulo: "El Padrino",
            genero: "Drama",
            año: 1972,
            descripcion: "Una épica historia de la familia Corleone."
        },
        {
            id: 2,
            titulo: "Pulp Fiction",
            genero: "Crimen",
            año: 1994,
            descripcion: "Historias interconectadas en el mundo del crimen."
        }
    ]);

    return (
        <div className="container">
            <header>
                <h1>Catálogo de Películas</h1>
                <NavLink to="/agregar" className="btn-agregar">
                    + Agregar Película
                </NavLink>
            </header>

            <div className="peliculas-grid">
                {peliculas.map((pelicula) => (
                    <NavLink 
                        to={`/pelicula/${pelicula.id}`}
                        key={pelicula.id}
                        className="pelicula-card"
                    >
                        <div className="pelicula-icon">🎥</div>
                        <h3>{pelicula.titulo}</h3>
                        <p className="genero">{pelicula.genero}</p>
                        <p className="año">Año: {pelicula.año}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Index;