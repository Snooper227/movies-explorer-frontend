import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <p className="footer__copyright">&copy; 2023</p>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer_nav-item">
              <a
                className="footer__nav-link"
                target="_blank"
                href="https://practicum.yandex.ru/"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer_nav-item">
              <a
                className="footer__nav-link"
                target="_blank"
                href="https://github.com/Snooper227"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
