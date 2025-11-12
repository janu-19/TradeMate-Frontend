import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="about-page" style={{ backgroundColor: "#f9f9f9" }}>
      {/* Hero Section */}
      <section
        className="text-center py-5"
        style={{ backgroundColor: "#ffffff", borderBottom: "1px solid #e0e0e0" }}
      >
        <h2 className="fw-bold mb-3">Simplifying Investments for Everyone</h2>
        <p className="text-muted fs-5 mb-4">
          TradeMate is on a mission to make trading easy, transparent, and accessible for all investors.
        </p>
        <button 
          className="btn btn-primary px-4 py-2" 
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </section>

      {/* Story Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="images/ourstory.jpg"
              alt="Our Story"
              className="img-fluid rounded-3 shadow-sm"
            />
          </div>
          <div className="col-md-6">
            <h3 className="fw-bold mb-3">Our Story</h3>
            <p className="text-muted">
              TradeMate was built by a group of passionate finance enthusiasts who wanted to remove
              the confusion from investing. We started with a simple idea — empower individuals to
              make smarter financial decisions through technology, simplicity, and trust.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 text-center" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <h3 className="fw-bold mb-4">Our Mission & Vision</h3>
          <p className="text-muted mb-2">
            <strong>Mission:</strong> To simplify trading and make financial growth accessible for every Indian.
          </p>
          <p className="text-muted">
            <strong>Vision:</strong> To become the most trusted and user-friendly investment platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-5">
        <h3 className="fw-bold text-center mb-5">What We Offer</h3>
        <div className="row text-center">
          <div className="col-md-3 col-6 mb-4">
            <div className="p-3 border rounded-3 shadow-sm h-100">
              
              <h6 className="fw-semibold mt-2">Zero Hidden Charges</h6>
              <p className="text-muted small">Trade with transparency and no surprises.</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-3 border rounded-3 shadow-sm h-100">
              
              <h6 className="fw-semibold mt-2">Real-Time Analytics</h6>
              <p className="text-muted small">Track your performance with live insights.</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-3 border rounded-3 shadow-sm h-100">
              
              <h6 className="fw-semibold mt-2">Secure Trading</h6>
              <p className="text-muted small">Your data and funds are fully protected.</p>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="p-3 border rounded-3 shadow-sm h-100">
              
              <h6 className="fw-semibold mt-2">24/7 Support</h6>
              <p className="text-muted small">We’re here for you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Hero;
