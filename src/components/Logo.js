import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Logo = () => {
    const clsoseNavigation = () => {
        document.body.classList += "navigation-close";
        console.log("closed");
    }

    const openNavigation = () => {
        document.body.classList.remove("navigation-close");
        console.log("open");
    }
    return (
        <header className='logo__container'>
            <div className='toogle__bar--wrapper'>
                <FontAwesomeIcon className='toggle__bar' icon="fa-solid fa-bars" onClick={clsoseNavigation}/>
                <FontAwesomeIcon className='toggle__bar2' icon="fa-solid fa-bars" onClick={openNavigation}/>
            </div>
            <div className='logo__wrapper'>
                <Link to="/">
                    <span className='logo__name'>soovo</span>
                </Link>
            </div>
        </header>
    );
}

export default Logo;
