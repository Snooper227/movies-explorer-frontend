import "./Promo.css";
import Logopromo from "../../images/Earth.svg";

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="promo__text">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a className="promo__link" href="#about-project">
          Узнать больше
        </a>
      </div>
      <img className="promo__logo" src={Logopromo} alt="Логотип" />
    </section>
  );
}
export default Promo;
