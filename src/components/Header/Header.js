import React from "react";
import Logo from "../../images/logo_diplom.svg";
import Burger from "../Burger/Burger"
import { Link, useLocation } from "react-router-dom";
import './Header.css';

function Header(props) {
  // const location = useLocation();

    return(
        <header className="header">
          {props.children}
        </header>
        // {/* {
        //   !loggedIn ?
        //   <header className="header header__loggedIn">
        //     <Link to="/" className="header__logo" />
        //     <div className="header__buttons">
        //       <Link to="/signup" className="header__button">Регистрация</Link>
        //       <Link to="/signin" className="header__button header__button_type_signin">Войти</Link>
        //     </div>
        //   </header>
        //   :
        //   <header className={location.pathname==="/" ? "header_main header" : "header"}>
        //      <Link to="/" className="header__logo" />
        //      <div className="header__buttons header__buttons_registered">
        //         <Link to="/movies" className={location.pathname=== '/movies' ? "" : ""}>Фильмы</Link>
        //         <Link to="/saved-movies" className={location.pathname=== '/movies' ? "" : ""}>Сохраненные фильмы</Link>
        //      </div>
        //      <div className="header__buttons header__buttons_registered">
        //       <Link to="/profile" className={location.pathname === '/' ? 'header' :''}>Аккаунт</Link>
        //      </div>

        //      <button className="nav__button" onClick={onBurger} />
        //      <Burger isBurger={isBurger} onClose={onBurger} />
        //   </header>
        // } */}
      );
}

export default Header;