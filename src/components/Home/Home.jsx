import React from 'react';

export const Home = () => {
    return (
        <section className='section'>
            <div className='home'>
                <h3 className='title'>The phonebook</h3>

                <ul className='home__book book'>
                    <li className='book__item'>1. some number</li>
                    <li className='book__item'>2. ...</li>
                </ul>
            </div>
        </section>
    );
};

