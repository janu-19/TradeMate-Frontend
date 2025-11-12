import React from 'react';
import { useNavigate } from 'react-router-dom';

function Team() {
  const navigate = useNavigate();

  const handleOpenAccount = () => {
    navigate('/signup');
  };

  return (
    <div className="team-page" style={{ backgroundColor: "#f9f9f9" }}>
      
      {/* Founder Section */}
      <section className="container py-5" style={{ backgroundColor: "#ffffff", borderRadius: "12px" }}>
        <div className="row align-items-center">
          
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <img
              src="images/herosection.jpg"
              alt="Founder Illustration"
              className="img-fluid rounded-3 shadow-sm"
              style={{ maxWidth: "90%", height: "auto" }}
            />
          </div>

          {/* Text */}
          <div className="col-md-6 text-start">
            <h3 className="fw-bold mb-3">Meet the Founder</h3>
            <p className="text-muted mb-3">
              Hi, I'm <strong>Jahnavi</strong> — the founder and developer behind <strong>TradeMate</strong>.
              I built this platform as part of my full-stack learning journey, combining my love for
              technology and finance to create a product that simplifies trading for everyone.
            </p>
            <p className="text-muted">
              My goal is to empower individuals with the tools and confidence to take control of their investments,
              while ensuring transparency and ease of use for all users.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="text-center py-5 mt-5"
        style={{ backgroundColor: "#ffffff", borderTop: "1px solid #e0e0e0" }}
      >
        <h4 className="fw-bold mb-3">Join us on our mission to simplify trading</h4>
        <p className="mb-4 text-muted">Start your investment journey today with TradeMate.</p>
        <button 
          className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
          onClick={handleOpenAccount}
        >
          Open Account
        </button>
      </section>
    </div>
  );
}

export default Team;
