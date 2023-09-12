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
    <main className="main">
      <Header loggedIn={true} />
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </main>
  );
}
export default Main;
