import './Movies.js';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import { Link } from "react-router-dom";

function Movies() {
    return(
        <section className='movies'>
            <Header />
            <SearchForm />
            <MoviesCardList />
        </section>
    )
}

export default Movies;