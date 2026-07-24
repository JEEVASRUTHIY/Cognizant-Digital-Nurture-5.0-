function BookDetails({ books }) {
  return (
    <section className="details-column">
      <h2>Book Details</h2>
      {books.map((book) => (
        <article key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.price}</p>
        </article>
      ))}
    </section>
  );
}

export default BookDetails;
