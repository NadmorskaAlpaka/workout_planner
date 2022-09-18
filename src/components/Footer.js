import React from 'react';
import LogoImage from '../assets/soovo_logo2.png';

const Footer = () => {
    return (
        <footer>
            <figure className='footer__img--wrapper'>
                <img src={LogoImage} alt="Logo of Soovo" />
            </figure>
            <p className='copyrights'>
                Copyright &copy; 2022 Soovo
            </p>
        </footer>
    );
}

export default Footer;
