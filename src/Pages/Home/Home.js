import React from 'react';
import Cards from '../../components/Cards/Cards';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import UserProfile from '../../components/UserProfile/UserProfile';

const Home = () => {
    return (
        <div className='container mx-auto mt-5'>
            <Navbar></Navbar>
            <Cards></Cards>
            <div className='mt-10 bg-gray-700 rounded-full p-2 md:mx-auto mx-3 ml-4'>
                <button className='btn normal-case bg-blue-600 border-blue-600 w-1/2'>Explore</button>
                <button className='btn normal-case bg-transparent border-transparent w-1/2'>Discover</button>
            </div>
            <UserProfile></UserProfile>
            <Footer></Footer>
        </div>
    );
};

export default Home;