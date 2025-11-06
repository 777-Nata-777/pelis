import React from 'react';
import './DetallePelicula.css';

function DetallePelicula({ pelicula, onVolver }) {
if (!pelicula) {
    return (
    <div className="container">
        <button onClick={onVolver} className="btn-volver">
        ← Volver al Inicio
        </button>
        <div className="not-found">
        <h2>Película no encontrada</h2>
        <p>No hay información disponible para esta película.</p>
        </div>
    </div>
    );
}

// Función para convertir URL de YouTube a formato embed
const getYouTubeEmbedUrl = (url) => {
    if (!url) return null;
    
    // Manejar diferentes formatos de URLs de YouTube
    let videoId = null;
    
    if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
    videoId = url.split('embed/')[1]?.split('?')[0];
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

const embedUrl = getYouTubeEmbedUrl(pelicula.trailer);

return (
    <div className="container">
    <button onClick={onVolver} className="btn-volver">
        ← Volver al Inicio
    </button>

    <div className="detalle-pelicula">
        <div className="pelicula-header">
        {pelicula.imagen ? (
            <div className="pelicula-portada-grande">
            <img src={pelicula.imagen} alt={pelicula.titulo} />
            </div>
        ) : (
            <div className="pelicula-icon-grande">🎬</div>
        )}
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

        {embedUrl && (
            <div className="info-item trailer">
            <strong>Trailer:</strong>
            <div className="video-container">
                <iframe
                src={embedUrl}
                title="Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </div>
        )}
        </div>
    </div>
    </div>
);
}

export default DetallePelicula;