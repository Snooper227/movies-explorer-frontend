import MovieDuration from "../../utils/MovieDuration";
import "./MoviesCard.css";

function MoviesCard({ isSavedMovies, onSave, onDelete, movie, savedMovies }) {
  const { nameRu, image, duration, trailerLink } = movie;
  const chekedDuration = MovieDuration(duration);

  let isLiked = false;
  let likeId;

  isLiked = savedMovies.some((item) => {
    if (item.movieId === movie.movieId) {
      likeId = item._id;
      return true;
    }
    return false;
  });
  return (
    <div className="moviesCard">
      <div className="moviesCard__header">
        <h1 className="moviesCard__title">{nameRu}</h1>
        <p className="moviesCard__time">{chekedDuration}</p>
      </div>
      <a href={trailerLink} target="_blank" rel="noreferrer">
        <img className="moviesCard__image" src={image} alt={nameRu} />
      </a>
      {!isSavedMovies ? (
        <div className="moviesCard__box">
          {!isLiked ? (
            <button
              className="moviesCard__button"
              type="button"
              onClick={() => {
                isLiked || isSavedMovies
                  ? onDelete(movie._id ? movie._id : likeId)
                  : onSave(movie);
              }}
            >
              Сохранить
            </button>
          ) : (
            <button
              className="moviesCard__button-active"
              type="button"
              onClick={() => {
                isLiked || isSavedMovies
                  ? onDelete(movie._id ? movie._id : likeId)
                  : onSave(movie);
              }}
            ></button>
          )}
        </div>
      ) : (
        <button
          className="moviesCard__button-delete"
          type="button"
          onClick={() => onDelete(movie._id)}
        ></button>
      )}
    </div>
  );
}

export default MoviesCard;
