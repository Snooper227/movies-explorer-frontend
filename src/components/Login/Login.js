import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <main className="login">
      <div className="login__container">
        <Link to="/" className="login__logo" />
        <h1 className="login__title">Рады Видеть!</h1>
      </div>
      <form className="login__form">
        <div className="login__box">
          <p className="login__lable">E-mail</p>
          <input
            className="login__input login__input_login-email"
            type="email"
            placeholder="Почта"
            required
          />
          <div className="login__bottom-line"></div>
          <span className="login__input-error" id="name-input-error">
            <p>Что-то пошло не так...</p>
          </span>
        </div>
        <div className="login__box">
          <p className="login__lable">Пароль</p>
          <input
            className="login__input login__input_login-pass"
            type="password"
            placeholder="Пароль"
            required
          />
          <div className="login__bottom-line"></div>
          <span className="login__input-error" id="name-input-error">
            <p>Что-то пошло не так...</p>
          </span>
        </div>
        <button className="login__button" type="submit">
          Войти
        </button>
        <div className="login__text">
          Еще не зарегистрированы?
          <Link to="/signup" className="login__link">
            Регистрация
          </Link>
        </div>
      </form>
    </main>
  );
}

export default Login;
