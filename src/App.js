import React, { useState, useEffect } from 'react';
import './App.css';
import laptopImage from './assets/laptopimage.png';
import robologo from './assets/robosensy_logo.png';
import algologo from './assets/algodive_logo.png';
import doctorImg from './assets/Doctor_profile.png';
import { FaInstagram, FaFacebookF, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../src/Navbar/Navbar';

const App = () => {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: "Dr Saira",
      text: "RoboSensy has revolutionized the way we manage our clinic. Scheduling appointments is now effortless, and our patients appreciate the digital prescriptions. Highly recommend!",
      image: doctorImg
    },
    {
      name: "Dr Sakeena",
      text: "Managing patient records and staff tasks has never been easier. The intuitive interface and robust document management features of RoboSensy have significantly improved our clinic's efficiency.",
      image: doctorImg
    },
    {
      name: "Nasreen",
      text: "With RoboSensy, we have streamlined our entire workflow. From appointment scheduling to patient communication, everything is seamless. It's truly the best clinic management solution out there.",
      image: doctorImg
    }
  ];

  const Testimonials = ({ testimonials }) => {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 700);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
      <section id="testimonials" className="testimonials">
        <div className="testimonial-heading">
          <h2>What Doctors Say About Us</h2>
        </div>
        {isMobile ? (
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </Carousel>
        ) : (
          <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <h3>{testimonial.name}</h3>
                <p>{testimonial.text}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="App">
      <main>
        <div className="navbar">
          <Navbar />
        </div>
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>RoboSensy</h1>
            <p>The Future of Healthcare</p>
            <button className="book-demo">BOOK DEMO</button>
          </div>
          <div className="hero-image">
            <img src={robologo} alt="RoboSensy" />
          </div>
        </section>
        <section id="services" className="services">
          <div className="services-heading">
            <h1>Our Services</h1>
          </div>
          <div className="services-content">
            <ul className="services-list">
              <li>
                <span role="img" aria-label="appointment">📅</span> 
                <span>Appointment Scheduling & Management </span>
              </li>
              <li><span role="img" aria-label="medicine">💊</span> <span> Medicine Management</span></li>
              <li><span role="img" aria-label="patient">👨‍⚕️</span> <span> Patient Management</span></li>
              <li><span role="img" aria-label="prescription">📝</span> <span>Prescription Generator</span></li>
              <li><span role="img" aria-label="invoice">💵</span><span> Invoice Generator</span></li>
              <li><span role="img" aria-label="analytics">📊</span><span> Analytic Dashboard</span></li>
              <li><span role="img" aria-label="hrms">📋</span> <span>HRMS Portal</span></li>
            </ul>
            <div className="services-image">
              <img src={laptopImage} alt="RoboSensy Dashboard" />
            </div>
          </div>
        </section>
        <Testimonials testimonials={testimonials} />
        <section id="contact" className="contact">
          <div className="contact-content">
            <div className="contact-details">
              <h2>Contact Us</h2>
              <p>
                Have questions or need assistance? Feel free to reach out to us at <br />
                <a href="tel:8619131789">
                  <FaPhoneAlt style={{ marginRight: '8px' }} />
                  861-913-1789
                </a> 
              </p>
              <p className='alternate'>Alternatively, you can fill out our contact form</p>
            </div>

            <div className="contact-forms">
              <form className="contact-form">
                <div className="form-group">
                  <input type="text" id="name" name="name" placeholder='Enter Your Name' />
                </div>
                <div className="form-group">
                  
                  <input type="email" id="email" name="email" placeholder='Enter Your Email Id' />
                </div>
                <div className="form-group">
                  
                  <input type="tel" id="phone" name="phone" placeholder='Enter Phone Number' />
                </div>
                <div className="form-group">
                  <textarea id="message" name="message" placeholder='Write Your Message...'></textarea>
                </div>
                <button type="submit">SUBMIT NOW</button>
              </form>
            </div>
          </div>
          <div className="footer">
            <div className="logo-section">
              <img src={robologo} alt="RoboSensy Logo" className="logo-image" />
              <div className="logo-text">
                <h1>RoboSensy</h1>
                <p>The Future of Healthcare</p>
              </div>
            </div>
            <div className="social-section">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
              <ImLinkedin />
            </div>
            <div className="powered-by-section">
              <p>Powered By</p>
              <img src={algologo} alt="Powered By Logo" className="powered-by-image" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
