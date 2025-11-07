import React, { useState } from 'react';
import './Formulario.css';

function Formulario({ onAgregar, onVolver }) {
const [formData, setFormData] = useState({
    titulo: '',
    genero: '',
    año: '',
    director: '',
    trailer: '',
    imagen: '',
    descripcion: ''
});
const [errores, setErrores] = useState({});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errores[name]) {
    setErrores({ ...errores, [name]: '' });
    }
};

const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
    if (!file.type.startsWith('image/')) {
        alert('Por favor selecciona un archivo de imagen válido');
        return;
    }
    
    const reader = new FileReader();
    reader.onloadend = () => {
        setFormData({ ...formData, imagen: reader.result });
    };
    reader.readAsDataURL(file);
    }
};

const eliminarImagen = () => {
    setFormData({ ...formData, imagen: '' });
    const fileInput = document.getElementById('imagen-input');
    if (fileInput) fileInput.value = '';
};

const handleSubmit = (e) => {
    e.preventDefault();
    
    const nuevosErrores = {};
    if (!formData.titulo) nuevosErrores.titulo = 'El título es obligatorio';
    if (!formData.genero) nuevosErrores.genero = 'El género es obligatorio';
    if (!formData.año) {
    nuevosErrores.año = 'El año es obligatorio';
    } else if (formData.año < 1900 || formData.año > 2025) {
    nuevosErrores.año = 'El año debe estar entre 1900 y 2025';
    }

    if (Object.keys(nuevosErrores).length > 0) {
    setErrores(nuevosErrores);
    return;
    }

    onAgregar(formData);
    alert(`Película "${formData.titulo}" agregada exitosamente!`);
    setFormData({ titulo: '', genero: '', año: '', director: '', trailer: '', imagen: '', descripcion: '' });
    setErrores({});
    onVolver();
};

return (
    <div className="container">
    <header>
        <h1>Agregar Nueva Película</h1>
        <button onClick={onVolver} className="btn-volver">
        ← Volver
        </button>
    </header>

    <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
        <label>Título de la Película *</label>
        <input
            type="text"
            name="titulo"
            value={formData.titulo}
            onChange={handleInputChange}
            placeholder="Ej: Inception"
        />
        {errores.titulo && <span className="error">{errores.titulo}</span>}
        </div>

        <div className="form-group">
        <label>Género *</label>
        <select 
            name="genero"
            value={formData.genero}
            onChange={handleInputChange}
        >
            <option value="">Selecciona un género</option>
            <option value="Acción">Acción</option>
            <option value="Comedia">Comedia</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Terror">Terror</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Aventura">Aventura</option>
            <option value="Animación">Animación</option>
        </select>
        {errores.genero && <span className="error">{errores.genero}</span>}
        </div>

        <div className="form-group">
        <label>Año de Estreno *</label>
        <input
            type="number"
            name="año"
            value={formData.año}
            onChange={handleInputChange}
            placeholder="Ej: 2010"
        />
        {errores.año && <span className="error">{errores.año}</span>}
        </div>

        <div className="form-group">
        <label>Director</label>
        <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleInputChange}
            placeholder="Ej: Christopher Nolan"
        />
        </div>

        <div className="form-group">
        <label>Portada de la Película</label>
        <input
            type="file"
            id="imagen-input"
            accept="image/*"
            onChange={handleImagenChange}
            style={{ display: 'none' }}
        />
        <label htmlFor="imagen-input" className="btn-subir-imagen">
            📁 Seleccionar Imagen
        </label>
        {formData.imagen && (
            <div className="preview-imagen">
            <img src={formData.imagen} alt="Vista previa" />
            <button type="button" onClick={eliminarImagen} className="btn-eliminar-imagen">
                ✕ Eliminar
            </button>
            </div>
        )}
        </div>

        <div className="form-group">
        <label>URL del Trailer</label>
        <input
            type="url"
            name="trailer"
            value={formData.trailer}
            onChange={handleInputChange}
            placeholder="https://www.youtube.com/watch?v=..."
        />
        </div>

        <div className="form-group">
        <label>Descripción</label>
        <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleInputChange}
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