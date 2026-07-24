import './App.css';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import { blogs, books, courses } from './data';

function App() {
  const showBooks = books.length > 0;
  const showBlogs = true;

  let bookContent;
  if (showBooks) {
    bookContent = <BookDetails books={books} />;
  } else {
    bookContent = <p>No books available.</p>;
  }

  return (
    <main className="app">
      <header>
        <p>Lists, keys, map and conditional rendering</p>
        <h1>Blogger App</h1>
      </header>

      <div className="details-grid">
        <CourseDetails courses={courses} />
        {bookContent}
        {showBlogs ? (
          <BlogDetails blogs={blogs} />
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </main>
  );
}

export default App;
