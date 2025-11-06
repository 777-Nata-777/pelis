import React from 'react';
import './Index.css';

function Index({ peliculas, onVerDetalle, onAgregar }) {
return (
    <div className="container">
    <header>
        <h1>🎬 Catálogo de Películas</h1>
        <button onClick={onAgregar} className="btn-agregar">
        + Agregar Película
        </button>
    </header>

    {peliculas.length === 0 ? (
        <div className="empty-state">
        <div className="empty-icon">🎥</div>
        <h2>No hay películas aún</h2>
        <p>Comienza agregando tu primera película al catálogo</p>
        </div>
    ) : (
        <div className="peliculas-grid">
        {peliculas.map((pelicula) => (
            <div 
            key={pelicula.id}
            className="pelicula-card"
            onClick={() => onVerDetalle(pelicula)}
            >
            {pelicula.imagen ? (
                <div className="pelicula-portada">
                <img src={pelicula.imagen} alt={pelicula.titulo} />
                </div>
            ) : (
                <div className="pelicula-icon">🎥</div>
            )}
            <h3>{pelicula.titulo}</h3>
            <p className="genero">{pelicula.genero}</p>
            <p className="año">Año: {pelicula.año}</p>
            </div>
        ))}
        </div>
    )}
    </div>
);
}

export default Index;