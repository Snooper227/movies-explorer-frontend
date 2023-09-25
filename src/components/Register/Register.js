import React from "react";
import { Link } from "react-router-dom";
import useValidation from "../../utils/useValidation";
import "./Register.css";

function Register({ onRegister }) {
  const { values, errors, handleChange, resetForm, isValid } = useValidation();
  const { email, name, password } = values;
  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(name, email, password);
  }

  return (
    <main className="register">
      <div className="register__container">
        <Link to="/" className="register__logo" />
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form className="register__form" onSubmit={handleSubmit}>
        <div className="register__box">
          <p className="register__lable">Имя</p>
          <input
            className="register__input register__input_name"
            type="name"
            name="name"
            placeholder="Имя"
            onChange={handleChange}
            value={values.name || ""}
            minLength="2"
            maxLength="30"
            pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
            required
          />
          <div
            className={`register__bottom-line ${
              !isValid && errors.name ? "register__bottom-line_error" : ""
            } `}
          ></div>
          <span
            className={`register__input-error ${
              !isValid && errors.name ? "register__input-error_active" : ""
            }`}
            id="name-input-error"
          >
            {errors.name || ""}
          </span>
        </div>
        <div className="register__box">
          <p className="register__lable">E-mail</p>
          <input
            className="register__input register__input_login-email"
            type="email"
            required
            name="email"
            placeholder="Почта"
            onChange={handleChange}
            pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
            value={values.email || ""}
          />
          <div
            className={`register__bottom-line ${
              !isValid && errors.email ? "register__bottom-line_error" : ""
            } `}
          ></div>
          <span
            className={`register__input-error ${
              !isValid && errors.email ? "register__input-error_active" : ""
            }`}
            id="email-input-error"
          >
            {errors.email || ""}
          </span>
        </div>
        <div className="register__box">
          <p className="register__lable">Пароль</p>
          <input
            className="register__input register__input_login-pass"
            type="password"
            name="password"
            placeholder="Пароль"
            minLength="6"
            maxLength="40"
            onChange={handleChange}
            value={values.password || ""}
            required
          />

          <div
            className={`register__bottom-line ${
              !isValid && errors.password ? "register__bottom-line_error" : ""
            } `}
          ></div>
          <span
            className={`register__input-error ${
              !isValid && errors.password ? "register__input-error_active" : ""
            }`}
            id="password-input-error"
          >
            {errors.password || ""}
          </span>
        </div>
        <button
          className={`register__button ${
            !isValid && errors ? "register__button-disabled" : ""
          }`}
          type="submit"
          disabled={!isValid}
        >
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
