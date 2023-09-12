import "./Movies.js";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";

function Movies({ onSaveMovie, onDeleteSaveMovie }) {
  return (
    <section className="movies">
      <Header loggedIn={true} />
      <SearchForm />
      <MoviesCardList
        onSaveMovie={onSaveMovie}
        onDeleteSaveMovie={onDeleteSaveMovie}
      />
      <Footer />
    </section>
  );
}

export default Movies;
