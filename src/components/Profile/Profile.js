import { useState } from "react";
import "./Profile.css";
import Header from "../Header/Header";

function Profile() {
  const [isActiveEdit, setActiveEdit] = useState(false);
  const [isActiveSave, setActiveSave] = useState(false);
  function handleIsActive() {
    setActiveEdit(!isActiveEdit);
    setActiveSave(!isActiveSave);
  }
  return (
    <>
      <Header loggedIn={true} />
      <main>
        <section className="profile">
          <form className="profile__form">
            <h2 className="profile__title">Привет, Станислав!</h2>
            <div className="profile__box">
              <p className="profile__text">имя</p>
              <input
                className="profile__input"
                type="text"
                defaultValue="Stanislav"
                placeholder="Имя"
              ></input>
            </div>
            <div className="profile__box">
              <p className="profile__text">E-mail</p>
              <input
                className="profile__input"
                type="text"
                defaultValue="stasgle@yandex.ru"
                placeholder="Почта"
              ></input>
            </div>
          </form>
          <button
            className={
              !isActiveEdit
                ? "profile__button_change"
                : "profile__button_change profile__button_change_disabled"
            }
            onClick={handleIsActive}
            type="button"
          >
            Редиктировать
          </button>
          <button
            className={
              isActiveSave
                ? "profile__button_save"
                : "profile__button_save profile__button_save_disabled"
            }
            onClick={handleIsActive}
            type="button"
          >
            Сохранить
          </button>
          <button className="profile__button_exit">Выйти из аккаунта</button>
        </section>
      </main>
    </>
  );
}

export default Profile;
