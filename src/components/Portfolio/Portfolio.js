import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/Snooper227/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            How-To-Learn
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://snooper227.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            Путешествия по России
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://github.com/Snooper227/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            Mesto
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
