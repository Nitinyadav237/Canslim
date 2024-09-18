import { useEffect, useState } from 'react';

const explanations = [
    {
        name: "CANSLIM Calculator",
        description: "A powerful and FREE tool built on the time-tested CANSLIM investment strategy.",
        path: "img/2.png"
    },
    {
        name: "C: Current Earnings",
        description: "Look for companies with strong current earnings growth.",
        path: "img/c.png"
    },
    {
        name: "A: Annual Earnings",
        description: "Companies should have a record of strong annual earnings growth.",
        path: "img/a.png"
    },
    {
        name: "N: New Products, Services, or Leadership",
        description: "Companies with new innovations or management.",
        path: "img/n.png"
    },
    {
        name: "S: Supply and Demand",
        description: "Look at the share demand and supply in the market.",
        path: "img/s.png"
    },
    {
        name: "L: Leader or Laggard",
        description: "Invest in market leaders, not laggards.",
        path: "img/l.png"
    },
    {
        name: "I: Institutional Sponsorship",
        description: "Favor stocks with institutional backing.",
        path: "img/i.png"
    },
    {
        name: "M: Market Direction",
        description: "Consider the direction of the overall market.",
        path: "img/m.png"
    }
];

const IntroSection = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true); // Trigger fade-out effect

            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % explanations.length); // Update explanation
                setFade(false); // Trigger fade-in effect
            }, 500);
        }, 5000);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    const currentExplanation = explanations[index];
    return (
        <div>
            
            <section className="title-section">
                <h1 className="main-title">What is the CAN SLIM Strategy?</h1>
                <p className="main-subtitle">A proven methodology for identifying high-growth stocks.</p>
            </section>
          
            {/* <!-- Interactive Overview --> */}
              {/* Interactive Overview */}
            <div className="interactive-overview">
                <div className="image-container">
                    <img
                        id="current-explanation-image"
                        src={currentExplanation.path}
                        alt="CAN SLIM Explanation"
                        style={{ opacity: fade ? 0 : 1, transition: 'opacity 0.5s ease' }}
                    />
                </div>
                <div className="overview-text">
                    <h2
                        id="current-explanation-name"
                        className="overview-title"
                        style={{
                            opacity: fade ? 0 : 1,
                            transform: fade ? 'translateY(-10px)' : 'translateY(0)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease'
                        }}
                    >
                        {currentExplanation.name}
                    </h2>
                    <p
                        id="current-explanation-description"
                        className="overview-description"
                        style={{
                            opacity: fade ? 0 : 1,
                            transform: fade ? 'translateY(10px)' : 'translateY(0)',
                            transition: 'opacity 0.5s ease, transform 0.5s ease'
                        }}
                    >
                        {currentExplanation.description}
                    </p>
                </div>
            </div>
          
            {/* <!-- Content Sections --> */}
            <section id="introduction" className="content-section">
                <h2 className="section-title">Introduction</h2>
                <div className="content-block">
                    <h3 className="block-title">Overview</h3>
                    <p className="content-text">
                        William J. O'Neil's seminal work, <em>How to Make Money in Stocks</em> , first published in 1988,
                        remains a cornerstone in the world of stock investment. This book not only introduces readers
                        to the CAN SLIM strategy but also provides a comprehensive guide on how to identify top-performing
                        stocks in any market condition. Updated multiple times, the book reflects the evolving nature of
                        stock markets, making it a timeless resource for both novice and seasoned investors.
                    </p>
                </div>
                <div className="content-block">
                    <h3 className="block-title">Objective</h3>
                    <h4 className="content-text">
                        <p>
                            The core objective of this resource is to delve into the CAN SLIM strategy,
                            as articulated by O'Neil, and explore its application in modern-day stock investment.
                        </p>
                        <p>
                            This approach is tailored for a diverse audience, ranging from beginners who are new
                            to the stock market to seasoned investors looking for a systematic approach to optimize
                            their portfolios.
                        </p>
                    </h4>
                </div>
            </section>
            {/* <!-- Buying Checklist Sections --> */}
            <section id="buying-checklist" className="content-section dynamic-checklist">
                <h2 className="section-title">The Foundation of The Calculator</h2>
                <h2 className="section-title" style={{ "color": "#00688f" }}>canslimcalculator.com</h2>
                <div className="content-block">
                    <p className="content-text">
                        Explore the power of the <span className="highlight">free CAN SLIM Calculator</span>, an advanced tool to <span className="highlight">analyze stocks</span> and support <span className="highlight">investment decisions</span>. Built on the proven <span className="highlight">canslim methodology</span>, this custom algorithm evaluates each criterion from the <span className="highlight">canslim strategy</span>. It ensures your stock picks align with the top-performing <span className="highlight">canslim stocks</span>. The tool simplifies stock analysis, making it accessible to both seasoned investors and beginners. Whether applying the <span className="highlight">canslim method</span> or seeking a reliable <span className="highlight">investment strategy</span>, this platform offers a powerful, user-friendly resource. Use the <span className="highlight">free stock calculator</span> to enhance your portfolio and achieve your financial goals.
                    </p>
                </div>

                {/* <!-- Next/Previous Navigation --> */}
                <div className="navigation-buttons">
                    <button id="prev-button" className="nav-button" style={{ "visibility": "hidden" }}>Previous</button>
                    <button id="next-button" className="nav-button">Next</button>
                </div>
                
                <div id="checklist-content" className="checklist-content">
                    {/* <!-- Step 1 --> */}
                    <div className="checklist-step" id="step1">
                        <div className="checklist-item">
                            <div className="checklist-header">
                                <h3>Big Rock #1":" Market in Confirmed Uptrend</h3>
                            </div>
                            <div className="checklist-hover">
                                <input type="checkbox" id="check1" />
                                <label className="check1">Market is in a confirmed uptrend</label>
                            </div>
                            <p className="criteria-explanation" id="exp1" style={{ "display": "none" }}>
                                The overall market trend significantly influences stock performance. A confirmed uptrend indicates that most stocks are rising, which increases the likelihood of successful investments.
                            </p>
                        </div>
                    </div>
                    
                    {/* <!-- Step 2 --> */}
                    <div className="checklist-step" id="step2" style={{ "display": "none" }}>
                        <div className="checklist-header">
                            <h3>Big Rock #2":" Focus on High-Growth Companies</h3>
                        </div>
                        
                        {/* <!-- Composite Rating --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check2" />
                            <label htmlFor="check2">Composite Rating of 95 or higher</label>
                        </div>
                        <p className="criteria-explanation" id="exp2" style={{ "display": "none" }}>
                            The Composite Rating combines key performance metrics like earnings, sales, and market strength into one score. A rating of 95 or higher indicates a company that is leading in its sector.
                        </p>
                        
                        {/* <!-- EPS Rating --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check3" />
                            <label htmlFor="check3">EPS Rating of 80 or higher</label>
                        </div>
                        <p className="criteria-explanation" id="exp3" style={{ "display": "none" }}>
                            EPS (Earnings Per Share) measures a company's profitability per share. An EPS Rating of 80 or higher shows that a company has strong earnings growth compared to its peers.
                        </p>
                        
                        {/* <!-- EPS Growth --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check4" />
                            <label htmlFor="check4">EPS growth 25% or higher in recent quarters</label>
                        </div>
                        <p className="criteria-explanation" id="exp4" style={{ "display": "none" }}>
                            EPS growth indicates how quickly a company's earnings per share are increasing. A growth rate of 25% or higher in recent quarters suggests strong financial health and growth potential.
                        </p>
                        
                        {/* <!-- Accelerating Earnings Growth --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check5" />
                            <label htmlFor="check5">Accelerating earnings growth</label>
                        </div>
                        <p className="criteria-explanation" id="exp5" style={{ "display": "none" }}>
                            Accelerating earnings growth occurs when a company's earnings growth rate increases over time, signaling improving business performance and a potential for stock price increases.
                        </p>
                        
                        {/* <!-- Average Annual EPS Growth --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check6" />
                            <label htmlFor="check6">Average Annual EPS growth 25% or more over last 3 years</label>
                        </div>
                        <p className="criteria-explanation" id="exp6" style={{ "display": "none" }}>
                            This measures the consistency of a company’s growth over the last three years. Sustained growth of 25% or more annually reflects a strong and stable growth trajectory.
                        </p>
                        
                        {/* <!-- Sales Growth --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check7" />
                            <label htmlFor="check7">Sales growth 20%-25% or higher in most recent quarter</label>
                        </div>
                        <p className="criteria-explanation" id="exp7" style={{ "display": "none" }}>
                            Sales growth indicates a company's ability to generate revenue. A growth rate of 20%-25% or higher in the most recent quarter is a strong indicator of market demand and future potential.
                        </p>
                        
                        {/* <!-- Return on Equity (ROE) --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check8" />
                            <label htmlFor="check8">Return on equity (ROE) of 17% or higher</label>
                        </div>
                        <p className="criteria-explanation" id="exp8" style={{ "display": "none" }}>
                            ROE measures a company’s profitability in relation to shareholders' equity. An ROE of 17% or higher indicates efficient use of equity to generate profits.
                        </p>
                        
                        {/* <!-- SMR Rating --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check9" />
                            <label htmlFor="check9">SMR Rating (Sales + Margins + Return on Equity) of A or B</label>
                        </div>
                        <p className="criteria-explanation" id="exp9" style={{ "display": "none" }}>
                            The SMR Rating evaluates a company’s sales, profit margins, and return on equity. An A or B rating indicates strong financials across these key areas.
                        </p>
                        
                        {/* <!-- New Products, Service, or Management --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check10" />
                            <label htmlFor="check10">New products, service, or management</label>
                        </div>
                        <p className="criteria-explanation" id="exp10" style={{ "display": "none" }}>
                            Innovation or changes in leadership can drive significant growth. Companies introducing new products, services, or management often see improved performance and stock appreciation.
                        </p>
                        
                        {/* <!-- Top-Rated Stocks in Industry Group --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check11" />
                            <label htmlFor="check11">Among top-rated stocks in its industry group</label>
                        </div>
                        <p className="criteria-explanation" id="exp11" style={{ "display": "none" }}>
                            Companies that rank among the top in their industry group are often the strongest performers, making them more likely to achieve sustained success and growth.
                        </p>
                        
                        {/* <!-- Ranked in Top 40-50 of IBD's 197 Industry Groups --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check12" />
                            <label htmlFor="check12">Ranked in top 40-50 of IBD's 197 industry groups</label>
                        </div>
                        <p className="criteria-explanation" id="exp12" style={{ "display": "none" }}>
                            Being ranked in the top 40-50 of IBD’s 197 industry groups indicates that a company is in a leading sector, which can drive superior returns.
                        </p>
                    </div>
                
                    {/* <!-- Step 3 --> */}
                    <div className="checklist-step" id="step3" style={{ "display": "none" }}>
                        <div className="checklist-header">
                            <h3>Big Rock #3":" Mutual Fund Support</h3>
                        </div>
                        
                        {/* <!-- Increase in Number of Funds --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check13" />
                            <label htmlFor="check13">Increase in number of funds that own the stock in recent quarters</label>
                        </div>
                        <p className="criteria-explanation" id="exp13" style={{ "display": "none" }}>
                            Institutional ownership indicates confidence in a stock's future performance. An increase in the number of funds owning a stock suggests strong institutional support.
                        </p>
                        
                        {/* <!-- Accumulation/Distribution Rating --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check14" />
                            <label htmlFor="check14">Accumulation/Distribution Rating of A, B, or C</label>
                        </div>
                        <p className="criteria-explanation" id="exp14" style={{ "display": "none" }}>
                            This rating reflects the balance of buying and selling by institutions. A rating of A, B, or C indicates more buying than selling, which is a positive signal.
                        </p>
                        
                        {/* <!-- Relative Strength Rating --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check15" />
                            <label htmlFor="check15">Relative Strength Rating of 80 or higher</label>
                        </div>
                        <p className="criteria-explanation" id="exp15" style={{ "display": "none" }}>
                            Relative Strength Rating compares a stock's price performance to the overall market. A rating of 80 or higher indicates the stock is outperforming most of the market.
                        </p>
                        
                        {/* <!-- Share Price Above $15 --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check16" />
                            <label htmlFor="check16">Share price above $15</label>
                        </div>
                        <p className="criteria-explanation" id="exp16" style={{ "display": "none" }}>
                            Stocks priced above $15 tend to be more stable and less volatile, making them safer investments compared to lower-priced stocks.
                        </p>
                        
                        {/* <!-- Average Daily Volume --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check17" />
                            <label htmlFor="check17">Average daily volume of 400,000 shares or more</label>
                        </div>
                        <p className="criteria-explanation" id="exp17" style={{ "display": "none" }}>
                            High average daily volume ensures liquidity, making it easier to buy or sell shares without significantly affecting the stock's price.
                        </p>
                    </div>
                
                    {/* <!-- Step 4 --> */}
                    <div className="checklist-step" id="step4" style={{ "display": "none" }}>
                        <div className="checklist-header">
                            <h3>Chart Analysis":" Spotting Breakouts</h3>
                        </div>
                        
                        {/* <!-- Breaking Out of a Sound Base --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check18" />
                            <label htmlFor="check18">Breaking out of a sound base or alternative buy point</label>
                        </div>
                        <p className="criteria-explanation" id="exp18" style={{ "display": "none" }}>
                            A stock breaking out of a sound base indicates the start of a significant upward movement. This is often an ideal time to buy as the stock begins its new trend.
                        </p>
                        
                        {/* <!-- Volume Above Average on Breakout --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check19" />
                            <label htmlFor="check19">Volume at least 40% to 50% above average on breakout</label>
                        </div>
                        <p className="criteria-explanation" id="exp19" style={{ "display": "none" }}>
                            High volume during a breakout confirms that the price movement is backed by strong buying interest, reducing the risk of a false breakout.
                        </p>
                        
                        {/* <!-- Relative Strength Line in New High Ground --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check20" />
                            <label htmlFor="check20">Relative strength line in new high ground</label>
                        </div>
                        <p className="criteria-explanation" id="exp20" style={{ "display": "none" }}>
                            A rising relative strength line indicates that the stock is outperforming the market. When this line reaches new highs, it’s a strong signal of potential gains.
                        </p>
                        
                        {/* <!-- Within 5% of Ideal Buy Point --> */}
                        <div className="checklist-hover">
                            <input type="checkbox" id="check21" />
                            <label htmlFor="check21">Within 5% of ideal buy point</label>
                        </div>
                        <p className="criteria-explanation" id="exp21" style={{ "display": "none" }}>
                            Buying within 5% of the ideal buy point ensures you're entering the stock at a time when it has the most potential for growth while minimizing risk.
                        </p>
                    </div>
                </div>
            </section>
          
          

        </div>
        
    )
}

export default IntroSection