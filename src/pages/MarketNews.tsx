import { useEffect, useState } from "react";
import styles from "./MarketNews.module.css";
import { SERVER_URL, TRENDING_STOCKS_TICKERS } from "../../constants";

const getFormattedDateTime = () => {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return `${formattedDate} | ${formattedTime}`;
};

const MarketNews = () => {
  const [currentTime, setCurrentTime] = useState<string>(getFormattedDateTime());
  const [newsData, setNewsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1); // Initialize the page state
  const itemsPerPage = 5; // Show 5 news items per page

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getFormattedDateTime());
    }, 1000);

    getNews();

    return () => clearInterval(interval);
  }, []);

  const getNews = async () => {
    setIsLoading(true);
    setError(false);
    const tickers = localStorage.getItem(TRENDING_STOCKS_TICKERS);
    const storedTickers = tickers ? JSON.parse(tickers) : [];

    try {
      const response = await fetch(`${SERVER_URL}/api/market-news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tickers: storedTickers }),
      });

      if (!response.ok) throw new Error("Error retrieving news");

      const data = await response.json();
      setNewsData(data.news);
    } catch (error) {
      console.error("Error retrieving news:", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSeeMore = () => {
    setPage((prevPage) => prevPage + 1); // Increase page count to load more news
  };

  // Filter out news without a valid thumbnail
  const filteredNewsData = newsData.filter((newsItem) => newsItem.thumbnail && newsItem.thumbnail.resolutions.length > 0);

  const displayedNews = filteredNewsData.slice(0, page * itemsPerPage); // Slice the news data based on the current page

  if (error) {
    return (
      <div id={styles.errorPage}>
        <img src="img/error.png" alt="Error 404" />
        <p>
          Unable to load news at this time. <button onClick={getNews}>Retry</button>
        </p>
      </div>
    );
  }

    return (
        <div>
            <div id={styles.titleTimeContainer}>
                <h1 id={styles.pageTitle}>Latest Stock Market News and Updates</h1>
                <div id={styles.timeContainer} className={styles.timeBox}>
                    <span id={styles.currentTime}>{currentTime}</span>
                </div>
            </div>

            {isLoading ? (
                <div id={styles.loaders}>
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className={styles.newsSkeleton}>
                            <div className={styles.thumbnailSkeleton}></div>
                            <div>
                                <div className={styles.titleSkeleton}></div>
                                <div className={styles.descriptionSkeleton}></div>
                            </div>
                        </div>
                  
                    ))}
                </div>
            ) : (
                <div className={styles.isLoading}>
                    <div id={styles.newsContainer}>
  {displayedNews.length > 0 ? (
    displayedNews.map((newsItem, index) => (
      <div
        key={index}
        className={styles.newss}
        onClick={() => window.open(newsItem.link, '_blank')} // Open the news link in a new tab when clicked anywhere in the div
        style={{ cursor: "pointer" }} // Ensure the div looks clickable
      >
        <img
          src={newsItem.thumbnail.resolutions[0]?.url}
          alt="Thumbnail"
          className={styles.newsThumbnail}
        />
        <div className={styles.tickersTitleDiv}>
          <h3>{newsItem.title}</h3>
          <div className={styles.newsTickers}>
            {newsItem.relatedTickers?.map((ticker: string) => (
              <span
                key={ticker}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent div click event
                  window.open(`/canslim-stock?symbol=${ticker}`, '_blank'); // Open each ticker link in a new tab
                }}
              >
                {ticker}
              </span>
            ))}
          </div>
          <p className={styles.newsPublisher}>
            Published by {newsItem.publisher}
          </p>
          <p className={styles.newsPublishTime}>
            Published on{" "}
            {new Date(newsItem.providerPublishTime).toLocaleString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            )}
          </p>
        </div>
      </div>
    ))
  ) : (
    <p style={{ textAlign: "center" }}>No news available at the moment.</p>
  )}
</div>e
                </div>
            )}

            {filteredNewsData.length > displayedNews.length && ( // Show "See More" if there are more news items
                <div
                    id={styles.seeMoreContainer}
                    className={styles.seeMoreContainer}
                    onClick={handleSeeMore}
                >
                    <div id={styles.seeMoreBox}>
                        <span id={styles.seeMoreText}>Click to see more</span>
                        <span id={styles.seeMoreArrow}>&#x25BC;</span>
                    </div>
                </div>
            )}
            <div className={styles.investmentContainer} id="informed-decisions">
                <h2 className={styles.investmentTitle}>Making Informed Investment Decisions</h2>
                <section className={styles.investmentSection}>
                    <h3 className={styles.investmentSubtitle}>The Crucial Role of Staying Informed</h3>
                    <p className={styles.investmentText}>
                        In the fast-paced world of finance, staying informed is not just beneficial—it's essential. Access to real-time news and market data equips investors with the knowledge they need to make strategic decisions. Whether you're a seasoned professional or a beginner, keeping up with market trends and economic indicators is vital to making informed investment choices.
                    </p>
                    <p className={styles.investmentText}>
                        Informed investors are better positioned to evaluate market conditions, assess company performance, and anticipate trends. This proactive approach allows for timely portfolio adjustments, minimizing risks and maximizing potential returns.
                    </p>
                </section>
    
                <h2 className={styles.investmentTitle}>Understanding Insider Trading Regulations</h2>
                <section className={styles.investmentSection}>
                    <h3 className={styles.investmentSubtitle}>What Is Insider Trading?</h3>
                    <p className={styles.investmentText}>
                        Insider trading refers to the act of buying or selling a company's stock based on material, non-public information. This practice is considered illegal because it creates an uneven playing field, where insiders with privileged information can profit at the expense of regular investors. The fairness and integrity of financial markets depend on equal access to information, which is why insider trading is strictly prohibited.
                    </p>
                    <p className={styles.investmentText}>
                        Regulatory bodies across different regions enforce strict laws to prevent insider trading, ensuring that all investors are treated fairly. These laws are crucial for maintaining transparency, boosting investor confidence, and preserving the integrity of the markets.
                    </p>
                    <ul className={styles.investmentList}>
                        <li><strong>United States:</strong> The Securities and Exchange Commission (SEC) rigorously enforces insider trading laws, imposing severe civil and criminal penalties to deter violations and uphold market integrity.</li>
                        <li><strong>European Union:</strong> The Market Abuse Regulation (MAR) governs insider trading across the EU, implementing strict measures to protect investors and enhance market transparency.</li>
                        <li><strong>Canada:</strong> Provincial regulators, such as the Ontario Securities Commission (OSC) and the Autorité des marchés financiers (AMF), enforce insider trading laws to ensure a fair and transparent market environment.</li>
                    </ul>
                    <p className={styles.investmentText}>
                        These regulations are designed to foster a fair market environment where no one has an unfair advantage. By enforcing these laws, regulatory bodies help maintain investor confidence and ensure that markets operate with integrity.
                    </p>

                    <section className={styles.miniSection}>
                        <h3 className={styles.investmentSubtitle}>How the Stock Market Works</h3>
                        <p className={styles.investmentText}>
                            Understanding how the stock market functions is fundamental for any investor. The stock market is a complex system where shares of publicly-held companies are issued, bought, and sold. It plays a critical role in the economy by providing companies with access to capital in exchange for giving investors a slice of ownership.
                        </p>
                        <p className={styles.investmentText}>
                            Here's a short video that explains the basics of how the stock market works, in a fun and engaging way:
                        </p>
                        <div className={styles.videoContainer}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/IjewwV9SemM" title="How the Stock Market Works - Cartoon" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </section>
                </section>
    
                <h2 className={styles.investmentTitle}>Influence of Market Sentiment</h2>
                <section className={styles.investmentSection}>
                    <h3 className={styles.investmentSubtitle}>How Sentiment Drives the Market</h3>
                    <p className={styles.investmentText}>
                        Market sentiment reflects the collective emotions and attitudes of investors toward a particular market or asset. It plays a crucial role in driving market trends, as positive sentiment can lead to bullish markets, while negative sentiment can result in bearish conditions.
                    </p>
                    <p className={styles.investmentText}>
                        By understanding market sentiment, investors can better position themselves to capitalize on opportunities and mitigate risks. Recognizing the psychological factors that influence market behavior is key to navigating market volatility effectively.
                    </p>
                </section>
    
                <h2 className={styles.investmentTitle}>The Role of Economic Indicators</h2>
                <section className={styles.investmentSection}>
                    <h3 className={styles.investmentSubtitle}>Key Indicators to Watch</h3>
                    <p className={styles.investmentText}>
                        Economic indicators, such as GDP growth, unemployment rates, and inflation, provide critical insights into the health of the economy. Investors rely on these indicators to predict market movements and make informed decisions.
                    </p>
                    <p className={styles.investmentText}>
                        For instance, higher-than-expected GDP growth signals economic strength, boosting investor confidence and driving up stock prices. Conversely, rising inflation can lead to higher interest rates, reducing consumer spending and impacting corporate profits.
                    </p>
                    <p className={styles.investmentText}>
                        Keeping track of these indicators helps investors adjust their strategies to align with the current economic landscape.
                    </p>
                </section>
    
                <h2 className={styles.investmentTitle}>Impact of Corporate Announcements</h2>
                <section className={styles.investmentSection}>
                    <h3 className={styles.investmentSubtitle}>Why Corporate News Matters</h3>
                    <p className={styles.investmentText}>
                        Corporate announcements, such as earnings reports, mergers, acquisitions, and leadership changes, significantly impact stock prices and investor decisions. These events provide valuable insights into a company's financial health and future prospects.
                    </p>
                    <p className={styles.investmentText}>
                        Positive announcements can drive stock prices higher, while negative news can lead to sell-offs. Investors who stay informed about corporate developments are better equipped to make strategic decisions.
                    </p>
                </section>
    
                <h2 className={styles.investmentTitle}>Global Events and Market Dynamics</h2>
                <section className={styles.investmentSection}>
                    <h3 className={styles.investmentSubtitle}>Navigating Uncertainty</h3>
                    <p className={styles.investmentText}>
                        Global events, including geopolitical tensions, natural disasters, and pandemics, can disrupt markets and create uncertainty. These events often lead to significant volatility, affecting everything from supply chains to commodity prices.
                    </p>
                    <p className={styles.investmentText}>
                        Staying informed about global events is crucial for investors looking to navigate these uncertainties. By understanding the potential impacts, investors can adjust their strategies to mitigate risks and capitalize on opportunities.
                    </p>
                </section>
    
                <h2 className={styles.investmentTitle}>Value of Analyst Opinions</h2>
                <section className={styles.investmentSection}>
                    <h3 className={styles.investmentSubtitle}>Leveraging Expert Insights</h3>
                    <p className={styles.investmentText}>
                        Analyst opinions provide expert insights into market dynamics, company valuations, and industry trends. These insights are invaluable for investors who want to make well-informed decisions without conducting all the research themselves.
                    </p>
                    <p className={styles.investmentText}>
                        Incorporating analyst recommendations into your strategy can help you identify potential opportunities and risks, allowing for more confident decision-making.
                    </p>
                </section>
    
                <section className="investmentSummary">
                    <h3 className={styles.investmentSubtitle}>Summary: The Power of Being Informed</h3>
                    <p className="investmentText">
                        Staying informed is the cornerstone of successful investing. By keeping up with the latest news, economic indicators, and expert opinions, you can make strategic decisions that align with your financial goals. This proactive approach empowers you to mitigate risks and seize opportunities in an ever-changing market.
                    </p>
                </section>
            </div>
    
            <div className={styles.researchContainer}>
                <h2 className={styles.researchTitle}>Comprehensive Research Reports
                    <img src="/img/reports.png" alt="Research Reports Icon" className={styles.researchIcon} /></h2>
                <p className={styles.researchText}>High-quality research reports provide deep insights into the financial world, offering invaluable guidance for your investment decisions. These reports typically feature:</p>
                <ul className={styles.researchList}>
                    <li>Detailed financial analyses and forecasts, providing a clear picture of a company's future prospects.</li>
                    <li>In-depth insights into industry trends, helping you understand market conditions and sector-specific dynamics.</li>
                    <li>Expert recommendations from seasoned financial analysts, offering a professional perspective on potential investment opportunities.</li>
                </ul>
                <p className={styles.researchText}>
                    Accessing these reports empowers you with the information needed to make informed, strategic decisions in the complex world of investing.
                </p>
                <div id={styles.reportContainer} className={styles.itemContainer}></div>
    
                <h2 className={styles.researchTitle}>Renowned Authors and Contributors
                    <img src="/img/authors.png" alt="Authors Icon" className={styles.researchIcon} /></h2>
                <p className={styles.researchText}>Gain insights from articles and reports crafted by respected authors and industry experts. The credibility and expertise of your sources are vital for informed decision-making. Key benefits include:</p>
                <ul className={styles.researchList}>
                    <li>Experienced authors deliver accurate and reliable data, helping you trust the information you base your decisions on.</li>
                    <li>Expert insights simplify complex market dynamics, making it easier for you to navigate the financial landscape.</li>
                    <li>Following reputable authors ensures that your investment strategies are informed by trusted perspectives, enhancing your overall approach.</li>
                </ul>
                <p className={styles.researchText}>
                    By following the insights of renowned experts, you can refine your strategies and make more confident investment decisions.
                </p>
                <div id={styles.navContainer} className={styles.itemContainer}></div>
    
                <h2 className={styles.researchTitle}>Tracking Market Trends
                    <img src="/img/trendings.png" alt="Trending Lists Icon" className={styles.researchIcon} /></h2>
                <p className={styles.researchText}>Staying on top of market trends is crucial for identifying investment opportunities and understanding market sentiment. Trending stock lists, especially those heavily bought by hedge funds, provide valuable insights because:</p>
                <ul className={styles.researchList}>
                    <li>They spotlight stocks with significant market activity, indicating high investor interest.</li>
                    <li>Help you pinpoint potential investment opportunities before they become widely recognized.</li>
                    <li>Reflect current market sentiment and investor behavior, helping you align your strategies with prevailing trends.</li>
                </ul>
                <p className={styles.researchText}>
                    Monitoring these trends allows you to stay ahead of the curve and make proactive, informed investment decisions.
                </p>
                <div id={styles.listContainer} className={styles.itemContainer}></div>
            </div>
        </div>
    );
};

export default MarketNews;
