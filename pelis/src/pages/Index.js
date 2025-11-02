import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Index.css';

function Index() {

    const [peliculas] = useState([]);

    return (
        <div className="container">
        
        <header>
            <h1>Catálogo de Películas</h1>
            
            <NavLink to="/agregar" className="btn-agregar">
            + Agregar Película
            </NavLink>
        </header>
        </div>
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
    )