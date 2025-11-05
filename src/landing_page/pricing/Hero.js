import React from 'react'
import './Hero.css'
function Hero() {
     const cards = [
    {
      price: "₹0",
      title: "Free equity delivery",
      desc: "All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage."
    },
    {
      price: "₹20",
      title: "Intraday and F&O trades",
      desc: "Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
    },
    {
      price: "₹0",
      title: "Free direct MF",
      desc: "All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges."
    }
  ];
    return ( 
        <>
        <div className="container mx-auto px-4 py-16 text-center" style={{margin:"50px"}}>
            <h2 className="text-4xl font-bold mb-4">Charges</h2>
            <p className="text-lg text-gray-600">List of all charges and taxes</p>
        </div>
        <div className="pricing-section">
      <div className="pricing-container">
        {cards.map((card, index) => (
          <div className="pricing-card" key={index}>
            <h1 className="price">{card.price}</h1>
            <h4 className="title">{card.title}</h4>
            <p className="desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
        </>
     );
}

export default Hero;