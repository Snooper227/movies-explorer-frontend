import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies() {
    return(
        <section className='savedMovies'>
            <Header />
            <SearchForm />
            <MoviesCardList />
        </section>    
    )
}

export default SavedMovies;