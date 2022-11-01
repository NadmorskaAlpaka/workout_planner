import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='homepage__container'>
            <div className='homepage__content'>
                <p className='homepage__text'>
                    One day you'll look back...
                </p>
                <p className='homepage__text'>
                    and it will all make sens
                </p>
                <h1 className='homepage__button--text'>
                    start your path here
                </h1>
                <Link to="/exercises">
                    Get started!
                </Link>
            </div>
        </div>
    );
}

export default Homepage;
