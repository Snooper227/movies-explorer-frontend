import { useState } from "react";
import photo from "../../images/movie.png";
import "./MoviesCard.css";

function MoviesCard({ isSave }) {
  // const isLiked = true;
  // const movieLikeButtonClassName = {isLiked ? 'moviesCard__button' : 'moviesCard__button MoviesCard__button_active'};
  const [isActive, setActive] = useState(false);
  function handleIsActive() {
    setActive(!isActive);
  }
  return (
    <div className="moviesCard">
      <div className="moviesCard__header">
        <h3 className="moviesCard__title">В погоне за Бенкси</h3>
        <p className="moviesCard__time">0ч 42м</p>
      </div>
      <img className="moviesCard__image" src={photo} alt="картинка" />
      {!isSave ? (
        <div className="moviesCard__box">
          {!isActive ? (
            <button
              className="moviesCard__button"
              type="button"
              onClick={handleIsActive}
            >
              Сохранить
            </button>
          ) : (
            <button
              className="moviesCard__button_active"
              type="button"
              onClick={handleIsActive}
            ></button>
          )}
        </div>
      ) : (
        <button className="moviesCard__button_delete" type="button"></button>
      )}
    </div>
  );
}

export default MoviesCard;
