import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import './Formulario.css';

function Formulario() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log('Película agregada:', data);
        alert(`Película "${data.titulo}" agregada exitosamente!`);
        navigate('/');
    };

    return (
        <div className="container">
        <header>
            <h1>Agregar Nueva Película</h1>
            <NavLink to="/" className="btn-volver">
            ← Volver al Inicio
            </NavLink>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="formulario">
            
            <div className="form-group">
            <label>Título de la Película *</label>
            <input
                type="text"
                {...register('titulo', { required: 'El título es obligatorio' })}
                placeholder="Ej: Inception"
            />
            {errors.titulo && <span className="error">{errors.titulo.message}</span>}
            </div>

            <div className="form-group">
            <label>Género *</label>
            <select {...register('genero', { required: 'El género es obligatorio' })}>
                <option value="">Selecciona un género</option>
                <option value="Acción">Acción</option>
                <option value="Comedia">Comedia</option>
                <option value="Drama">Drama</option>
                <option value="Terror">Terror</option>
                <option value="Ciencia Ficción">Ciencia Ficción</option>
                <option value="Romance">Romance</option>
            </select>
            {errors.genero && <span className="error">{errors.genero.message}</span>}
            </div>

            <div className="form-group">
            <label>Año de Estreno *</label>
            <input
                type="number"
                {...register('año', { 
                required: 'El año es obligatorio',
                min: { value: 1900, message: 'Año debe ser mayor a 1900' },
                max: { value: 2025, message: 'Año debe ser menor a 2025' }
                })}
                placeholder="Ej: 2010"
            />
            {errors.año && <span className="error">{errors.año.message}</span>}
            </div>
            <div className="form-group">
            <label>Descripción</label>
            <textarea
                {...register('descripcion')}
                placeholder="Escribe una breve descripción de la película..."
                rows="4"
            />
            </div>
            <button type="submit" className="btn-submit">
            Agregar Película
            </button>
        </form>
        </div>
    );
}

export default Formulario;