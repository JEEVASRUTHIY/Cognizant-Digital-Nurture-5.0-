const flights = [
  {
    id: 1,
    flight: 'AI 202',
    from: 'Chennai',
    to: 'Delhi',
    time: '08:30',
    fare: 6500,
  },
  {
    id: 2,
    flight: '6E 718',
    from: 'Bengaluru',
    to: 'Mumbai',
    time: '11:45',
    fare: 5200,
  },
  {
    id: 3,
    flight: 'UK 832',
    from: 'Hyderabad',
    to: 'Kolkata',
    time: '17:10',
    fare: 6100,
  },
];

function FlightDetails({ canBook, onBook }) {
  return (
    <section className="flights" aria-label="Available flights">
      {flights.map((flight) => (
        <article className="flight-card" key={flight.id}>
          <span>{flight.flight}</span>
          <h2>
            {flight.from} → {flight.to}
          </h2>
          <p>
            Departure: {flight.time} · Fare: ₹{flight.fare}
          </p>

          {canBook && (
            <button type="button" onClick={() => onBook(flight)}>
              Book Ticket
            </button>
          )}
        </article>
      ))}
    </section>
  );
}

export default FlightDetails;
