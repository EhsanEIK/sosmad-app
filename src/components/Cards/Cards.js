import React from 'react';
import CardOne from './CardOne';
import CardTwo from './CardTwo';

const Cards = () => {
    return (
        <div className='md:mx-auto mx-3'>
            <h1 className='font-semibold mb-5'>Stories</h1>
            <div className='grid grid-cols-3 gap-x-10'>
                <CardOne></CardOne>
                <CardTwo></CardTwo>
            </div>
        </div>
    );
};

export default Cards;