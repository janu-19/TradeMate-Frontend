import React from 'react';
import { useNavigate } from 'react-router-dom';
function Hero() {
  const navigate = useNavigate();
  return (
    <section className="hero-section py-5 text-center">
      <div className="container">
        {/* Hero Image */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-10">
            <img
              src="images/homeHero.png"
              alt="Hero"
              className="img-fluid"
              style={{ maxWidth: '70%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="fw-bold mb-3">Invest in Everything</h2>
            <p className="text-muted fs-5 mb-4">
              TradeMate is your one-stop online platform to invest in stocks, derivatives,
              mutual funds, ETFs, bonds, and more — all in one place.
            </p>
            <button className="btn btn-primary px-5 py-2 fw-semibold" onClick={() => window.location.href = '/signup'}>
              Start Investing Now {() => navigate('/signup')} 
            </button> {() => navigate('/signup')} 
          </div> 
        </div>  
      </div>
    </section>
  );
}

export default Hero;
