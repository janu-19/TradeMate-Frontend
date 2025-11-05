import React, { useState } from "react";

function BrokerageCalculator() {
  const [tradeType, setTradeType] = useState("buy");
  const [amount, setAmount] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brokerage, setBrokerage] = useState(null);

  const calculateBrokerage = () => {
    if (!amount || !quantity) {
      alert("Please enter both amount and quantity!");
      return;
    }

    const tradeValue = parseFloat(amount) * parseInt(quantity);
    const brokerageFee = Math.min(20, (0.03 / 100) * tradeValue).toFixed(2);

    setBrokerage(brokerageFee);
  };

  return (
    <div className="container py-5" style={{ maxWidth: "600px" }}>
      <h3 className="fw-bold mb-4 text-center">Brokerage Calculator</h3>

      <div className="card shadow-sm p-4">
        <div className="mb-3">
          <label className="form-label fw-semibold">Trade Type</label>
          <select
            className="form-select"
            value={tradeType}
            onChange={(e) => setTradeType(e.target.value)}
          >
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Price per Share (₹)</label>
          <input
            type="number"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter price"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Quantity</label>
          <input
            type="number"
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter quantity"
          />
        </div>

        <button
          className="btn btn-primary w-100 mt-3"
          onClick={calculateBrokerage}
        >
          Calculate
        </button>

        {brokerage && (
          <div className="alert alert-success mt-4 text-center">
            <strong>Estimated Brokerage:</strong> ₹{brokerage}
          </div>
        )}
      </div>
    </div>
  );
}

export default BrokerageCalculator;
