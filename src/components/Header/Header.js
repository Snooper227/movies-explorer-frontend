import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import Burger from "../Burger/Burger";
import "./Header.css";

function Header({ loggedIn }) {
  const [isBurger, setIsBurger] = useState(false);
  const { pathname } = useLocation();

  function handleIsBurger() {
    setIsBurger(!isBurger);
  }

  const headerIsLogginIn = (
    <div className="header__container-auth">
      <Navigation />
      <div className="header__burger" onClick={handleIsBurger}></div>
      <Burger onClose={handleIsBurger} isBurger={isBurger} />
    </div>
  );

  const headerIsLoggin = (
    <div className="header__container-loggin">
      <div className="header__buttons">
        <a href="/signup" className="header__button">
          Регистрация
        </a>
        <a href="/signin" className="header__button header__button_type_signin">
          Войти
        </a>
      </div>
    </div>
  );

  return (
    <header className={pathname !== "/" ? "header" : "header header_main"}>
      <div className="header__container">
        <Logo />
        {loggedIn ? headerIsLogginIn : headerIsLoggin}
      </div>
    </header>
  );
}

export default Header;
