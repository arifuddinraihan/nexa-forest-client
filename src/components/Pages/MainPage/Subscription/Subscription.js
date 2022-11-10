import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';

const Subscription = () => {
    return (
        <div className="container px-6 py-16 mx-auto">
            <div className="items-center lg:flex">
                <div className="w-full lg:w-1/2">
                    <div className="lg:max-w-lg">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase dark:text-white lg:text-3xl">
                            Best place to choose your <span className='text-teal-800'>Plant</span>
                        </h1>

                        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-md font-semibold">
                            Are you searching for new plants? Do you prefer green environment over this polluted climate? Visit and see our astonishing service...
                        </p>

                        <Link to={'/all-services'}>
                            <button className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform bg-teal-600 rounded-md lg:w-auto hover:bg-teal-500 focus:outline-none focus:bg-teal-500">Visit our Services</button>
                        </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                    <Player
                        className='w-full h-full lg:max-w-2xl rounded-2xl'
                        src="https://assets3.lottiefiles.com/packages/lf20_nNIZfb.json"
                        autoplay
                        loop
                    ></Player>
                </div>
            </div>
        </div>
    );
};

export default Subscription;