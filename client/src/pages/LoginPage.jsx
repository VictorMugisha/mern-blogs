import { useState } from "react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back</h1>
      <p className="login-subtitle">Login to your account</p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="login-input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>

      <p className="login-footer">
        Dont have an account?{" "}
        <a href="/register" className="login-link">
          Sign Up
        </a>
      </p>
    </div>
  );
};
