import React from "react";
import { Link } from "react-router-dom";
import useValidation from "../../utils/useValidation";
import "./Login.css";

function Login({ onLogin }) {
  const { values, errors, handleChange, resetForm, isValid } = useValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  const { email, password } = values;

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password);
  }

  return (
    <main className="login">
      <div className="login__container">
        <Link to="/" className="login__logo" />
        <h1 className="login__title">Рады Видеть!</h1>
      </div>
      <form className="login__form" onSubmit={handleSubmit} noValidate>
        <div className="login__box">
          <p className="login__lable">E-mail</p>
          <input
            className="login__input login__input_login-email"
            type="email"
            placeholder="Почта"
            minLength="6"
            maxLength="40"
            name="email"
            onChange={handleChange}
            value={values.email || ""}
            pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
            required
          />
          <div
            className={`login__bottom-line ${
              !isValid && errors.email ? "login__bottom-line_error" : ""
            } `}
          ></div>
          <span
            className={`login__input-error ${
              !isValid && errors.email ? "login__input-error_active" : ""
            }`}
            id="email-input-error"
          >
            {errors.email || ""}
          </span>
        </div>
        <div className="login__box">
          <p className="login__lable">Пароль</p>
          <input
            className="login__input login__input_login-pass"
            type="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="40"
            name="password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          <div
            className={`login__bottom-line ${
              !isValid && errors.password ? "login__bottom-line_error" : ""
            } `}
          ></div>
          <span
            className={`login__input-error ${
              !isValid && errors.password ? "login__input-error_active" : ""
            }`}
            id="password-input-error"
          >
            {errors.password || ""}
          </span>
        </div>
        <button
          className={`login__button ${
            !isValid && errors ? "login__button-disabled" : ""
          }`}
          type="submit"
          disabled={!isValid}
        >
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
