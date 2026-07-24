import { useState } from 'react';
import FlightDetails from './FlightDetails';

function UserPage({ onLogout }) {
  const [confirmation, setConfirmation] = useState('');

  const bookFlight = (flight) => {
    setConfirmation(`${flight.flight} ticket booked successfully.`);
  };

  return (
    <>
      <header className="page-header">
        <div>
          <p>User page</p>
          <h1>Welcome back</h1>
          <span>Select a flight and book your ticket.</span>
        </div>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </header>

      {confirmation && (
        <p className="confirmation" role="status">
          {confirmation}
        </p>
      )}

      <FlightDetails canBook onBook={bookFlight} />
    </>
  );
}

export default UserPage;
