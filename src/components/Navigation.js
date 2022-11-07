import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navigation = () => {
    return (
        <nav className='navigation__container'>
            <ul className='nav__list'>
                <li className='nav__list--element'>
                    <FontAwesomeIcon className='nav__list--icon' icon="fa-solid fa-house"/>
                    <Link to="/" className='nav__list--link'>Home</Link>
                </li>
                <li className='nav__list--element'>
                    <Link to="exercises" className='nav__list--link'>Excercises</Link>
                </li>
                <li className='nav__list--element'>
                    <Link to="workout" className='nav__list--link'>Workout</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
