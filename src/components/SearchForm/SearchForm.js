import './SearchForm.css';

function SearchForm() {
    return(
        <form className='searchForm'>
            <div className='searchForm__container'>
                <input className='searchForm__input' placeholder='Фильм'></input>
                <button className='searchForm__button'>Поиск</button>
            </div>
            <label className="searchForm__switch">
                <input className='searchForm__switch_input' type="checkbox"></input>
                <span className="searchForm__slider searchForm__round"></span>
            </label>
        </form>
    )
}
export default SearchForm;