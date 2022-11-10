import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const ErrorPage = () => {
    useTitle("NexaForest - 404 Error Page")
    return (
        <div className="min-h-screen lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                Looks like your lost!
                            </h1>
                            <p className="my-2 text-gray-800">Sorry about that! Please visit our Homepage and search again.</p>
                            <Link to={'/'}>
                                <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50">Take me there!</button>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <Player
            src="https://assets1.lottiefiles.com/packages/lf20_uduc233o.json"
            loop
            autoplay
            ></Player>
        </div>
    );
};

export default ErrorPage;