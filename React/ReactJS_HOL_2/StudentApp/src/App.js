import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <main className="app">
      <section className="portal" aria-labelledby="portal-title">
        <p className="eyebrow">ReactJS Hands-on Lab 2</p>
        <h1 id="portal-title">Student Management Portal</h1>

        <div className="component-list">
          <Home />
          <About />
          <Contact />
        </div>
      </section>
    </main>
  );
}

export default App;
