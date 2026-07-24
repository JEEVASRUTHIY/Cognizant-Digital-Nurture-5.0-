import './App.css';
import CohortDetails from './CohortDetails';
import cohorts from './cohorts';

function App() {
  return (
    <main className="app">
      <section className="cohorts" aria-labelledby="cohorts-title">
        <h1 id="cohorts-title">Cohorts Details</h1>

        <div className="cohort-list">
          {cohorts.map((cohort) => (
            <CohortDetails key={cohort.id} cohort={cohort} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
