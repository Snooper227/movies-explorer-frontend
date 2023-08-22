import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    return(
        <section className='profile'>
            <Header />
            <form className='profile__form'>
                <h2 className='profile__title'>Привет, ${}!</h2>
                <input></input>
                <input></input>
            </form>
            <button className='profile__button_change'>Редиктировать</button>
            <button className='profile__button_exit'>Выйти из аккаунта</button>
        </section>
    )
}

export default Profile;