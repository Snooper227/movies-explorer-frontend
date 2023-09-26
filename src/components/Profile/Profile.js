import React, { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrenUserContext";
import Header from "../Header/Header";
import useValidation from "../../utils/useValidation";
import "./Profile.css";

function Profile({ loggedIn, handleLogOut, onSubmit }) {
  const { values, errors, isValid, handleChange, resetForm } = useValidation();
  const { currentUser } = React.useContext(CurrentUserContext);
  const { email, name } = values;

  const [isDisabled, setIsDisabled] = React.useState(false);

  const isVision = (values.name === currentUser.name && values.email === currentUser.email) || !isValid
  React.useEffect(() => {
    resetForm({ email: currentUser.email, name: currentUser.name });
  }, [currentUser]);

  const [isActiveEdit, setActiveEdit] = useState(false);
  const [isActiveSave, setActiveSave] = useState(false);

  React.useEffect(() => {
    let isMatch =
      currentUser.name !== values.name || currentUser.email !== values.email;
    setIsDisabled(isMatch);
  }, [values, currentUser, isValid]);

  function handleIsActive() {
    setActiveEdit(!isActiveEdit);
    setActiveSave(!isActiveSave);
  }
  function handleSubmit(evt) {
    evt.preventDefault();

    onSubmit(name, email);
  }
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>
        <section className="profile">
          <form className="profile__form" onSubmit={handleSubmit}>
            <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
            <div className="profile__items">
              <div className="profile__box">
                <p className="profile__text">имя</p>
                <input
                  className="profile__input"
                  type="text"
                  name="name"
                  value={values.name || ""}
                  placeholder="Имя"
                  onChange={handleChange}
                  pattern="^[A-Za-zА-Яа-яЁё\-\s]+$"
                  disabled={!isActiveEdit}
                  required
                ></input>
              </div>
              <span
                className={`profile__input-error ${
                  !isValid && errors.name ? "profile__input-error_active" : ""
                }`}
                id="email-error"
              >
                {errors.name || ""}
              </span>
              <div className="profile__box">
                <p className="profile__text">E-mail</p>
                <input
                  className="profile__input"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email || ""}
                  placeholder="Почта"
                  disabled={!isActiveSave}
                  pattern="^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-.]+$"
                  required
                ></input>
              </div>
              <span
                className={`profile__input-error ${
                  !isValid && errors.email ? "profile__input-error_active" : ""
                }`}
                id="email-error"
              >
                {errors.email || ""}
              </span>
            </div>
            <button
              className={
                !isActiveEdit
                  ? "profile__button-change"
                  : "profile__button-change profile__button-change-disabled"
              }
              onClick={handleIsActive}
              type="button"
            >
              Редиктировать
            </button>
            <button
              className={
                isActiveSave
                  ? !isVision
                    ? "profile__button-save"
                    : "profile__button-save profile__button-saved_nonActive"
                  : "profile__button-save profile__button-save-disabled"
              }
              onClick={handleIsActive}
              type="submit"
              disabled={
                isVision
              }
            >
              Сохранить
            </button>
          </form>
          <button className="profile__button-exit" onClick={handleLogOut}>
            Выйти из аккаунта
          </button>
        </section>
      </main>
    </>
  );
}

export default Profile;
