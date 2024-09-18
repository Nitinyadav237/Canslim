import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SERVER_URL } from "../../constants";

interface QuoteItem {
    shortname: string;
    name: string;
    longName: string;
    symbol: string;
    industry?: string;
}

interface NewsItem {
    uuid: string;
    title: string;
    publisher: string;
    link: string;
    providerPublishTime: string;
    thumbnail?: {
        resolutions: {
            url: string;
            width: number;
            height: number;
        }[];
    };
}
interface SearchProps {
    customStyles?: React.CSSProperties;
}
const Search = ({ customStyles }: SearchProps) => {
const [activeTab, setActiveTab] = useState('results');
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [showMoreResults, setShowMoreResults] = useState(false);
    const [showMoreNews, setShowMoreNews] = useState(false);
    const [loading, setLoading] = useState(false);
    const [quotes, setQuotes] = useState<QuoteItem[]>([]);
    const [news, setNews] = useState<NewsItem[]>([]);

    // Debounce state
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

    // Debounce logic
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); // 300ms debounce time

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    // API call triggered by the debounced search term
    useEffect(() => {
        if (debouncedSearchTerm) {
            setLoading(true);
            axios.get(`${SERVER_URL}/api/search`, { params: { q: debouncedSearchTerm } })
                .then(response => {
                    if (response.data === "'Erreur coté serveur") {
                        // Handle server error
                    } else {
                        const { quotes = [], news = [] } = response.data;
                        setQuotes(quotes);
                        setNews(news);
                        setShowResults(true);
                    }
                })
                .catch(error => {
                    console.error("There was an error fetching the data!", error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            setShowResults(false);
        }
    }, [debouncedSearchTerm]);

    const handleTabSwitch = (tab: string) => {
        setActiveTab(tab);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setShowResults(false);
    };

    const toggleMoreResults = () => {
        setShowMoreResults(!showMoreResults);
    };

    const toggleMoreNews = () => {
        setShowMoreNews(!showMoreNews);
    };

    return (
        <>
            <div className="input-container">
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search a stock..."
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <i
                        className="fa-solid fa-magnifying-glass"
                        id="search-glass"
                        onClick={() => {}} // Remove manual search as debouncing handles this
                    ></i>
                </div>

                {loading && <div className="spinner"></div>}

                {showResults && !loading && (
                    <div id="search-results" className={`container ${quotes.length === 0 && news.length === 0 ? 'no-results' : ''}`} style={customStyles}>
                        <nav className="tab-nav">
                            <button
                                className={`tab-btn ${activeTab === 'results' ? 'active' : ''}`}
                                onClick={() => handleTabSwitch('results')}
                            >
                                Results
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
                                onClick={() => handleTabSwitch('news')}
                            >
                                News
                            </button>
                        </nav>

                        {/* Results Tab */}
                        <div id="results-results" className={`tab-content ${activeTab === 'results' ? 'active' : ''}`}>
                            {quotes.length > 0 ? (
                                quotes.slice(0, showMoreResults ? quotes.length : 2).map((item, index) => (
                                    <div
                                        key={index}
                                        className="result-item"
                                        onClick={() => window.location.href = `/canslim-stock?symbol=${item.symbol}`}
                                    >
                                        <p>{item.shortname || item.name || item.longName} ({item.symbol || "-"})</p>
                                        {item.industry && <span className="industry">{item.industry}</span>}
                                    </div>
                                ))
                            ) : (
                                <p className="no-result">No results found.</p>
                            )}
                            {quotes.length > 0 && (
                                <div className="btnDiv">
                                    <p className="see-more" onClick={toggleMoreResults}>
                                        {showMoreResults ? 'See less' : 'See more'}
                                    </p>
                                    <p className="clear" onClick={handleClearSearch}>×</p>
                                </div>
                            )}
                        </div>

                        {/* News Tab */}
                        <div id="news-results" className={`tab-content ${activeTab === 'news' ? 'active' : ''}`}>
                            {news.length > 0 ? (
                                news.slice(0, showMoreNews ? news.length : 2).map((item, index) => (
                                    <div key={index} className="news-item">
                                        {item.thumbnail && item.thumbnail.resolutions.length > 0 && (
                                            <img src={item.thumbnail.resolutions[0].url} alt={item.title} className="news-thumbnail" />
                                        )}
                                        <div className="news-details">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-title">
                                                {item.title}
                                            </a>
                                            <p className="news-meta">{item.publisher} - {new Date(item.providerPublishTime).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="no-result">No news found.</p>
                            )}
                            {news.length > 0 && (
                                <div className="btnDiv">
                                    <p className="see-more" onClick={toggleMoreNews}>
                                        {showMoreNews ? 'See less' : 'See more'}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
        </>
  )
}

export default Search