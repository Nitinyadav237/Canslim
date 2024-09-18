
import styles from "./About.module.css" 
const About = () => {
  return (
    <div>
         <div className={styles.content}>
        {/* <!-- Introduction Section --> */}
        <section className={styles.introSection}>
            <h1>About CANSLIM Calculator</h1>
            <p>Welcome to CANSLIM Calculator, your trusted resource for mastering the CAN SLIM investment strategy. This platform is designed to simplify the process of identifying high-growth stocks, leveraging the proven principles of the CAN SLIM methodology to empower your investment decisions.</p>
            
            {/* <!-- Developer Section --> */}
            <section className={styles.developerSection}>
                <div className={styles.profilePicture}>
                    <img src="/img/simy.png" alt="Developer Profile Picture"/>
                </div>
                <div className={styles.developerContent}>
                    <h2>the developer</h2>
                    <p>Hello, I’m <a href="https://x.com/simy46_" target="_blank">@simy46</a>, the developer of CANSLIM Calculator. I started this project in 2023 out of a passion for mathematics and an interest in the CAN SLIM strategy.</p>
                    <p>Although I had no background in finance or web development, I was determined to create a platform that simplifies complex investment strategies. Over the past year, I spent many hours learning how to develop both the frontend and backend. The result is a tool designed to help investors make informed decisions using the CAN SLIM strategy.</p>
                    <p>This project reflects my dedication and passion, and I'm proud to make it available to you.</p>
                </div>
            </section>
        </section>
        
            {/* <!-- History Section --> */}
            <section className={styles.historySection}>
                <div className={styles.historyContent}>
                    <h2>History</h2>
                    <div className={styles.historyTextImage}>
                        <div className={styles.textItem}>
                            <p>
                                In May 2023, after completing my second semester at university, I found myself searching for a new project. It was during this time that I came across a video about the book <em>How to Make Money in Stocks</em> by William J. O'Neil. Intrigued, I decided to read it, but I quickly realized that I was struggling to grasp the technical terms and concepts. Every few pages, I had to stop and look up definitions, which made the process slow and frustrating.
                            </p>
                        </div>
                        <div className={styles.textItem}>
                            <p>
                                Then, I reached page 32, where I discovered the CAN SLIM buying checklist. Seeing those clear, precise criteria was a turning point. I noticed two things: first, I had no prior knowledge of these concepts, and second, the criteria were quantitative, not qualitative. This was refreshing because, unlike many investment strategies that rely on subjective judgment, CAN SLIM's success factors were concrete and measurable. 
                            </p>
                        </div>
                        <div className={styles.imageContent}>
                            <img src="/img/page32.png" alt="Page 32 of How to Make Money in Stocks with Notes"/>
                            <p className={styles.citation}>
                                <em>How to Make Money in Stocks</em> by William J. O'Neil
                            </p>
                        </div>
                        <div className={`${styles.textItem} ${styles.textSpan}`}>
                            <p>
                                As someone who has always been comfortable with numbers, this approach resonated with me. It was at that moment that I decided to create a tool to simplify this process, turning the CAN SLIM strategy into a practical, accessible resource for others. Since then, I've been continually coding and improving the CANSLIM Calculator, driven by a desire to make the platform as effective and user-friendly as possible.
                            </p>
                            <p>
                                This journey began in 2022, and I continue to work on it alongside my studies, constantly seeking new ways to enhance the website and expand its capabilities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        
            {/* <!-- Mission Section --> */}
            <section className={styles.missionSection}>
                <h2>Mission</h2>
                <p>
                    The mission of CANSLIM Calculator is to transform the complexities of stock analysis into a clear, actionable process. By leveraging the CAN SLIM strategy, this platform aims to empower investors at all levels with the tools and insights they need to make informed decisions. What started as a personal quest to understand and apply a proven investment strategy has evolved into a resource that makes sophisticated stock selection accessible to everyone.
                </p>
    
                {/* <!-- Features Section --> */}
                <section className={styles.featuresSection}>
                    <h2>Features</h2>
                    <div className={styles.featuresGrid}>
                        <a href="/top-stocks" target="_blank" className={styles.featureItem}>
                            <h4>Top Stocks</h4>
                            <p>Explore the top-performing stocks, backed by comprehensive analysis and market insights.</p>
                        </a>
                        <a href="/market-news" target="_blank" className={styles.featureItem}>
                            <h4>Market News</h4>
                            <p>Stay updated with the latest news, trends, and shifts in the financial markets.</p>
                        </a>
                        <a className={styles.featureItem}>
                            <h4>Stock Calculator</h4>
                            <p>Analyze stocks with precision using the time-tested principles of the CAN SLIM method.</p>
                        </a>
                        <a href="/crypto-analysis" target="_blank" className={styles.featureItem}>
                            <h4>Crypto Analysis (in development)</h4>
                            <p>Delve into cryptocurrency trends with our soon-to-be-released analysis tools.</p>
                        </a>
                    </div>
                </section>
            </section>
        
            {/* <!-- Testimonials Section --> */}
            <section className={styles.testimonialsection}>
                <h2>Testimonials</h2>
                <div className={styles.testimonialcontainer}>
                    <blockquote>
                        <p>"This tool is a game-changer for anyone serious about investing. Simple, powerful, and effective!"</p>
                        <div className={styles.rating}>★★★★★</div>
                        <cite>- James Carter</cite>
                    </blockquote>
                    <blockquote>
                        <p>"I’ve tried other tools, but CANSLIM Calculator stands out with its accuracy and ease of use. Highly recommended!"</p>
                        <div className={styles.rating}>★★★★☆</div>
                        <cite>- Emily Dawson</cite>
                    </blockquote>
                    <blockquote>
                        <p>"CANSLIM Calculator gave me the confidence to make smarter investment decisions. A must-have for every investor."</p>
                        <div className={styles.rating}>★★★★★</div>
                        <cite>- Michael Roberts</cite>
                    </blockquote>
                </div>
            </section>
    
            {/* <!-- Roadmap Section --> */}
            <section className={styles.roadmapSection}>
                <h2>Roadmap</h2>
                <ul className={styles.roadmapList}>
                    <li>
                        <span className={styles.roadmapDate}>June 2023:</span> Discovery of the CANSLIM strategy and the beginning of research into its application for stock analysis.
                    </li>
                    <li>
                        <span className={styles.roadmapDate}>January 2024:</span> Development of the first interface, referred to as Version 1.0, marking the initial step toward creating a user-friendly tool.
                    </li>
                    <li>
                        <span className={styles.roadmapDate}>May 2024:</span> Release of Version 1.1, introducing key features and improvements based on early feedback and testing.
                    </li>
                    <li>
                        <span className={styles.roadmapDate}>July 20, 2024:</span> Launch of a new interface, enhancing usability and visual appeal, leading up to the official release.
                    </li>
                    <li>
                        <span className={styles.roadmapDate}>August 20, 2024:</span> Official release of Version 1.2, offering a fully functional and refined platform for users to analyze stocks using the CANSLIM strategy.
                    </li>
                </ul>
                <h3>In The Future...</h3>
                <ul className={`${styles.roadmapList} ${styles.futureRoadmap}`}>
                    <li>
                        <span className={styles.roadmapFuture}>Complete Crypto Analysis:</span> Finalizing the Crypto Analysis section with extensive features. I have many ideas to make it a comprehensive tool for analyzing digital currencies.
                    </li>
                    <li>
                        <span className={styles.roadmapFuture}>AI Integration:</span> Adding AI-driven insights and predictions to further enhance the accuracy and relevance of stock analysis.
                    </li>
                    <li>
                        <span className={styles.roadmapFuture}>Regular Updates:</span> Committed to regularly updating sections like Top Stocks and Crypto Analysis to ensure users have the latest information.
                    </li>
                    <li>
                        <span className={styles.roadmapFuture}>Enhanced User Experience:</span> Continuous improvement of the platform's user interface and experience, making it even more accessible and user-friendly.
                    </li>
                </ul>
            </section>
    
            {/* <!-- Contact and Support Section --> */}
            <section className={styles.contactSupportSection}>
                <div className={styles.contactWrapper}>
                    <h2>Contact and Support</h2>
                    <p>If you have any questions or need assistance, we're here to help.</p>
                    <p>Feel free to reach out via the methods below:</p>
                    <div className={styles.contactIcons}>
                        <a href="mailto:simy.46.dev@gmail.com" className={styles.contactIcon}>
                            <img src="/img/email.png" alt="Email Icon"/>
                            <span>simy.46.dev@gmail.com</span>
                        </a>
                        <a href="https://github.com/simy46" target="_blank"  className={`${styles.contactIcon} ${styles.github}`}>
                            <img src="/img/github.png" alt="Github Icon"/>
                            <span>simy46</span>
                        </a>
                        <a href="https://x.com/simy46_" target="_blank"  className={`${styles.contactIcon} ${styles.twitter}`}>
                            <img src="/img/x.png" alt="Twitter Icon"/>
                            <span>@simy46_</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default About