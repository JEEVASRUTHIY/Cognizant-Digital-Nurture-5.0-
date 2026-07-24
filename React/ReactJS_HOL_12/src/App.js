import { useState } from 'react';
import './App.css';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main className="app">
      {isLoggedIn ? (
        <UserPage onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </main>
  );
}

export default App;
