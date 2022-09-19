import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoName from '../assets/soovo_name2.png';
import { Link } from "react-router-dom";

const Bar = () => {
    const openLeftColumn = () => {
        document.body.classList += "open-navbar";
        console.log("open");
      }
    
    const closeLeftColumn = () => {
        document.body.classList.remove("open-navbar");
        console.log("close");
      }
    return (
        <div className='bar'>
            <div className='bar__container'>
                <FontAwesomeIcon icon="fa-solid fa-bars" className="open-icon" onClick={closeLeftColumn}/>
                <FontAwesomeIcon icon="fa-solid fa-bars" className="close-icon" onClick={openLeftColumn}/>
                <figure className='logo__container'>
                    <Link to="/" className='logo__link'>
                        <img src={LogoName} alt="Logo of Soovo" className='logo'/> 
                    </Link>
                </figure>
            </div>
        </div>
    );
}

export default Bar;
