import React from "react";

function Navbar() {
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
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="images/TradeMateLogo.png"
            alt="TradeMate Logo"
            style={{ width: "150px", height: "40px" }}
          />
        </a>

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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex align-items-center gap-4">
            <a className="nav-link fw-semibold" href="/signup">Sign Up</a>
            <a className="nav-link fw-semibold" href="/about">About</a>
            <a className="nav-link fw-semibold" href="/products">Products</a>
            <a className="nav-link fw-semibold" href="/pricing">Pricing</a>
            <a className="nav-link fw-semibold" href="/support">Support</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
