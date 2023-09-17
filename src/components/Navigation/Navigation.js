import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <section className="navigation">
      <nav className="navigation__items">
        <li className="navigation__item">
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link-active"
                : "navigation__link"
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "navigation__link navigation__link-active"
                : "navigation__link"
            }
          >
            Сохраненные фильмы
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/profile" className="navigation__item-account">
            Аккаунт
            <div className="navigation__button"></div>
          </NavLink>
        </li>
      </nav>
    </section>
  );
}

export default Navigation;
