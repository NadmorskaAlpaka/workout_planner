import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../assets/logo_top.png';

const Home = () => {
    return (
        <div className='home__container'>
            <div className='home__title--wrapper'>
                <h1 className='home__title'>
                    Become a <span className="purple-text">stronger</span> version of yourself !!!
                </h1>
            </div>
            <div className='home__content--wrapper'>
                <div className='home__button--wrapper'>
                    <Link to="excercises" className='home__button'>
                        get started
                    </Link>
                </div>
                <figure className='home__img--wrapper'>
                    <img src={Img} className="home__img" alt="soovo"/>
                </figure>
            </div>
        </div>
    );
}

export default Home;
