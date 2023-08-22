import { Link } from "react-router-dom";
import './Login.css';

function Login() {
    return(
        <main className="login">
            <div className="login__container">
                <Link to="/" className="login__logo" />
                <h3 className="login__title">Рады Видеть!</h3>
            </div>
            <form className="login__form">
                <p className="login_lable">Почта</p>
                <input
                    className="login__input login__input_login-email"
                    placeholder="Email"
                    type="email"
                    required
                />
                <p className="login_lable">Пароль</p>
                <input
                    className="login__input login__input_login-pass"
                    placeholder="Пароль"
                    type="password"
                    required
                />
                <button className="login__button" type="submit">
                    Войти
                </button>
                <div className="login__text">
                    Еще не зарегистрированы?
                    <Link to="/signup" className="login__link">
                    {" "}
                    Регистрация
                </Link>
                </div>
            </form>
        </main>
    )
}

export default Login;