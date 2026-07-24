import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <main className="app">
      <CalculateScore
        name="Steeve"
        school="DNV Public School"
        total={284}
        goal={3}
      />
    </main>
  );
}

export default App;
