import './App.css';
import officeImage from './assets/office-space.svg';
import offices from './offices';

function App() {
  return (
    <main className="app">
      <header>
        <p>Find the right workspace for your team</p>
        <h1>Office Space, at Affordable Range</h1>
      </header>

      <div className="office-list">
        {offices.map((office) => {
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
          };

          return (
            <article className="office-card" key={office.id}>
              <img src={officeImage} alt={`${office.name} office space`} />
              <div className="office-details">
                <h2>Name: {office.name}</h2>
                <h3 style={rentStyle}>Rent: Rs. {office.rent}</h3>
                <h3>Address: {office.address}</h3>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
}

export default App;
