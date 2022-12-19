import React from 'react';
import image1 from '../../assets/images/images1.jpg';
import men1 from '../../assets/images/men1.jpg';

const CardOne = () => {
    return (
        <div className="card w-56 bg-base-100 shadow-xl relative">
            <figure><img src={image1} alt="Shoes" /></figure>
            <div className="bg-gray-500 rounded-b-2xl p-5 pt-0">
                <div className="avatar">
                    <div className="w-10 rounded-full absolute -top-10 left-[70px]">
                        <img src={men1} alt="" />
                    </div>
                </div>
                <h2 className="text-white text-center mt-0">Adison Mango</h2>
            </div>
        </div>
    );
};

export default CardOne;