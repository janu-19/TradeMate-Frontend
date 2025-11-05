import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <>
        <Hero />
        <LeftSection imageSrc="images/kite.png" title="TradeMate Dashboard" descriptions={[
            "Get a real-time view of the stock market with live price updates and charts.",
            "Buy or sell stocks instantly and watch your portfolio evolve dynamically.",
            "Your all-in-one control center for tracking market trends and performance."
        ]} demoLink="https://example.com/demo" />
        <RightSection imageSrc={"images/wachlist.png"} title="Watchlist" descriptions={[
            "Keep an eye on your favorite stocks with personalized watchlists.",
            "Get notified about price changes and market movements.",
            "Easily manage and organize your stock preferences."
        ]} demoLink="https://example.com/demo" />
        <LeftSection imageSrc="images/console.png" title="Portfolio Tracker" descriptions={[
            "Monitor your investments with detailed analytics and visual insights.",
            "Track your profits, losses, and portfolio distribution effortlessly.",
            "Stay informed about where your money is growing and where it’s not."
        ]} demoLink="https://example.com/demo" />
       <RightSection imageSrc="images/transations.png" title="Transaction History" descriptions={[
            "Review your past trades with comprehensive transaction history.",
            "Analyze your trading patterns and performance over time.",
            "Easily export your transaction data for tax and accounting purposes."
        ]} demoLink="https://example.com/demo" />
        <LeftSection imageSrc="images/market.jpg" title="Market News" descriptions={[
            "Stay updated with the latest market news and trends.",
            "Receive real-time alerts on significant market movements.",
            "Make informed decisions with comprehensive news coverage."
        ]} demoLink="https://example.com/demo" />
     

        </>
    );
}

export default ProductPage;