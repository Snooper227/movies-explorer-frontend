import React from "react";
import "./InfoTooltip.css";

function InfoTooltip({ isOpen, title, onClose, onOverlayClick, image}) {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : ""}`}
      onClick={onOverlayClick}
    >
      <div className="popup__container popup__container-type-infoTooltip">
        <button
          className="popup__close popup__close_image"
          onClick={onClose}
          type="button"
        ></button>
        <img className="popup__tooltip-image" src={image} alt="Статуса" />
        <p className="popup__tooltip-about">{title}</p>
      </div>
    </div>
  );
}
export default InfoTooltip;
