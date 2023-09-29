export default class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так...: ${res.status}`);
  }
  getAllMovies() {
    return fetch(`${this._baseUrl}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    }).then(this._checkRes);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
});
