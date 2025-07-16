import React from "react";
import './Home.css';

const HomePage = () => {
  return (
    <body>
      <section className="hero-section">
        <nav className="navbar">
          <div className="hotel-logo">Luxe Vista</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#dining">Dining</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <h1 className="hero-title">A Luxurious Way to</h1>
          <h1 className="hero-title">Enjoy Your Life</h1>
          <p className="hero-description">
            Experience unparalleled elegance and comfort in the heart of the
            city.
          </p>

          <div className="cta-buttons">
            <a href="#book" className="btn btn-primary">
              Reserve Now
            </a>
            <a href="#explore" className="btn btn-secondary">
              Explore Rooms
            </a>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Discover More</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>
    </body>
  );
};

export default HomePage;
