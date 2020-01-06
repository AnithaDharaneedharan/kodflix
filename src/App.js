import React from 'react';
import moviePoster  from './images/popeyeMovie.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1 >Welcome to my Movie App</h1>
     <img alt="movie_poster" src={moviePoster} />
    </div>
  );
}

export default App;
