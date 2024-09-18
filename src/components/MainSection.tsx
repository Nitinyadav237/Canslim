
const MainSection = () => {
  return (
      <>
           <section id="main-content" className="content-section">
                <h2 className="section-title">Main Content</h2>
                <div className="content-block">
                    <h3 className="block-title">Introduction to the Investment Strategy</h3>
                    <p className="content-text">
                        CAN SLIM is an acronym representing seven key factors identified by O'Neil as essential for high-growth stock identification. This strategy merges technical and fundamental analysis to create a solid framework for evaluating potential stock investments. Originating in the 1950s, CAN SLIM has evolved over decades, remaining a valuable tool for investors aiming to outperform the market.
                    </p>
                    <div className="styled-list-container">
                        <ul className="styled-list">
                            <li>
                                <div className="list-icon">C</div>
                                <div className="list-content">
                                    <strong>Current Earnings":"</strong> Strong, recent earnings growth is vital.
                                </div>
                            </li>
                            <li>
                                <div className="list-icon">A</div>
                                <div className="list-content">
                                    <strong>Annual Earnings":"</strong> Consistent, long-term growth is crucial.
                                </div>
                            </li>
                            <li>
                                <div className="list-icon">N</div>
                                <div className="list-content">
                                    <strong>New Products, Services, or Management":"</strong> Innovation and leadership drive stock performance.
                                </div>
                            </li>
                            <li>
                                <div className="list-icon">S</div>
                                <div className="list-content">
                                    <strong>Supply and Demand":"</strong> Market trends and stock availability are key.
                                </div>
                            </li>
                            <li>
                                <div className="list-icon">L</div>
                                <div className="list-content">
                                    <strong>Leader or Laggard":"</strong> Invest in leaders, avoid laggards.
                                </div>
                            </li>
                            <li>
                                <div className="list-icon">I</div>
                                <div className="list-content">
                                    <strong>Institutional Sponsorship":"</strong> Favor stocks with strong institutional backing.
                                </div>
                            </li>
                            <li>
                                <div className="list-icon">M</div>
                                <div className="list-content">
                                    <strong>Market Direction":"</strong> Align investments with overall market trends.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
          
            <section id="analysis" className="content-section">
                <h2 className="section-title">Analysis and Critiques</h2>
                <div className="content-block">
                    <h3 className="block-title">Advantages of the Strategy</h3>
                    <p className="content-text">
                        The CAN SLIM strategy combines both technical and fundamental analysis, providing a balanced approach to stock investment. Its clear criteria allow investors to make informed decisions, and its proven track record demonstrates its reliability. Compared to other strategies, CAN SLIM offers a structured, methodical approach to identifying high-potential stocks, which can help mitigate the risks associated with investing.
                    </p>
                </div>
                <div className="content-block">
                    <h3 className="block-title">Disadvantages and Risks</h3>
                    <p className="content-text">
                        While CAN SLIM has its strengths, it also comes with certain limitations":"
                    </p>
                    <ul className="styled-list disadvantage">
                        <li><strong>Requires Experience/ Technical Knowledge":"</strong> The strategy is not suitable for all investors. Successful application requires a solid understanding of technical analysis and experience in stock market investing.</li>
                        <li><strong>Not Ideal for Bear Markets":"</strong> CAN SLIM is primarily designed for identifying opportunities in a bullish market and may not be as effective during a bear market or periods of significant market downturn.</li>
                        <li><strong>High Monitoring and Trading Costs":"</strong> The strategy demands continuous monitoring of both the market and individual stocks, potentially leading to higher trading costs.</li>
                        <li><strong>Market Volatility Impact":"</strong> The performance of CAN SLIM can be significantly affected by market volatility and economic downturns, particularly if investments are not aligned with the overall market direction.</li>
                    </ul>
                </div>
            </section>
          
            <section id="conclusion" className="content-section">
                <h2 className="section-title">Conclusion</h2>
                <div className="content-block">
                  <h3 className="block-title">Summary of Key Points</h3>
                  <p className="content-text">
                    The CAN SLIM strategy offers a methodical approach to stock investment, 
                    combining both technical and fundamental analysis to identify high-growth stocks. 
                    It emphasizes the importance of market direction, earnings growth, innovation, and 
                    institutional support, providing a reliable framework for making informed investment decisions.
                  </p>
                </div>
                <div className="content-block">
                  <h3 className="block-title">Final Recommendations</h3>
                  <p className="content-text">
                    The CAN SLIM strategy is ideal for investors seeking a systematic approach to stock investment. 
                    To maximize success, it is recommended that investors continue their education through further 
                    reading, financial courses, and active participation in investment communities. Regularly reviewing 
                    and adjusting your strategy based on market conditions will help you stay ahead and achieve consistent returns.
                  </p>
                </div>
              </section>
      </>
  )
}

export default MainSection