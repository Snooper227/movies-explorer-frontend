function handleMovies(movie) {
  return movie.map((movie) => ({
    country: movie.country,
    director: movie.director,
    duration: movie.duration,
    year: movie.year,
    description: movie.description,
    image: `https://api.nomoreparties.co/${movie.image.url}`,
    trailerLink: movie.trailerLink,
    thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
    movieId: movie.id,
    nameRu: movie.nameRU,
    nameEn: movie.nameEN,
    key: movie.id,
  }));
}
export default handleMovies;
