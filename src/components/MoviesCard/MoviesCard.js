import './MoviesCard.css';

function MoviesCard() {
    return(
        <div className='MoviesCard'>
            <div className='MoviesCard__header'>
                <h3 className='MoviesCard__title'>В погоне за Бенкси</h3>
                <p className='MoviesCard__time'>0ч 42м</p>
            </div>
            <img className='MoviesCard__image'/>
            <button className="MoviesCard__button" type='submit'>Сохранить</button>
        </div>
    )
}

export default MoviesCard;