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
                                <div key={index} className={styles.newss}>
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
                                                        e.stopPropagation();
                                                        window.location.href = `/canslim-stock?symbol=${ticker}`;
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
                    </div>
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
           
        </div>
    );
};

export default MarketNews;
