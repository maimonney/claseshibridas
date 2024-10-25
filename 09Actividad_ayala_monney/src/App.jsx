import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Card from './Card';
import { useState } from 'react';

function App() {
  const titulo = "Galeria de fotos";
  const texto = <p>Soy la galeria de fotos</p>;

  const imgs = [
    { gato: './img/g1.jfif' },
    { gato: './img/g2.jfif' },
    { gato: './img/g3.jfif' }
  ];

  const [indiceImagenActual, setindIceImagenActual] = useState(0);

  const changeImage = (index) => {
    setIndiceImagenActual(index);
  };

  return (
    <>
      <h1>{titulo}</h1>
      {texto}
      <div className='card cont_img'>
        <div>
        <button onClick={() => changeImage(0)}>1</button>
        <button onClick={() => changeImage(1)}>2</button>
        <button onClick={() => changeImage(2)}>3</button>
        </div>
        <div className='row'>
          <Card imgCard={imgs[indiceImagenActual].gato} />
        </div>
      </div>
    </>
  );
}

export default App;
