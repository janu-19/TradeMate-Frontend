import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm"
      style={{
        backgroundColor: "white",
        width: "100%",
        zIndex: "1000",
      }}
    >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="images/TradeMateLogo.png"
            alt="TradeMate Logo"
            style={{ width: "150px", height: "40px" }}
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav gap-4 me-auto">
            <Link className="nav-link fw-semibold" to="/">Home</Link>
            <Link className="nav-link fw-semibold" to="/about">About</Link>
            <Link className="nav-link fw-semibold" to="/products">Products</Link>
            <Link className="nav-link fw-semibold" to="/pricing">Pricing</Link>
            <Link className="nav-link fw-semibold" to="/support">Support</Link>
          </div>
          <div className="navbar-nav d-flex align-items-center gap-3 ms-auto">
            {isAuthenticated ? (
              <>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="nav-link fw-semibold" to="/login">Login</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
