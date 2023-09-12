import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrenUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  const [currentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  function SaveMovie() {
  }
  function DeleteSavemovie() {
  }
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main loggedIn={loggedIn} />} />
          <Route path="/movies" element={<Movies loggedIn={loggedIn} onSaveMovie={SaveMovie} onDeleteSaveMovie={DeleteSavemovie}/>} />
          <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} />} />
          <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
          <Route 
            path="/signin" 
            element={<Login />} 
          />
          <Route
            path="/signup"
            element={<Register />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
