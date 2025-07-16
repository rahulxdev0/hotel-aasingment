import React from "react";
import './Modal.css';

const Modal = ({ isOpen, onClose, onSave, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>{title}</h3>
        {children}
        <div className="modal-buttons">
          <button onClick={onSave} className="modal-btn save-btn">
            Save
          </button>
          <button onClick={onClose} className="modal-btn cancel-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;