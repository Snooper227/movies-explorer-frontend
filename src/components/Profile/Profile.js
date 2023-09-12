import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  return (
    <section className="profile">
      <Header loggedIn={true} />
      <form className="profile__form">
        <h2 className="profile__title">Привет, Станислав!</h2>
        <div className="profile__box">
          <p className="profile__text">имя</p>
          <input
            className="profile__input"
            type="text"
            value="Stanislav"
          ></input>
        </div>
        <div className="profile__box">
          <p className="profile__text">E-mail</p>
          <input
            className="profile__input"
            type="text"
            value="stasgle@yandex.ru"
          ></input>
        </div>
      </form>
      <button className="profile__button_change">Редиктировать</button>
      <button className="profile__button_exit">Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;
