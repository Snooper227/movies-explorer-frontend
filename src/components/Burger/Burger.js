import React from "react";
import "./Burger.css";
import { NavLink } from "react-router-dom";

function Burger({ onClose, isBurger }) {
  return (
    <section className={`burger ${!isBurger && "burger__off"}`}>
      <div className="burger-menu">
        <button className="burger__button_close" onClick={onClose}></button>
        <nav className="burger-menu__container">
          <ul className="burger-menu__items">
            <li className="burger-menu__item">
              <NavLink to="/" className="burger-menu__link" onClick={onClose}>
                Главная
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <NavLink
                to="/movies"
                className="burger-menu__link burger-menu__link_active"
                onClick={onClose}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="burger-menu__item">
              <NavLink
                to="/saved-movies"
                className="burger-menu__link"
                onClick={onClose}
              >
                Сохраненные фильмы
              </NavLink>
            </li>
            <NavLink
              to="/profile"
              className="burger-menu__item_account"
              onClick={onClose}
            >
              Аккаунт
              <div className="burger-menu__button_profile"></div>
            </NavLink>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Burger;
