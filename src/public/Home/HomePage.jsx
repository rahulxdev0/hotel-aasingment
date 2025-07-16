import React from "react";
import './Home.css';

const HomePage = () => {
  return (
    <body>
      <section class="hero-section">
        <div class="floating-elements">
          <div class="floating-element"></div>
          <div class="floating-element"></div>
          <div class="floating-element"></div>
          <div class="floating-element"></div>
        </div>

        <div class="hero-content">
          <nav class="nav-links">
            <a href="#home">Home</a>
            <a href="#rooms">Rooms</a>
            <a href="#amenities">Amenities</a>
            <a href="#dining">Dining</a>
            <a href="#spa">Spa</a>
            <a href="#contact">Contact</a>
          </nav>

          <h1 class="hero-title">Luxe Vista</h1>
          <p class="hero-subtitle">LUXURY REDEFINED</p>
          <p class="hero-description">
            Experience unparalleled elegance and comfort in the heart of the
            city. Where every moment becomes a cherished memory and luxury meets
            perfection.
          </p>

          <div class="cta-buttons">
            <a href="#book" class="btn btn-primary">
              Reserve Now
            </a>
            <a href="#explore" class="btn btn-secondary">
              Explore Rooms
            </a>
          </div>
        </div>

        <div class="scroll-indicator">
          <span>Discover More</span>
          <span class="scroll-arrow">↓</span>
        </div>
      </section>
    </body>
  );
};

export default HomePage;
