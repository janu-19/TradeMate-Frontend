import React from 'react';

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="images/education.svg"
            alt="Award 1"
            className="img-fluid"
            style={{ maxWidth: '80%', height: 'auto' }}
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Free and open market education</h2>
          <br/>
          <p className="text-muted mb-2">
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p>
          <br/>
          <p className="text-muted mb-2">
             TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default Education;
