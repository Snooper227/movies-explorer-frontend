export default class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так...: ${res.status}`);
  }
  getUserInfo() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }).then(this._checkRes);
  }

  _getSavedMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      mathod: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }).then(this._checkRes);
  }

  getDataFromServer() {
    return Promise.all([this.getUserInfo(), this._getSavedMovies()]);
  }

  saveMovie(data) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        thumbnail: data.thumbnail,
        movieId: data.movieId,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._checkRes);
  }

  changeUserInfo(name, email) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkRes);
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    }).then(this._checkRes);
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.snooper227.diplom.nomoredomains.rocks",
});
