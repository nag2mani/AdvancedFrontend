// pages/Register.jsx

import { useState } from "react";
import { useUser } from "../lib/context/user";
import "bootstrap/dist/css/bootstrap.min.css";

export function Register() {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password === confirmPassword) {
      user.register(email, password);
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center mt-3">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Register</h3>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleRegister}
            >
              Register
            </button>
          </form>
          <div className="text-center mt-3">
            <a href="/login">Already have an account? Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}