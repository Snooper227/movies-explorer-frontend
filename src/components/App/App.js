import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrenUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {
  const [currentUser] = React.useState({});

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={SavedMovies} />
          <Route path="/profile" element={Profile} />
          <Route 
            path="/signin" 
            element={<Login />} 
          />
          <Route
            path="/signup"
            element={Register}
          />
        </Routes>
        <Footer />
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
