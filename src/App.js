import React from 'react';
import './App.css';

const letters = [
  { letter: 'A', word: 'Apple', image: '🍎', phonetic: '/ˈæ/', translation: 'Manzana' },
  { letter: 'B', word: 'Ball', image: '🏀', phonetic: '/bɔːl/', translation: 'Pelota' },
  { letter: 'C', word: 'Cat', image: '🐱', phonetic: '/kæt/', translation: 'Gato' },
  { letter: 'D', word: 'Dog', image: '🐶', phonetic: '/dɔg/', translation: 'Perro' },
  { letter: 'E', word: 'Elephant', image: '🐘', phonetic: '/ˈɛlɪfənt/', translation: 'Elefante' },
  { letter: 'F', word: 'Fish', image: '🐟', phonetic: '/fɪʃ/', translation: 'Pez' },
  { letter: 'G', word: 'Guitar', image: '🎸', phonetic: '/ɡɪˈtɑːr/', translation: 'Guitarra' },
  { letter: 'H', word: 'House', image: '🏠', phonetic: '/haʊs/', translation: 'Casa' },
  { letter: 'I', word: 'Ice cream', image: '🍦', phonetic: '/aɪs kriːm/', translation: 'Helado' },
  { letter: 'J', word: 'Juice', image: '🧃', phonetic: '/dʒuːs/', translation: 'Jugo' },
  { letter: 'K', word: 'Kite', image: '🪁', phonetic: '/kaɪt/', translation: 'Cometa' },
  { letter: 'L', word: 'Lion', image: '🦁', phonetic: '/ˈlaɪən/', translation: 'León' },
  { letter: 'M', word: 'Moon', image: '🌕', phonetic: '/muːn/', translation: 'Luna' },
  { letter: 'N', word: 'Nose', image: '👃', phonetic: '/noʊz/', translation: 'Nariz' },
  { letter: 'O', word: 'Orange', image: '🍊', phonetic: '/ˈɔːrɪndʒ/', translation: 'Naranja' },
  { letter: 'P', word: 'Pencil', image: '✏️', phonetic: '/ˈpensəl/', translation: 'Lápiz' },
  { letter: 'Q', word: 'Queen', image: '👑', phonetic: '/kwiːn/', translation: 'Reina' },
  { letter: 'R', word: 'Rainbow', image: '🌈', phonetic: '/ˈreɪnboʊ/', translation: 'Arcoíris' },
  { letter: 'S', word: 'Sun', image: '☀️', phonetic: '/sʌn/', translation: 'Sol' },
  { letter: 'T', word: 'Tiger', image: '🐯', phonetic: '/ˈtaɪɡər/', translation: 'Tigre' },
  { letter: 'U', word: 'Umbrella', image: '☂️', phonetic: '/ʌmˈbrɛlə/', translation: 'Sombrilla' },
  { letter: 'V', word: 'Violin', image: '🎻', phonetic: '/ˌvaɪəˈlɪn/', translation: 'Violín' },
  { letter: 'W', word: 'Whale', image: '🐳', phonetic: '/weɪl/', translation: 'Ballena' },
  { letter: 'X', word: 'Xylophone', image: '🎼', phonetic: '/ˈzaɪləˌfoʊn/', translation: 'Xilófono' },
  { letter: 'Y', word: 'Yogurt', image: '🥣', phonetic: '/ˈjoʊɡərt/', translation: 'Yogur' },
  { letter: 'Z', word: 'Zebra', image: '🦓', phonetic: '/ˈziːbrə/', translation: 'Cebra' }
];

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function App() {
  return (
    <div className="App">
      <h1>Learn the Alphabet with Yei J.J.</h1>
      <p>Hi! I'm Yei J.J. Let's learn the ABCs together!</p>
      <div className="letters">
        {letters.map(({ letter, word, image, phonetic, translation }) => (
          <div key={letter} className="card" title={`Translation: ${translation}`}>
            <h2>{letter}</h2>
            <div className="icon">{image}</div>
            <p>{word} <span className="phonetic">({phonetic})</span></p>
            <button onClick={() => speak(word)} className="speak-button">🔊</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
