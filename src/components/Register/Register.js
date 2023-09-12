import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <main className="register">
      <div className="register__container">
        <Link to="/" className="register__logo" />
        <h3 className="register__title">Добро пожаловать!</h3>
      </div>
      <form className="register__form">
        <div className="register__box">
          <p className="register_lable">Имя</p>
          <input
            className="register__input register__input_name"
            type="name"
            required
          />
          <div className="register__bottom-line"></div>
          <span className="register__input-error" id="name-input-error">
            <p>Что-то пошло не так...</p>
          </span>
        </div>
        <div className="register__box">
          <p className="register_lable">E-mail</p>
          <input
            className="register__input register__input_login-email"
            type="email"
            required
          />
          <div className="register__bottom-line"></div>
          <span className="register__input-error" id="email-input-error">
            <p>Что-то пошло не так...</p>
          </span>
        </div>
        <div className="register__box">
          <p className="register_lable">Пароль</p>
          <input
            className="register__input register__input_login-pass"
            type="password"
            required
          />
          <div className="register__bottom-line"></div>
          <span className="register__input-error" id="password-input-error">
            <p>Что-то пошло не так...</p>
          </span>
        </div>
        <button className="register__button" type="submit">
          Зарегистрироваться
        </button>
        <div className="register__text">
          Уже зарегистрированы?
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Register;
