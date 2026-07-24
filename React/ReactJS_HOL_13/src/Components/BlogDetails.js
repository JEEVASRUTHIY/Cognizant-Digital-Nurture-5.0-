function BlogDetails({ blogs }) {
  return (
    <section className="details-column">
      <h2>Blog Details</h2>
      {blogs.map((blog) => (
        <article key={blog.id}>
          <h3>{blog.title}</h3>
          <strong>{blog.author}</strong>
          <p>{blog.description}</p>
        </article>
      ))}
    </section>
  );
}

export default BlogDetails;
