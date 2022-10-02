import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav>
            <div className='nav__container'>
                <ul className='nav_list'>
                    <li className='nav__list--element'>
                        <FontAwesomeIcon icon="fa-solid fa-house" className='nav__icon' />
                        <Link to="/" className='nav__list--link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav__list--element'>
                        <FontAwesomeIcon icon="fa-solid fa-dumbbell" className='nav__icon' />
                        <Link to="/plan" className='nav__list--link'>
                            Workout
                        </Link>
                    </li>
                    <li className='nav__list--element'>
                        <FontAwesomeIcon icon="fa-solid fa-book" className='nav__icon' />
                        <Link to="/excercises" className='nav__list--link'>
                            Exercises
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

