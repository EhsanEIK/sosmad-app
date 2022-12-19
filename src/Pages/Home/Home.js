import React from 'react';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Navbar></Navbar>
            <Cards></Cards>
        </div>
    );
};

export default Home;