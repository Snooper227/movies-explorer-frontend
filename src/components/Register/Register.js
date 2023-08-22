import { Link } from "react-router-dom";
import './Register.css';

function Register() {
    return(
        <main className="register">
            <div className="register__container">
                <Link to="/" className="register__logo" />
                <h3 className="register__title">Добро пожаловать!</h3>
            </div>
            <form className="register__form">
            <p className="register_lable">Имя</p>
            <input
                className="register__input register__input_name"
                placeholder="Name"
                type="name"
                required
            />
            <p className="register_lable">Почта</p>
            <input
                className="register__input register__input_login-email"
                placeholder="Email"
                type="email"
                required
            />
            <p className="register_lable">Пароль</p>
            <input
                className="register__input register__input_login-pass"
                placeholder="Пароль"
                type="password"
                required
            />
            <button className="register__button" type="submit">
                Зарегистрироваться
            </button>
            <div className="register__text">
                Уже зарегистрированы?
                <Link to="/signin" className="register__link">
                {" "}
                Войти
            </Link>
            </div>
            </form>
        </main>

    )
}

export default Register();