import { useState } from "react";
import { useUser } from "../lib/context/user";
import { useIdeas } from "../lib/context/ideas";

export function Home() {
  const user = useUser();
  const ideas = useIdeas();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container text-center">
          <h1 className="display-4">Welcome to Tech Blog</h1>
          <p className="lead">Share your tech ideas and insights with the world.</p>
          <a href="/login" className="btn btn-primary btn-lg">Get Started</a>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="container my-4">
        <h2 className="text-center mb-4">Featured Articles</h2>
        <div className="row">
          {ideas.current.slice(0, 3).map((idea) => (
            <div key={idea.$id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{idea.title}</h5>
                  <p className="card-text">{idea.description.slice(0, 100)}...</p>
                  <a href={`/article/${idea.$id}`} className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="container my-4">
        <h2 className="text-center mb-4">Categories</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">Explore articles on front-end and back-end development.</p>
                <a href="/category/web-development" className="btn btn-primary">View Articles</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">AI</h5>
                <p className="card-text">Discover the latest trends and insights in artificial intelligence.</p>
                <a href="/category/ai" className="btn btn-primary">View Articles</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Cybersecurity</h5>
                <p className="card-text">Stay informed about the latest cybersecurity threats and solutions.</p>
                <a href="/category/cybersecurity" className="btn btn-primary">View Articles</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Readers Say</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"The articles here are always insightful and well-researched. Highly recommended!"</p>
                  <p className="card-text"><small className="text-muted">- John Doe</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"I love the variety of topics covered. It's my go-to resource for tech news."</p>
                  <p className="card-text"><small className="text-muted">- Jane Smith</small></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">"The community here is fantastic. Great place to share and learn."</p>
                  <p className="card-text"><small className="text-muted">- Alex Johnson</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show the submit form to logged in users. */}
      {user.current ? (
        <section id="submit-form" className="container my-4">
          <h2 className="text-center mb-4">Submit Your Tech Blog</h2>
          <form className="card p-4 shadow">
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                placeholder="Enter description"
                rows="4"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                ideas.add({ userId: user.current.$id, title, description })
              }
            >
              Submit
            </button>
          </form>
        </section>
      ) : (
        <section className="container my-4">
          <div className="alert alert-warning text-center">
            Please login to submit your idea.
          </div>
        </section>
      )}

      <section className="container my-4">
        <h2 className="text-center mb-4">Latest Posted Blogs</h2>
        <ul className="list-group">
          {ideas.current.map((idea) => (
            <li key={idea.$id} className="list-group-item mt-2">
              <strong>{idea.title}</strong>
              <p>{idea.description}</p>
              {/* Show the remove button to idea owner. */}
              {user.current && user.current.$id === idea.userId && (
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => ideas.remove(idea.$id)}
                >
                  Remove
                </button>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}