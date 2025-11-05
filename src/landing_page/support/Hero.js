import React, { useState } from "react";

function Hero() {
  // ✅ FAQ Data grouped by category
  const faqData = [
    {
      category: "Account Opening",
      questions: [
        { q: "How do I open an account?", a: "You can open an account online by submitting your PAN, Aadhaar, and bank details through our signup page." },
        { q: "Can I open a minor account?", a: "Yes, minor accounts can be opened under guardian supervision by submitting additional documents." },
      ],
    },
    {
      category: "Your TradeMate Account",
      questions: [
        { q: "How can I reset my password?", a: "Click on ‘Forgot Password’ on the login page and follow the email instructions." },
        { q: "How do I change my registered mobile number?", a: "Go to Settings → Profile → Edit Number and verify using OTP." },
      ],
    },
    {
      category: "Trading Platform",
      questions: [
        { q: "Why is my order not executing?", a: "Ensure you have sufficient funds and correct order type. If issue persists, contact support." },
        { q: "Can I trade in futures and options?", a: "Yes, F&O trading is available after activating derivatives in your account settings." },
      ],
    },
    {
      category: "Funds",
      questions: [
        { q: "How do I add funds to my account?", a: "You can add funds via UPI, Netbanking, or Bank Transfer through the Funds section." },
        { q: "How long does withdrawal take?", a: "Withdrawals are processed within 24 hours on working days." },
      ],
    },
  ];

  // ✅ State for search and dropdowns
  const [searchTerm, setSearchTerm] = useState("");
  const [openCategory, setOpenCategory] = useState(null);

  // ✅ Filter logic
  const filteredFAQs = faqData
    .map((section) => ({
      ...section,
      questions: section.questions.filter((q) =>
        q.q.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.questions.length > 0);

  return (
    <div className="container py-5" style={{ maxWidth: "800px" }}>
      <h2 className="fw-bold mb-4 text-center">Support Portal</h2>

      {/* 🔍 Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control shadow-sm"
          placeholder="Eg: How do I open my account...."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 📂 Categories */}
      {(searchTerm ? filteredFAQs : faqData).map((section, i) => (
        <div key={i} className="mb-3 border rounded shadow-sm">
          <div
            className="d-flex justify-content-between align-items-center p-3"
            style={{ cursor: "pointer", backgroundColor: "#f9f9f9" }}
            onClick={() => setOpenCategory(openCategory === i ? null : i)}
          >
            <div className="fw-semibold">{section.category}</div>
            <i
              className={`bi ${
                openCategory === i ? "bi-chevron-up" : "bi-chevron-down"
              }`}
            ></i>
          </div>

          {/* 🧾 Dropdown Questions */}
          {openCategory === i && (
            <div className="p-3 bg-white">
              {section.questions.map((item, j) => (
                <div key={j} className="mb-3">
                  <div className="fw-semibold text-primary mb-1">
                    {item.q}
                  </div>
                  <div className="text-muted small">{item.a}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Hero;
