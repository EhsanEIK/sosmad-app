import React from 'react';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Cards></Cards>
            <div className='mt-10 bg-gray-700 rounded-full p-2 md:mx-auto mx-3'>
                <button className='btn bg-blue-600 border-blue-600 w-1/2'>Explore</button>
                <button className='btn bg-transparent border-transparent w-1/2'>Discover</button>
            </div>
        </div>
    );
};

export default Home;