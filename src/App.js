import React from 'react';
import './App.css';
import CardList from './components/CardList'

function App() {
  return (
    <div>
      <header>
      </header>
      <body>
        <section id="intro">
          <h1>Inspiration Board</h1>
          <h2>What is an inspiration board?</h2>
          <p>A collage of various items, as photographs, drawings, words, fabric swatches,
            paint chips, and textures, used to visualize specifics in the design of a
            project or event.
            <span className="source"> - <a href="https://www.dictionary.com/browse/inspiration-board">
              dictionary.com</a></span>
          </p>
          <p>But on this site, you can create boards to collect your favorite movie quotes or
            to send positive notes to future you.</p>
          <h2>Site features:</h2>
          <ul>
            <li>Add a board</li>
            <li>Add a card</li>
            <li>View a board</li>
            <li>View all boards</li>
          </ul>
        </section>
        <section>
          <CardList></CardList>
        </section>
      </body>
    </div>
  );
}

export default App;
