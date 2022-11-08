import React from 'react';

const Services = () => {
    return (
        <div className='bg-white dark:bg-gray-900'>
            <div className='min-h-screen'>
                <div className='container mx-auto grid grid-cols-1 my-12'>
                    <div className='py-24'>
                        <div class="text-center">
                            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

                            <p class="max-w-lg mx-auto mt-4 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt, laudantium
                                quia tempore delect
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                                style={{
                                    backgroundImage:
                                        "url(https://swiperjs.com/demos/images/nature-1.jpg)",
                                }}></div>

                            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>

                                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                    <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                    <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;