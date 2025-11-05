import React from "react";

function Signup() {
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
          <form className="p-4 border rounded shadow-sm bg-light">
            <div className="form-group mb-3">
              <label htmlFor="username" className="fw-semibold">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2"
                style={{ borderRadius: "8px" }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
