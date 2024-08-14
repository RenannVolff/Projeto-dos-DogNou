import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [dogData, setDogData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const response = await axios.get('https://api.thedogapi.com/v1/images/search?include_breeds=true&limit=5');
        setDogData(response.data);
      } catch (err) {
        setError('Erro ao buscar dados da API. Por favor, tente novamente.');
      }
    };

    fetchDogData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Galeria de Cães</h1>
        <p>Explore diferentes raças de cães com imagens e informações detalhadas.</p>
      </header>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="dog-container">
          {dogData.length > 0 ? (
            dogData.map((dog, index) => (
              <div key={index} className="dog-card">
                <img src={dog.url} alt="Random Dog" className="dog-image" />
                {dog.breeds && dog.breeds.length > 0 ? (
                  <div className="dog-info">
                    <h2>{dog.breeds[0].name}</h2>
                    <p><strong>Temperamento:</strong> {dog.breeds[0].temperament}</p>
                    <p><strong>Peso:</strong> {dog.breeds[0].weight.metric} kg</p>
                    <p><strong>Altura:</strong> {dog.breeds[0].height.metric} cm</p>
                    <p><strong>Esperança de vida:</strong> {dog.breeds[0].life_span}</p>
                  </div>
                ) : (
                  <p>Informações da raça: Lorem ipsum dolor sit amet. Est dolore assumenda ea facilis incidunt et esse 
                    laborum. Est consectetur necessitatibus est iste quod sit omnis autem aut doloribus accusantium.</p>
                )}
              </div>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;