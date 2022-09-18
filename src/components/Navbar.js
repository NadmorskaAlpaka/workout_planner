import React from 'react';
import LogoName from '../assets/soovo_name2.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav>
            <div className='nav__container'>
                <figure className='logo__container'>
                    <img src={LogoName} alt="Logo of Soovo" className='logo'/>
                </figure>
                <ul className='nav_list'>
                    <li className='nav__list--element'>
                        <FontAwesomeIcon icon="fa-solid fa-house" className='nav__list--icon'/>
                        <Link to="/" className='nav__list--link'>
                            Home
                        </Link>
                    </li>
                    <li className='nav__list--element'>
                        <FontAwesomeIcon icon="fa-solid fa-dumbbell" />
                        <Link to="/" className='nav__list--link'>
                            Workout
                        </Link>
                    </li>
                    <li className='nav__list--element'>
                        <FontAwesomeIcon icon="fa-solid fa-book" />
                        <Link to="/" className='nav__list--link'>
                            Exercises
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;

