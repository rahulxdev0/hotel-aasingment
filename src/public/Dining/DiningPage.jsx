import React, { useState } from "react";
import './Dining.css';

const EditableText = ({ initialText, placeholder, className }) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [tempText, setTempText] = useState("");

  const handleEditClick = () => {
    setTempText(text);
    setIsEditing(true);
  };

  const handleSave = () => {
    if (tempText.trim()) {
      setText(tempText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempText("");
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div className="editable-text-container">
      <div 
        className={`editable-text ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
        {isHovered && !isEditing && (
          <button 
            className="edit-icon-btn"
            onClick={handleEditClick}
            title="Edit text"
          >
            ✏️
          </button>
        )}
      </div>
      
      {isEditing && (
        <div className="edit-modal-overlay">
          <div className="edit-modal">
            <h3>Edit Text</h3>
            <textarea
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              placeholder={placeholder}
              className="edit-input"
              autoFocus
              onKeyDown={handleKeyPress}
            />
            <div className="edit-modal-buttons">
              <button onClick={handleSave} className="save-btn">Save</button>
              <button onClick={handleCancel} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DiningPage = () => {
  return (
    <div className="dining-page">
      <section className="dining-section">
        <div className="dining-container">
          <div className="dining-image">
            <div className="best-deals-badge">
              <EditableText 
                initialText="Best Deals"
                placeholder="Enter offer text"
                className="badge-title"
              />
              <EditableText 
                initialText="Grilled Ribeye Beef"
                placeholder="Enter offer description"
                className="badge-subtitle"
              />
            </div>
          </div>
          
          <div className="dining-content">
            <EditableText 
              initialText="Multiple Cuisines & Beverages"
              placeholder="Enter main title"
              className="dining-title"
            />
            
            <div className="dining-description">
              <EditableText 
                initialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                placeholder="Enter first paragraph"
                className="description-text"
              />
              
              <EditableText 
                initialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                placeholder="Enter second paragraph"
                className="description-text"
              />
            </div>
            
            <div className="dining-details">
              <div className="detail-section">
                <EditableText 
                  initialText="Hours"
                  placeholder="Enter section title"
                  className="detail-title"
                />
                <div className="hours-list">
                  <div className="hour-item">
                    <span className="time-icon">🍳</span>
                    <EditableText 
                      initialText="Breakfast : 07:00 AM - 11:00 AM (Daily)"
                      placeholder="Enter breakfast hours"
                      className="hour-text"
                    />
                  </div>
                  <div className="hour-item">
                    <span className="time-icon">🍽️</span>
                    <EditableText 
                      initialText="Lunch : 12:00 PM - 02:00 PM (Daily)"
                      placeholder="Enter lunch hours"
                      className="hour-text"
                    />
                  </div>
                  <div className="hour-item">
                    <span className="time-icon">🍷</span>
                    <EditableText 
                      initialText="Dinner : 06:30 PM - 10:00 PM (Daily)"
                      placeholder="Enter dinner hours"
                      className="hour-text"
                    />
                  </div>
                </div>
              </div>
              
              <div className="detail-section">
                <EditableText 
                  initialText="Dresscode"
                  placeholder="Enter section title"
                  className="detail-title"
                />
                <EditableText 
                  initialText="Smart Casual ( No Shorts, No Hats, or Sandals Permitted )"
                  placeholder="Enter dresscode requirements"
                  className="detail-text"
                />
              </div>
              
              <div className="detail-section">
                <EditableText 
                  initialText="Terrace"
                  placeholder="Enter section title"
                  className="detail-title"
                />
                <EditableText 
                  initialText="Open For Drinks Only"
                  placeholder="Enter terrace information"
                  className="detail-text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiningPage;
