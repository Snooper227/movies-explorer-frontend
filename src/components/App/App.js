import React from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrenUserContext";
import { auth } from "../../utils/auth";
import { mainApi } from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import Preloader from "../Preloader/Preloader";
import handleMovies from "../../utils/HandleMovies";
import failImage from "../../images/failed.svg";
import successImage from "../../images/true.svg";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [isRegistered, setRegistered] = React.useState(true);
  const [allMovies, setAllMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isTokenChecked, setIsTokenChecked] = React.useState(false);
  const [isTooltipData, setTooltipData] = React.useState("");
  const [isTooltipOpen, setIsTooltipOpen] = React.useState(false);
  const [apiErrors, setApiErrors] = React.useState({
    login: {},
    register: {},
    profile: {},
  });

  const navigate = useNavigate();

  function checkToken() {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .chekTokenValid(token)
        .then((response) => {
          if (response) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsTokenChecked(true);
        });
    } else {
      setIsTokenChecked(true);
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    checkToken();
  }, []);

  React.useEffect(() => {
    checkLocalStorage();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .getDataFromServer()
        .then(([user, moviesData]) => {
          setCurrentUser(user);
          setSavedMovies(moviesData);
          setApiErrors({ ...apiErrors, movies: {} });
        })
        .catch((err) => {
          setApiErrors({ ...apiErrors, movies: err });
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    getUserInfo();
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  });

  function getUserInfo() {
    mainApi
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleRegister(name, email, password) {
    auth
      .register(name, email, password)
      .then(() => {
        setRegistered(true);
        setTooltipData("Вы успешно зарегистрировались!");
        handleLogin(email, password);
      })
      .catch((err) => {
        setRegistered(false);
        setTooltipData("Что-то пошло не так! Попробуйте ещё раз.");
        setApiErrors({ ...apiErrors, register: err });
      })
      .finally(() => {
        setIsTooltipOpen(true);
      });
  }

  function handleLogin(email, password) {
    auth
      .authorization(email, password)
      .then((token) => {
        if (token) {
          localStorage.setItem("jwt", token);
          setRegistered(true);
          setLoggedIn(true);
          getUserInfo();
          navigate("/movies");
        }
      })
      .catch((err) => {
        setRegistered(false);
        setTooltipData("Что-то не так! Попробуйте еще раз!");
        setApiErrors({ ...apiErrors, login: err });
        setIsTooltipOpen(true);
        console.log(err);
      });
  }

  function handleUpdateProfile(name, email) {
    setIsLoading(true);
    mainApi
      .changeUserInfo(name, email)
      .then((user) => {
        setCurrentUser(user);
        setTooltipData("Успешно!");
        setApiErrors({ ...apiErrors, profile: {} });
      })
      .catch((err) => {
        console.log(err);
        setTooltipData("Что-то не так! Попробуйте еще раз!");
        setApiErrors({ ...apiErrors, profile: { err } });
      })
      .finally(() => {
        setIsTooltipOpen(true);
        setIsLoading(false);
      });
  }

  function handleGetAllMovies() {
    setIsLoading(true);
    moviesApi
      .getAllMovies()
      .then((data) => {
        const handleAllMovies = handleMovies(data);
        localStorage.setItem("allMovies", JSON.stringify(handleAllMovies));
        setAllMovies(handleAllMovies);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function checkLocalStorage() {
    const allMoviesStorage = localStorage.getItem("allMovies");
    if (allMoviesStorage) {
      setAllMovies(JSON.parse(allMoviesStorage));
    } else {
      handleGetAllMovies();
    }
  }

  function handleSaveMovies(movie) {
    setIsLoading(true);
    mainApi
      .saveMovie(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleDeleteMovies(_id) {
    setIsLoading(true);
    mainApi
      .deleteMovie(_id)
      .then(() => {
        const newArray = savedMovies.filter((movie) => movie._id !== _id);
        setSavedMovies(newArray);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function closeAllPopups() {
    setIsTooltipOpen(false);
  }
  function handleOverClick(evt) {
    if (evt.key === evt.currentTarget) {
      closeAllPopups();
    }
  }

  function handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      closeAllPopups();
    }
  }

  function handleLogOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("lastRequest");
    localStorage.removeItem("checkboxState");
    localStorage.removeItem("lastRequestedMovies");
    localStorage.removeItem("allMovies");
    setLoggedIn(false);
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <>
      {isTokenChecked ? (
        <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Routes>
            <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  allMovies={allMovies}
                  savedMovies={savedMovies}
                  onSave={handleSaveMovies}
                  onDelete={handleDeleteMovies}
                  component={Movies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  allMovies={savedMovies}
                  savedMovies={savedMovies}
                  onSave={handleSaveMovies}
                  onDelete={handleDeleteMovies}
                  component={SavedMovies}
                />
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  component={Profile}
                  onSubmit={handleUpdateProfile}
                  isLoading={isLoading}
                  apiErrors={apiErrors}
                  handleLogOut={handleLogOut}
                />
              }
            />

            <Route
              path="/signin"
              element={
                isLoading ? (
                  <Preloader />
                ) : !loggedIn ? (
                  <Login onLogin={handleLogin} apiErrors={apiErrors} />
                ) : (
                  <Navigate to="/movies" />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isLoading ? (
                  <Preloader />
                ) : !loggedIn ? (
                  <Register onRegister={handleRegister} apiErrors={apiErrors} />
                ) : (
                  <Navigate to="/movies" />
                )
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>

          <InfoTooltip
            isOpen={isTooltipOpen}
            title={isTooltipData}
            onClose={closeAllPopups}
            onOverlayClick={handleOverClick}
            image={isRegistered ? successImage : failImage}
          />
        </CurrentUserContext.Provider>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default App;
