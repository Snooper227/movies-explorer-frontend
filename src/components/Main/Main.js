import Promo from '../Promo/Promo';
import Header from '../Header/Header';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import { Link } from "react-router-dom";
import './Main.css';

function Main({ isBurger, onBurger, loggedIn }) {
    return (
        <main className="main">
            <Header>
                <div className="header__mainContainer">
                <Link to="/" className="header__logo" />
                    <div className="header__buttons">
                        <a href="/signup" className="header__button">Регистрация</a>
                        <a href="/signin" className="header__button header__button_type_signin">Войти</a>
                    </div>
                </div>
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    )
}
export default Main