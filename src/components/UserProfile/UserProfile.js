import React from 'react';
import men1 from '../../assets/images/men1.jpg';
import image3 from '../../assets/images/images3.jpg';
import { FaEllipsisH, FaRegCommentDots } from "react-icons/fa";

const UserProfile = () => {
    return (
        <section className='md:mx-auto mx-3 ml-4'>
            <div className="rounded-3xl shadow-md sm:w-96 bg-gray-700 text-white mt-10">
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <div className="avatar">
                            <div className="w-10 rounded-full ring ring-blue-600 ring-offset-base-100 ring-offset-2">
                                <img src={men1} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-300" />
                            </div>
                        </div>
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">Adison Mango</h2>
                            <span className="inline-block text-xs leading-none text-gray-400">10 mins ago</span>
                        </div>
                    </div>
                    <button title="Open options" type="button" className='flex justify-center items-center bg-gray-600 rounded-full text-white p-2'>
                        <FaEllipsisH />
                    </button>
                </div>
                <img src={image3} alt="" className="object-cover object-center w-full h-56 rounded-t-[30px] p-3" />
                <div className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <button type="button" title="Like post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
                                </svg>
                            </button>
                            <button type="button" title="Add a comment" className="flex items-center justify-center">
                                <FaRegCommentDots className="w-5 h-5 fill-current" />
                            </button>
                            <button type="button" title="Share post" className="flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center pt-3 pb-1">
                        <div className="flex items-center space-x-2 mb-2">
                            <p>
                                229<span className='text-gray-400 ml-1'>Likes</span>
                                <span className='mx-2'>.</span>
                                200<span className='text-gray-400 ml-1'>Comments</span>
                            </p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsum alias.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;