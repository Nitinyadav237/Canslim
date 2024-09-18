import Aside from "../components/Aside"
import FAQ from "../components/FAQ"
import IntroSection from "../components/IntroSection"
import MainSection from "../components/MainSection"
import Search from './../components/Search';
const Home = () => {
  return (
    <div>

      {/* <Hero /> */}
      <div className="container">
            <div className="title-container">
                <div className="background-text">
                    <h1 className="canslim">CANSLIM</h1>
                    <h1 className="strategy">STRATEGY</h1>
                </div>
                <h1 className="calculator">CALCULATOR</h1>
            </div>
{/* search ---start */}
              <div className="search-container">
                <h3>Analyze stocks efficiently using a free stock calculator</h3>
                <Search/>
            </div>
{/* search ---end */}
        
        </div>
      <div className="content-wrapper" id="canslim-info">
        <Aside />
        <div className="main-content">
          <IntroSection />
          <MainSection />
          <FAQ />
        </div>
      </div >
    </div >
  )
}

export default Home