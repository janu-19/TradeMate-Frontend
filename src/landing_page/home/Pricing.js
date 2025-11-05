import React from "react";

function Pricing() {
  return (
    <div className="container text-center my-5 py-5">
      {/* Heading */}
      <h2 className="fw-bold mb-3">Unbeatable Pricing</h2>
      <p className="text-muted mb-4" style={{ fontSize: "1.1rem" }}>
        We pioneered the concept of discount broking and price transparency in India. 
        Flat fees and no hidden charges.
      </p>

      <a href="#pricing" className="text-primary fw-semibold mb-5 d-inline-block">
        See pricing →
      </a>

      {/* Pricing Cards */}
      <div className="row justify-content-center align-items-center mt-4">
        {/* Card 1 */}
        <div className="col-10 col-sm-6 col-md-3 mb-4">
          <div className="card border-0 shadow-sm py-4">
            <h1 className="fw-bold text-primary display-3 mb-2">₹0</h1>
            <p className="text-muted mb-0">Free account opening</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-10 col-sm-6 col-md-3 mb-4">
          <div className="card border-0 shadow-sm py-4">
            <h1 className="fw-bold text-primary display-3 mb-2">₹0</h1>
            <p className="text-muted mb-0">
              Free equity delivery <br /> and direct mutual funds
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-10 col-sm-6 col-md-3 mb-4">
          <div className="card border-0 shadow-sm py-4">
            <h1 className="fw-bold text-primary display-3 mb-2">₹20</h1>
            <p className="text-muted mb-0">
              Intraday and <br /> F&O trades
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
