class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }
  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так...: ${res.status}`);
  }
  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).then(this._checkRes);
  }
  authorization(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(this._checkRes)
      .then((data) => {
        if (data.token) {
          const { token } = data;
          localStorage.setItem("jwt", token);

          return token;
        }
      });
  }

  chekTokenValid(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(this._checkRes);
  }
}
export const auth = new Auth(
  "https://api.snooper227.diplom.nomoredomains.rocks"
);
