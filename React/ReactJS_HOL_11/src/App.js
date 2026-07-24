import './App.css';
import Counter from './Components/Counter';
import CurrencyConverter from './Components/CurrencyConverter';

function App() {
  return (
    <main className="app">
      <header>
        <p>React event handling and synthetic events</p>
        <h1>Event Examples</h1>
      </header>
      <div className="examples">
        <Counter />
        <CurrencyConverter />
      </div>
    </main>
  );
}

export default App;
