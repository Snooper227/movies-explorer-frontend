import "./AboutMe.css";
import Iam from "../../images/I.jpeg";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__container">
        <img src={Iam} alt="Мое фото" className="about-me__image" />
        <div className="about-me__info">
          <h3 className="about-me__name">Станислав</h3>
          <p className="about-me__job">Фронтенд-разработчик, 22 года</p>
          <p className="about-me__description">
            Я родился и живу в Москве, закончил РХТУ им. Д.И. Менделеева,
            кафедра природных материалов и защита от коррозии, направление
            Стандаритизация и метрология. Стремлюсь стать частью дружной и
            профессиональной команды, в которой я мог бы развивать свои навыки
            разработки. Люблю путешествовать и кататься на Сноуборде.
            Интересуюсь современными технологиями и электроникой. Быстро
            обучаюсь и нахожу общий язык с людьми.
          </p>
          <ul className="about-me__links">
            <li>
              <a
                className="about-me__link"
                href="https://github.com/Snooper227"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
