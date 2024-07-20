import './Navbar.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoListSharp } from "react-icons/io5";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const isWideScreen = windowWidth > 1000;

  const handleClickOutside = (event) => {
    //checks if click is not on sidebar
    if (sidebar && !isWideScreen && !document.querySelector('.sidebar-menu').contains(event.target) && !document.querySelector('.sidebar-icons').contains(event.target)) {
      setSidebar(false);
    }
  };

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setSidebar(false); // Close sidebar after navigation
    }
  };

  const handleLogout = () =>{
    localStorage.removeItem("token");
    // navigate("/login")
  }

  useEffect(() => {
    if (!isWideScreen) {
      if (sidebar && !isWideScreen) {
        document.addEventListener('mousedown', handleClickOutside);
      } else if (!isWideScreen) {
        document.removeEventListener('mousedown', handleClickOutside);
      }
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
    // eslint-disable-next-line
  }, [sidebar]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isWideScreen ? (
        <>
          <nav className="navbar-wideScreen">
            <div className="logo" onClick={() => handleScrollToSection('home')} style={{ marginLeft: "30px" }}>RoboSensy</div>
            <ul className="nav-links" style={{ marginRight: "50px" }}>
              <li><a onClick={() => handleScrollToSection('home')}>Home</a></li>
              <li><a onClick={() => handleScrollToSection('services')}>Services</a></li>
              <li><a onClick={() => handleScrollToSection('testimonials')}>Demo</a></li>
              <li><a onClick={() => handleScrollToSection('blog')}>Blog</a></li>
              <li><a onClick={() => handleScrollToSection('contact')}>Contact</a></li>
              <li onClick={handleLogout}><a>SignIn/LogIn</a></li>
            </ul>
          </nav>
        </>
      ) : (
        <>
          <div style={{ maxWidth: "100vw" }}>
            <div className='navbar'>
              <Link to='#' className='sidebar-icons'>
                <FaBars onClick={showSidebar} />
              </Link>
            </div>
            <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
              <ul className='sidebar-menu-items' onClick={showSidebar}>
                <li className='sidebar-toggle'>
                  <Link to='#' className='sidebar-icons'>
                    <IoMdClose style={{ color: "black" }} />
                  </Link>
                </li>
                <li className="list-items" onClick={() => handleScrollToSection('home')}>
                  <Link to='#'>
                    <IoListSharp style={{ color: "black" }} />
                    <span style={{ color: "black" }}>Home</span>
                  </Link>
                </li>
                <li className="list-items" onClick={() => handleScrollToSection('services')}>
                  <Link to='#'>
                    <IoListSharp style={{ color: "black" }} />
                    <span style={{ color: "black" }}>Services</span>
                  </Link>
                </li>
                <li className="list-items" onClick={() => handleScrollToSection('testimonials')}>
                  <Link to='#'>
                    <IoListSharp style={{ color: "black" }} />
                    <span style={{ color: "black" }}>Demo</span>
                  </Link>
                </li>
                <li className="list-items" onClick={() => handleScrollToSection('blog')}>
                  <Link to='#'>
                    <IoListSharp style={{ color: "black" }} />
                    <span style={{ color: "black" }}>Blog</span>
                  </Link>
                </li>
                <li className="list-items" onClick={() => handleScrollToSection('contact')}>
                  <Link to='#'>
                    <IoListSharp style={{ color: "black" }} />
                    <span style={{ color: "black" }}>Contact</span>
                  </Link>
                </li>
                <li className="list-items" onClick={handleLogout}>
                  <Link to='#'>
                    <CiLogout style={{ color: "black" }} />
                    <span style={{ color: "black" }}>SignIn/LogIn</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
