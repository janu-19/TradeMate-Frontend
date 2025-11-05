import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f9f9f9', borderTop: '1px solid #e0e0e0', padding: '40px 0', marginTop: '50px' }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center gap-2 mb-4 flex-wrap">
          <img
            src="images/TradeMateLogo.png"
            alt="TradeMate Logo"
            style={{ width: "150px", height: "40px" }}
          />
          <div className="d-flex gap-3 mt-3 mt-md-0">
            <a href="#" className="text-muted"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
            <a href="#" className="text-muted"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
            <a href="#" className="text-muted"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
            <a href="#" className="text-muted"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
          </div>
        </div>

        <div className="row text-center justify-content-center align-items-center">
          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="fw-bold mb-3">Account</h6>
            <ul className="list-unstyled ">
              <li><a href="#" className="text-muted text-decoration-none">Open demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Minor demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">NRI demat account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Commodity</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Contact us</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Support portal</a></li>
              <li><a href="#" className="text-muted text-decoration-none">File a complaint</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Downloads</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Press & media</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Open source</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Upcoming IPOs</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Brokerage charges</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Market holidays</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Calculators</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />
        <div className="text-center text-muted" style={{ fontSize: '14px' }}>
          &copy; 2025, TradeMate Pvt. Ltd. <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
