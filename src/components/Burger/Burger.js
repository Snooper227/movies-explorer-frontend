import React from "react";
import { NavLink } from "react-router-dom";
import "./Burger.css";

function Burger({ onClose, isBurger }) {
  return (
    <section className={`burger ${!isBurger && "burger_off"}`}>
      <div className="burger__popup"></div>
      <div className="burger__menu">
        <button className="burger__button-close" onClick={onClose}></button>
        <nav className="burger__menu-container">
          <ul className="burger__menu-items">
            <li className="burger__menu-item">
              <NavLink to="/" className="burger__menu-link" onClick={onClose}>
                Главная
              </NavLink>
            </li>
            <li className="burger__menu-item">
              <NavLink
                to="/movies"
                className="burger__menu-link burger__menu-link-active"
                onClick={onClose}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="burger__menu-item">
              <NavLink
                to="/saved-movies"
                className="burger__menu-link"
                onClick={onClose}
              >
                Сохраненные фильмы
              </NavLink>
            </li>
            <NavLink
              to="/profile"
              className="burger__menu-item-account"
              onClick={onClose}
            >
              Аккаунт
              <div className="burger__menu-button-profile"></div>
            </NavLink>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Burger;
