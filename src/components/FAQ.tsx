import { useState } from "react";

const FAQ = () => {
     const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
    return (
        <>
            <section id="faq" className="content-section">
                <h2 className="section-title">Additional Information</h2>
                <div className="content-block">
                    <h3 className="block-title">Frequently Asked Questions</h3>

                    {/* <!-- FAQ 1 --> */}
                    <div className="faq-item">
                        <h4  onClick={() => toggleFAQ(1)} className="faq-question">What is the CANSLIM method?</h4>
                        {openFAQ === 1 && (
                            <div className="faq-answer">
                                <p>
                                    The CAN SLIM method is an investment strategy developed by William J. O'Neil. It is designed to help investors identify high-growth stocks by focusing on seven key criteria: Current Earnings, Annual Earnings, New Products or Services, Supply and Demand, Leadership, Institutional Sponsorship, and Market Direction.
                                </p>
                                <p style={{ textAlign: 'center', fontSize: '1.25rem', fontWeight: 'bold', color: '#1abc9c' }}>
                                    I’ve created this as a FREE tool just for you!
                                </p>

                                <img src="/img/chart.png" alt="CAN SLIM overview chart" className="faq-image" />
                                <p>
                                    <a href="https://www.investopedia.com/terms/c/canslim.asp" target="_blank" className="faq-link">
                                        Learn more about the CANSLIM method
                                    </a>
                                </p>
                            </div>
                        )}
                    </div>

                    {/* <!-- FAQ 2 --> */}
                    <div className="faq-item">
                        <h4  onClick={() => toggleFAQ(2)} className="faq-question">Does CANSLIM still work?</h4>
                        {openFAQ === 2 && (
                            <div className="faq-answer">
                            <p>
                                Yes, CAN SLIM can still be effective, particularly in bullish markets. However, it requires disciplined application and continuous market monitoring. It’s most successful when used in markets that favor growth stocks.
                            </p>
                            <img src="https://via.placeholder.com/450x250" alt="Stock market growth graph" className="faq-image-small" />
                            <p>
                                <a href="https://www.example.com/canslim-case-studies" target="_blank" className="faq-link">
                                    Explore case studies of CANSLIM in action.
                                </a>
                            </p>
                            </div>
                            )}
                    </div>
                    

                    {/* <!-- FAQ 3 --> */}
                    <div className="faq-item">
                        <h4  onClick={() => toggleFAQ(3)} className="faq-question">What are the disadvantages of CANSLIM?</h4>
                        {openFAQ === 3 && (
                            <div className="faq-answer">
                            <p>
                                CAN SLIM requires significant market knowledge and constant monitoring, making it unsuitable for passive investors. It is also not ideal for bearish markets where growth stocks tend to underperform.
                            </p>
                            <img src="https://via.placeholder.com/450x250" alt="Market volatility image" className="faq-image-large" />
                            <p>
                                <a href="https://www.example.com/canslim-risks" target="_blank" className="faq-link">
                                    Read more about the risks associated with CAN SLIM.
                                </a>
                            </p>
                            </div>
                        )}
                    </div>

                    {/* <!-- FAQ 4 --> */}
                    <div className="faq-item">
                        <h4  onClick={() => toggleFAQ(4)} className="faq-question">What is the average return on CANSLIM?</h4>
                         {openFAQ === 4 && (   <div className="faq-answer">
                            <p>
                                The average return on CAN SLIM varies depending on market conditions and the investor's skill. Historically, disciplined investors have often outperformed the market using this strategy.
                            </p>
                            <img src="/img/yahoo-finance-canslim.png" alt="CANSLIM returns graph" className="faq-image" />
                            <p>
                                <a href="https://finance.yahoo.com/quote/CANGX/performance/?guccounter=1" target="_blank" className="faq-link">
                                    See the historical returns of CAN SLIM.
                                </a>
                            </p>
                        </div>
                            )}
                    </div>

                    {/* <!-- FAQ 5 --> */}
                    <div className="faq-item">
                        <h4  onClick={() => toggleFAQ(5)} className="faq-question">Is CANSLIM value investing?</h4>
                         {openFAQ === 5 && (   <div className="faq-answer">
                            <p>
                                No, CANSLIM is primarily a growth investing strategy, focusing on stocks with strong earnings growth rather than undervalued stocks.
                            </p>
                            <img src="./img/value-investing.png" alt="Value vs Growth Investing comparison" className="faq-image-small" style={{}}/>
                            <p>
                                <a href="#" id="learn-more-link" className="faq-link">Learn more about value investing and stocks with strong earnings.</a>
                            </p>
                            <div id="additional-info" className="additional-info" style={{ display: 'none' }}>
                                <p><strong>Value Investing:</strong> A strategy where investors look for stocks that are undervalued by the market. These stocks typically trade for less than their intrinsic values and have potential for long-term growth.</p>
                                <p><strong>Stocks with Strong Earnings:</strong> These are stocks of companies that have consistently demonstrated significant earnings growth, making them attractive for growth-focused investors.</p>
                            </div>
                        </div>
                            )}
                    </div>

                    {/* <!-- FAQ 6 --> */}
                    <div className="faq-item">
                        <h4  onClick={() => toggleFAQ(6)} className="faq-question">What is the best book on CANSLIM?</h4>
                         {openFAQ === 6 && (   <div className="faq-answer">
                            <div className="book-info">
                                <img src="/img/book.jpg" alt="How to Make Money in Stocks book cover" className="book-image" />
                                <div className="book-description">
                                    <p>
                                        The best book on CANSLIM is <strong>"How to Make Money in Stocks"</strong> by William J. O'Neil. This book offers a comprehensive guide to understanding and applying the CANSLIM principles in stock market investing.
                                    </p>
                                </div>
                            </div>
                            <p>
                                <a href="https://www.amazon.ca/dp/0071810110?psc=1&ref=ppx_yo2ov_dt_b_product_details" target="_blank" className="faq-link">
                                    You can find more details or purchase the book.
                                </a>
                            </p>
                        </div>
                            )}
                    </div>
                </div>
            </section>
            {/* Additional Info */}
            <section id="resources" className="content-section">
                <h2 className="section-title">Additional Resources</h2>
                <ul className="resource-list">
                    <li><a href="https://archive.aessweb.com/index.php/5009/article/view/320/2692" className="resource-link">CAN SLIM Investing in Dow Jones</a></li>
                </ul>
            </section>
        </>
    );
}

export default FAQ