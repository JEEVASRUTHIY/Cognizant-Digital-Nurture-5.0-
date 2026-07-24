function CourseDetails({ courses }) {
  if (!courses.length) {
    return null;
  }

  return (
    <section className="details-column">
      <h2>Course Details</h2>
      {courses.map((course) => (
        <article key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.date}</p>
        </article>
      ))}
    </section>
  );
}

export default CourseDetails;
