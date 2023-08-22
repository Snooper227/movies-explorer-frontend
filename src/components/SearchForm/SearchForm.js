import './SearchForm.css';

function SearchForm() {
    return(
        <form className='searchForm'>
            <div className='searchForm__container'>
                <input className='searchForm__input' placeholder='Фильм'></input>
                <button className='searchForm__button'>Поиск</button>
            </div>
            <lable className='searchForm__chekbox'>
                <input type='checkbox'className='searchForm__radio'/>
                <p className='searchForm__chekbox-text'>Короткометражки</p>
            </lable>
        </form>
    )
}
export default SearchForm;