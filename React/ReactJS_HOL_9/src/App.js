import { useState } from 'react';
import './App.css';
import ListOfPlayers from './Components/ListOfPlayers';
import IndianPlayers from './Components/IndianPlayers';
import players from './players';

function App() {
  const [flag, setFlag] = useState(true);

  return (
    <main className="app">
      <header>
        <p>ES6 map, filter, arrow functions, destructuring and spread</p>
        <h1>Cricket App</h1>
        <button type="button" onClick={() => setFlag((current) => !current)}>
          {flag ? 'Show Indian Team' : 'Show Player Scores'}
        </button>
      </header>

      <div className="content">
        {flag ? <ListOfPlayers players={players} /> : <IndianPlayers />}
      </div>
    </main>
  );
}

export default App;
