import { useEffect } from "react";
export const Footer = () => {
  useEffect(() => {
    // Dynamically load the Iubenda script after the component has mounted
    const loadIubendaScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.iubenda.com/iubenda.js";
      script.async = true;
      document.body.appendChild(script);
    };

    if (window.addEventListener) {
      window.addEventListener("load", loadIubendaScript);
    } else if ((window as any).attachEvent) {
      (window as any).attachEvent("onload", loadIubendaScript);
    } else {
      window.onload = loadIubendaScript;
    }
  }, []);
  return (
    <footer>
      <div className="footer-content">
        <div className="disclaimer">
          <img src="/img/1.png" alt="CAN SLIM card with logo" />
          <p>
            Disclaimer: The information provided on this site is for educational
            and informational purposes only. We are not responsible for any
            actions taken based on this information. Please conduct your own
            research and consult with a qualified financial advisor before
            making any investment decisions.
          </p>
        </div>
        <div className="footer-links">
          <div className="link-container">
            <h3>learn more</h3>
            <a href="https://en.wikipedia.org/wiki/CAN_SLIM">Wikipedia</a>
            <a href="https://www.amazon.ca/dp/0071810110?psc=1&ref=ppx_yo2ov_dt_b_product_details#">
              Get the book
            </a>
            <a
              href="/pdf/IBD_BuyingChecklist.pdf"
              download="IBD_Buying_Checklist"
            >
              IBD's PDF
            </a>
          </div>
          <div className="link-container">
            <h3>project</h3>
            <a href="/about">About</a>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <p>© 2024 CANSLIM Calculator. All rights reserved. &#169;</p>
        <div className="iubenda">
          <a
            href="https://www.iubenda.com/privacy-policy/10438829"
            className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
            title="Privacy Policy"
          >
            Privacy Policy{" "}
          </a>
          <a
            href="https://www.iubenda.com/privacy-policy/10438829/cookie-policy"
            className="iubenda-black iubenda-noiframe iubenda-embed iubenda-noiframe"
            title="Cookie Policy"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
