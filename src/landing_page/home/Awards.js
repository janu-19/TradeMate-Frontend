import React from 'react';

function Awards() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        {/* Left Side - Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="images/largestBroker.svg"
            alt="Award 1"
            className="img-fluid"
            style={{ maxWidth: '80%', height: 'auto' }}
          />
        </div>

        {/* Right Side - Text */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Largest Stock Broker in India</h2>
          <p className="text-muted mb-2">
            Based on active clients as of December 2023, TradeMate continues to lead India's investment revolution.
          </p>
          <p>
            With over <strong>10 million+ active users</strong> and counting, TradeMate empowers investors across the country
            with transparent pricing, cutting-edge tools, and a seamless trading experience.
          </p>
          <p>
            From beginner investors to seasoned traders, our mission is simple — to make investing smarter, faster, and easier for everyone.
          </p>
          <img src='images/pressLogos.png' alt="Press Logos" className='img-fluid mt-3'/>
        </div>
      </div>
    </div>
  );
}

export default Awards;
