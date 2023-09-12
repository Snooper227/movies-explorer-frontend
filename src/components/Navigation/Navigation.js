import React from "react";
import { NavLink } from "react-router-dom";
import './Navigation.css';

function Navigation() {
    return(
        <div className='navigation'>
            <nav className='navigation__items'>
                <li className='navigation__item'>
                    <NavLink to='/movies' className={({ isActive }) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}>Фильмы</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to='/saved-movies' className={({ isActive }) => isActive ? 'navigation__link navigation__link_active' : 'navigation__link'}>Сохраненные фильмы</NavLink>
                </li>
                <li className='navigation__item'>
                    <NavLink to='/profile' className='navigation__item_account'>Аккаунт
                        <div className='navigation__item_button'></div>
                    </NavLink>
                </li>
            </nav>
        </div>
    )
}

export default Navigation;