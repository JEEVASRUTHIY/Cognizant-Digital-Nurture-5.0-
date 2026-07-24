import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
      error: null,
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );

      if (!response.ok) {
        throw new Error('Unable to load posts');
      }

      const data = await response.json();
      const posts = data.map(
        ({ id, title, body }) => new Post(id, title, body)
      );

      this.setState({ posts, loading: false, error: null });
    } catch (error) {
      this.setState({ loading: false, error: error.message });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    this.setState({ error: error.message, loading: false });
    window.alert(`An error occurred: ${error.message}`);
    console.error('Component error information:', info);
  }

  render() {
    const { posts, loading, error } = this.state;

    if (loading) {
      return <p className="status">Loading posts...</p>;
    }

    if (error) {
      return (
        <p className="status error" role="alert">
          {error}
        </p>
      );
    }

    return (
      <section className="posts">
        {posts.map((post) => (
          <article className="post-card" key={post.id}>
            <span className="post-number">Post {post.id}</span>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        ))}
      </section>
    );
  }
}

export default Posts;
