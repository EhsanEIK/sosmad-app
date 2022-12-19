import React from 'react';
import image1 from '../../assets/images/images1.jpg';
import women from '../../assets/images/women.jpg';

const CardThree = () => {
    return (
        <div className="card card-compact md:w-56 w-32 relative">
            <figure><img src={image1} alt="" className='w-full h-28' /></figure>
            <div className="bg-gray-500 rounded-b-2xl md:p-5 p-3 pt-0">
                <div className="avatar">
                    <div className="w-10 rounded-full absolute -top-10 md:left-[70px] left-8">
                        <img src={women} alt="" />
                    </div>
                </div>
                <h2 className="text-white text-center md:text-base text-xs mt-0">Lindsey Mango</h2>
            </div>
        </div>
    );
};

export default CardThree;