import './App.css';
import Posts from './Posts';

function App() {
  return (
    <main className="app">
      <header className="page-header">
        <p>React component lifecycle</p>
        <h1>Blog Posts</h1>
      </header>
      <Posts />
    </main>
  );
}

export default App;
