import { useCallback } from "react";
import "./Header.css";

const Header = () => {
  const onNavLinksClick = useCallback(() => {
    window.open("https://web.facebook.com/");
  }, []);

  return (
    <header className="typecentered-nav">
      <div className="brand1">
        <img className="icon" alt="" src="/icon@2x.png" />
        <div className="brandname1">Tech: Anthony Marin</div>
      </div>
      <button className="nav-links" onClick={onNavLinksClick}>
        <div className="text-container2">
          <div className="cta2">Reparar Ahora</div>
        </div>
      </button>
      <div className="nav-links1">
        <div className="nav-link">
          <div className="nav-label3">Homepage</div>
        </div>
        <div className="nav-link">
          <div className="nav-label3">Our Services</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
