import React, { useState } from "react";
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Client-side validation
    if (!name || !name.trim()) {
      setError('Name is required');
      setLoading(false);
      return;
    }

    if (!email || !email.trim()) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    if (!password || password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    try {
      const result = await signup(name.trim(), email.trim(), password);
      
      if (result && result.success) {
        // Redirect to dashboard or home page
        navigate('/dashboard');
      } else {
        setError(result?.error || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error in component:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section - Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="images/account_open.svg"
            alt="Signup"
            className="img-fluid"
            style={{ maxWidth: "80%", height: "auto" }}
          />
        </div>

        {/* Right Section - Form */}
        <div className="col-md-6">
          <h2 className="text-center mb-4 fw-bold">Create Your TradeMate Account</h2>
          {error && <div className="error-message mb-3">{error}</div>}
          <form className="p-4 border rounded shadow-sm bg-light" onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name" className="fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="email" className="fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group mb-4">
              <label htmlFor="password" className="fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password (min 6 characters)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                disabled={loading}
              />
              <small className="text-muted">Password must be at least 6 characters</small>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2"
                style={{ borderRadius: "8px" }}
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Sign Up'}
              </button>
            </div>
          </form>
          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
