import "./Movies.css";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";

function Movies({ onSaveMovie, onDeleteSaveMovie }) {
  return (
    <>
      <Header loggedIn={true} />
      <section className="movies">
        <SearchForm />
        <MoviesCardList
          onSaveMovie={onSaveMovie}
          onDeleteSaveMovie={onDeleteSaveMovie}
        />
      </section>
      <Footer />
    </>
  );
}

export default Movies;
