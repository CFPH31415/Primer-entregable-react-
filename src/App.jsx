import React, { useState } from 'react';
import Card from './Card';
import './index.css';

function App() {
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Manejo de cambios en los inputs
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCarChange = (event) => {
    setCar(event.target.value);
  };

  // Manejo del envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación de nombre de la banda
    if (name.length < 3 || name.startsWith(' ')) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      setSubmitted(false);
      return;
    }

    // Validación de canción favorita de la banda
    if (car.length < 6) {
      setErrorMessage('Por favor chequea que la información sea correcta');
      setSubmitted(false);
      return;
    }

    // Si las validaciones son exitosas
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Elige una banda y canción favorita</h1> {/* Título agregado */}
      <form onSubmit={handleSubmit} className="form-container">
        <input 
          type="text" 
          placeholder="Ingresa tu banda favorita" 
          value={name} 
          onChange={handleNameChange} 
        />
        <input 
          type="text" 
          placeholder="Ingresa tu canción favorita de la banda" 
          value={car} 
          onChange={handleCarChange} 
        />
        <button type="submit">ENVIAR</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {submitted && <Card name={name} car={car} />}
    </div>
  );
}

export default App;
