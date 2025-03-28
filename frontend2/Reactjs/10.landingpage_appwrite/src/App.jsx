import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Footer } from "./pages/Footer";
import "./App.css";
import { UserProvider, useUser } from "./lib/context/user";
import { IdeasProvider } from "./lib/context/ideas";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <UserProvider>
        <IdeasProvider>
          <Navbar />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer /> {/* Add Footer here */}
        </IdeasProvider>
      </UserProvider>
    </Router>
  );
}

function Navbar() {
  const user = useUser();

  return (
    <nav className="navbar navbar-expand-lg bg-secondary px-4 px-lg-5 py-3 py-lg-0 sticky-top">
      <a href="/" className="navbar-brand p-0">
        <h1 className="m-0 text-white">
          <i className="fas fa-search me-2"></i>ACM<span className="fs-5">TechBlog</span>
        </h1>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars text-white"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          <a href="/" className="nav-item btn text-light rounded-pill mx-2">
            Home
          </a>
          <a href="/contact" className="nav-item btn text-light rounded-pill btn-secondary mx-2">
            Contact Us
          </a>
          {user.current ? (
            <>
              <span className="nav-item text-light mx-2 d-flex align-items-center">
                <span
                  className="rounded-circle bg-primary text-light d-inline-block text-center"
                  style={{
                    width: "40px",
                    height: "40px",
                    lineHeight: "40px",
                    fontSize: "20px",
                  }}
                >
                  {user.current.email.charAt(0).toUpperCase()}
                </span>
                <span className="ms-2">{user.current.email}</span>
              </span>
              <button
                type="button"
                className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3"
                onClick={() => user.logout()}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="nav-item btn text-light rounded-pill btn-secondary mx-2">
                Login
              </a>
              <a href="/login" className="nav-item btn text-light rounded-pill btn-secondary mx-2">
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default App;
