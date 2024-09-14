import React, { useState } from "react";
import './Portfolio.css';
import logo1 from './images/audiomob.png';
import logo2 from './images/bitstar.png';
import logo3 from './images/midnite.png';
import logo4 from './images/mobile1.png';
import logo5 from './images/mobile2.png';
import logo6 from './images/mobile3.png';
import logo7 from './images/partner-1.png';
import logo8 from './images/webapp1.png';
import logo9 from './images/webapp2.png';
import logo10 from './images/webapp3.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Active");
  const [popup, setPopup] = useState({ visible: false, content: null });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const logos = [
    { id: 1, name: "Logo 1", src: logo1 },
    { id: 2, name: "Logo 2", src: logo2 },
    { id: 3, name: "Logo 3", src: logo3 },
    { id: 4, name: "Logo 4", src: logo4 },
    { id: 5, name: "Logo 5", src: logo5 },
    { id: 6, name: "Logo 6", src: logo6 },
    { id: 7, name: "Logo 7", src: logo7 },
    { id: 8, name: "Logo 8", src: logo8 },
    { id: 9, name: "Logo 9", src: logo9 },
    { id: 10, name: "Logo 10", src: logo10 },
  ];

  const handleLogoClick = (logo) => {
    setPopup({
      visible: true,
      content: (
        <div className="popup-content">
          <img src={logo.src} alt={logo.name} className="popup-image" style={{ width:'50% !important' }}/>
          <div className="popup-text">
            <p>Lightheart is a team of veteran mobile game developers on a mission to change not only games but how they're made. They are pioneering Hypercore - the awesomely fun combination of the approachability of hyper-casual games and the engagement of mid-core games.</p>
            <a href="https://www.lightheart.games/" target="_blank" rel="noopener noreferrer">https://www.lightheart.games/</a>
            <h4>Founders</h4>
            <p>Kalle Kaivola, Christophe Pardon, Mikko Kautto, Miikka Ahonen, Jouni Suominen</p>
            <h4>Sector</h4>
            <p>content</p>
            <h4>Status</h4>
            <p>active</p>
            <h4>Location</h4>
            <p>Helsinki, Finland</p>
          </div>
        </div>
      )
    });
  };

  const handleClosePopup = () => {
    setPopup({ visible: false, content: null });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="portfolio-container">
      <aside className="sidebar">
        <header className="portfolio-header">
          <div className="header-left">
            <h1 style={{fontSize:'4.5rem'}} className="maintitles styrenea-bold uppercase font-bold firsttext notgradied is-inview" data-scroll="true" data-scroll-offset="200">
              <span className="prefix"></span>
              <span className="tit">
                <span className="line">Investing globally,</span>
                <span className="line"><span className="grad">across</span> content,</span>
                <span className="line">platforms and</span>
                <span className="line"><span className="grad">technologies</span></span>
              </span>
            </h1>
            <h2 className="header-subtitle">Explore Our Portfolio</h2>
          </div>
          <div className="header-right">
            <div className="sphere-container">
              <div className="sphere"></div>
            </div>
          </div>
        </header>

        {/* Active/Exited Buttons */}
        <div className="tab-container">
          <button
            className={`tab ${activeTab === "Active" ? "active" : ""}`}
            onClick={() => setActiveTab("Active")}
          >
            Active
          </button>
          <button
            className={`tab ${activeTab === "Exited" ? "active" : ""}`}
            onClick={() => setActiveTab("Exited")}
          >
            Exited
          </button>
        </div>

        {/* Filter Dropdown */}
        <div className="filter-container">
          <button className="filter-btn" onClick={toggleFilter}>
            <FontAwesomeIcon icon={faFilter} className="filter-icon" /> Filter
          </button>
          {isFilterOpen && (
            <div className="filter-dropdown">
              <ul>
                <li onClick={() => setActiveTab("All")}>All</li>
                <li onClick={() => setActiveTab("Active")}>Active</li>
                <li onClick={() => setActiveTab("Exited")}>Exited</li>
              </ul>
            </div>
          )}
        </div>
      </aside>

      <main className="logos-section">
        <div className="logos-grid">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-item" onClick={() => handleLogoClick(logo)}>
              <img src={logo.src} alt={logo.name} className="logo-image" />
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {popup.visible && (
          <div className="popup">
            <div className="popup-header">
              <h3 className="popup-title">Company Details</h3>
              <button className="popup-close" onClick={handleClosePopup}>&times;</button>
            </div>
            {popup.content}
          </div>
        )}
      </main>
    </div>
  );
};

export default Portfolio;


