import React from 'react';

function Stats() {
  return (
    <section className="stats-section py-5">
      <div className="container my-5">
  <div className="row align-items-center justify-content-center">
    <div className="col-md-5 me-md-5 text-start">
      <h2 className="fw-bold mb-3">Trust with Confidence</h2>
      <p><strong>Customer-first, always.</strong> That’s why over <strong>1.6+ crore investors</strong> trust <strong>TradeMate</strong> with their portfolios — managing investments worth ₹6 lakh crores and contributing to <strong>15% of India’s daily retail exchange volumes.</strong></p>

      <h5 className=" mt-4">No Spam or Gimmicks</h5>
      <p className='text-muted'>No clutter, no distractions — just high-quality investing tools designed for clarity and confidence.</p>

      <h5 className=" mt-4">The TradeMate Universe</h5>
      <p className='text-muted'>TradeMate isn’t just an app — it’s a full ecosystem. Our fintech partnerships offer seamless access to insights, analytics, and personalized financial tools.</p>

      <h5 className=" mt-4">Do Better with Money</h5>
      <p className='text-muted'>With tools like Nudge and SmartGuard, we help you make informed, confident investment decisions every day.</p>

      <div className="mt-4">
        <button className="btn btn-outline-primary me-3">Explore our Products</button>
        <button className="btn btn-primary">Try TradeMate Demo</button>
      </div>
    </div>

    <div className="col-md-5">
      <img
        src="images/ecosystem.png"
        alt="Ecosystem"
        className="img-fluid ms-md-5"
        style={{ width: "95%" }}
      />
    </div>
  </div>
</div>

    </section>
  );
}

export default Stats;
