import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  isLoading,
  onClick,
  limit,
  isSavedMovies,
  onSave,
  onDelete,
  savedMovies,
}) {
  return (
    <>
      <section className="moviesCardList">
        {isLoading ? (
          <Preloader />
        ) : (
          movies?.map((movie, index, array) => {
            return (
              index < limit && (
                <MoviesCard
                  isSavedMovies={isSavedMovies}
                  onSave={onSave}
                  onDelete={onDelete}
                  movie={movie}
                  savedMovies={savedMovies}
                  key={movie.movieId}
                />
              )
            );
          })
        )}
      </section>
      {movies.length > limit && (
        <section className="moviesCardList-add" onClick={onClick}>
          <button className="moviesCardList-add__button" type="button">
            Еще
          </button>
        </section>
      )}
    </>
  );
}

export default MoviesCardList;
