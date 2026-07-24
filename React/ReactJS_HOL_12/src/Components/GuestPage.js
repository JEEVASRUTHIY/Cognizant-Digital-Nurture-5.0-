import FlightDetails from './FlightDetails';

function GuestPage({ onLogin }) {
  return (
    <>
      <header className="page-header">
        <div>
          <p>Guest page</p>
          <h1>Please sign up.</h1>
          <span>Browse available flights. Log in to book a ticket.</span>
        </div>
        <button type="button" onClick={onLogin}>
          Login
        </button>
      </header>

      <FlightDetails canBook={false} />
    </>
  );
}

export default GuestPage;
