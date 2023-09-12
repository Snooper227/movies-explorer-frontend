import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies() {
    return(
        <section className='savedMovies'>
            <Header loggedIn={true} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </section>    
    )
}

export default SavedMovies;