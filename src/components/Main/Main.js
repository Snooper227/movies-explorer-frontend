import Promo from "../Promo/Promo";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import { Link } from "react-router-dom";
import "./Main.css";

function Main({ isBurger, onBurger, loggedIn }) {
  return (
    <div className="content">
      <Header loggedIn={true} />
      <main className="main">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
export default Main;
