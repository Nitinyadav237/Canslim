import { useLocation } from "react-router-dom";
import Search from "../Search"; // Assuming Search.tsx is in the same directory

const Header = () => {
  const location = useLocation();
  const isRoot = location.pathname === "/";

  return (
    <header>
      <nav>
        <a href="/" className="home">
          <img alt="CANSLIM Logo" src="/img/2.png" id="logo" />
        </a>
        <a href="/top-stock" className="nav-link">
          <span className="nav-text">Top Stocks</span>
        </a>
        <a href="/market-news" className="nav-link">
          <span className="nav-text">News</span>
        </a>
        <a href="/crypto-analysis" className="nav-link">
          <span className="nav-text">Crypto</span>
        </a>
         {/* Conditionally render Search component with dynamic width */}
      {!isRoot && (
          <span  style={{ width: isRoot ? "90%" : "45%"}}>
          <Search customStyles={{ width: "35%", top:"100px",left:"auto" }}/>
        </span>
      )}
      </nav>

     
    </header>
  );
};

export default Header;
