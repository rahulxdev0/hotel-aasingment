import React, { useState } from "react";
import './Home.css';
import Modal from "../EditButtonModal/Modal";
import DiningPage from "../Dining/DiningPage";

const HomePage = () => {
  const [buttonText, setButtonText] = useState("+ Add Button");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempText, setTempText] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleEditClick = () => {
    setTempText(buttonText);
    setIsModalOpen(true);
  };

  const handleSaveText = () => {
    if (tempText.trim()) {
      setButtonText(tempText);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div>
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
            <div 
              className="btn-container"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <button className="btn btn-secondary">
                {buttonText}
              </button>
              {isHovered && (
                <button 
                  className="edit-btn"
                  onClick={handleEditClick}
                  title="Edit button text"
                >
                  ✏️
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Discover More</span>
          <span className="scroll-arrow">↓</span>
        </div>

        {/* Modal */}
        <Modal 
          isOpen={isModalOpen}
          onClose={handleCancel}
          onSave={handleSaveText}
          title="Edit Button Text"
        >
          <input
            type="text"
            value={tempText}
            onChange={(e) => setTempText(e.target.value)}
            placeholder="Enter button text"
            className="modal-input"
            autoFocus
          />
        </Modal>
      </section>
    </div>
    <DiningPage />
  </>
  );
};

export default HomePage;