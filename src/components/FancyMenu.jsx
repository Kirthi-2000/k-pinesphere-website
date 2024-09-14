import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Expo } from "gsap";
import "./FancyMenu.css";
import RightNavbar from "./RightNavbar";
import { Link } from 'react-router-dom';

const FancyMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRightNavbarExpanded, setIsRightNavbarExpanded] = useState(false);
  const circleRef = useRef(null);
  const navbarRef = useRef(null);
  const toggleRef = useRef(null);

  const getVpdr = () => {
    const html = document.documentElement;
    const vph = Math.pow(html.offsetHeight, 2);
    const vpw = Math.pow(html.offsetWidth, 2);
    const vpd = Math.sqrt(vph + vpw);
    return (vpd * 2) / circleRef.current.clientWidth;
  };

  const openNavbar = () => {
    const openTimeline = gsap.timeline();
    openTimeline.to(navbarRef.current, 0, { display: "flex" });
    openTimeline.to(circleRef.current, 1.5, {
      scale: getVpdr(),
      ease: Expo.easeInOut,
    });
    openTimeline.staggerFromTo(
      navbarRef.current.querySelectorAll("ul li"),
      0.5,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1 },
      0.1,
      1
    );
  };

  const closeNavbar = () => {
    const closeTimeline = gsap.timeline();
    closeTimeline.staggerFromTo(
      navbarRef.current.querySelectorAll("ul li"),
      0.5,
      { y: 0, opacity: 1, delay: 0.5 },
      { y: 25, opacity: 0 },
      -0.1
    );
    closeTimeline.to(circleRef.current, 1, {
      scale: 0,
      ease: Expo.easeInOut,
      delay: -0.5,
    });
    closeTimeline.to(navbarRef.current, 0, { display: "none" });
  };

  const handleToggleClick = () => {
    if (isOpen) {
      document.body.classList.remove("menu-open");
      toggleRef.current.classList.remove("active");
      closeNavbar();
    } else {
      document.body.classList.add("menu-open");
      toggleRef.current.classList.add("active");
      openNavbar();
    }
    setIsOpen(!isOpen);
  };
  

  const handleRightNavbarToggle = () => {
    setIsRightNavbarExpanded(!isRightNavbarExpanded);
  };

  useEffect(() => {
    const handleResize = () => {
      if (isOpen) {
        gsap.to(circleRef.current, 1, { scale: getVpdr(), ease: Expo.easeInOut });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div id="wrapper">
      {/* <SceneComponent />  */}
      <button
        className="navbar-toggle"
        id="toggle"
        type="button"
        onClick={handleToggleClick}
        ref={toggleRef}
      >
        <svg viewBox="0 0 100 100" width="80">
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </button>

      <div className="navbar" ref={navbarRef}>
        <ul>
          <li>
            <Link to="/" data-text="1">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" data-text="2">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" data-text="3">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/jobs" data-text="4">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/services" data-text="5">
              Services
            </Link>
          </li>
          <li>
            <Link to="/team" data-text="6">
              Team
            </Link>
          </li>
          <li>
            <Link to="/news" data-text="7">
              News
            </Link>
          </li>
          <li>
            <Link to="/contact" data-text="8">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div id="bg-circle" ref={circleRef}></div>

      <RightNavbar
        isExpanded={isRightNavbarExpanded}
        handleToggle={handleRightNavbarToggle}
      />
    </div>
  );
};

export default FancyMenu;