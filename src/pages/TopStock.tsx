const TopStock = () => {
  return (
    <div>
      <div className="container">
        {/* <!-- Selection Input --> */}
        <div className="title with-navigation">
          <div className="title" id="section-title">
            <h1></h1>
            <i className="fa-solid fa-fire"></i>
          </div>
          <select id="stock-selector">
            <option value="trending">Trending Stocks</option>
            <option value="gainers">Daily Gainers</option>
          </select>
        </div>

        {/* <!-- TRENDING CONTAINER --> */}
        <div id="trending-container">
          <div id="stocks-container"></div>
          <div id="loading">
            <div className="loader"></div>
          </div>
          <p className="note">
            Note: The stocks listed here are currently trending in the market. This does not imply a recommendation for investment.
          </p>
        </div>

        {/* <!-- DAILY GAINERS CONTAINER --> */}
        <div id="gainers-container" className="hidden">
          <div id="daily-gainers-container"></div>
          <div id="loading-daily">
            <div className="loader"></div>
          </div>
          <p className="note">
            Note: The stocks listed in the Daily Gainers section are based on their performance within a specific time frame and do not constitute a recommendation for investment.
          </p>
        </div>

      </div>
    </div>
  );
}

export default TopStock