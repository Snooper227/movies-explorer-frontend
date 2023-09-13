import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";

function SavedMovies() {
  const [isSave, setSave] = useState(false);
  function handleIsActive() {
    setSave(!isSave);
  }
  return (
    <>
      <Header loggedIn={true} />
      <section className="savedMovies">
        <SearchForm />
        <MoviesCardList isSave={handleIsActive} />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
