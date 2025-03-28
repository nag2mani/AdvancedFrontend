import { useState } from "react";
import { useUser } from "../lib/context/user";
import "bootstrap/dist/css/bootstrap.min.css";

export function Login() {
  const user = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container h-100 d-flex justify-content-center align-items-center mt-3">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
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
            <div className="form-group form-check mb-3">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={() => user.login(email, password)}
            >
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <a href="/register">Don't have an account? Sign Up</a>
          </div>
          <div className="text-center mt-2">
            <a href="/forgot-password">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}
