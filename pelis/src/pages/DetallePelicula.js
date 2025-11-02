import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import './DetallePelicula.css';

function DetallePelicula() {

    const { id } = useParams();

    const peliculas = {};

    const pelicula = peliculas[id];

    if (!pelicula) {
        return (
        <div className="container">
            <h2>Película no encontrada</h2>
            <p>No hay información disponible para esta película.</p>
            <NavLink to="/" className="btn-volver">← Volver al Inicio</NavLink>
        </div>
        );
    }

    return (
        <div className="container">
        <NavLink to="/" className="btn-volver">
            ← Volver al Inicio
        </NavLink>

        <div className="detalle-pelicula">
            <div className="pelicula-header">
            <div className="pelicula-icon-grande">🎬</div>
            <h1>{pelicula.titulo}</h1>
            </div>

            <div className="pelicula-info">
            <div className="info-item">
                <strong>Género:</strong> {pelicula.genero}
            </div>
            
            <div className="info-item">
                <strong>Año:</strong> {pelicula.año}
            </div>
            
            {pelicula.director && (
                <div className="info-item">
                <strong>Director:</strong> {pelicula.director}
                </div>
            )}
            
            {pelicula.descripcion && (
                <div className="info-item descripcion">
                <strong>Descripción:</strong>
                <p>{pelicula.descripcion}</p>
                </div>
            )}
            </div>
        </div>
        </div>
    );
}

export default DetallePelicula;