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
