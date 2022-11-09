import React from 'react';

const Review = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className='container mx-auto'>
                <div className='flex flex-col'>
                    <div className='text-start'>
                        <h1 className="text-xl md:text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                            What our <span class="text-blue-500">customers</span> <br/> are saying
                        </h1>
                    </div>
                    <div className="mt-10 lg:mt-20">
                        <img className="object-cover object-center rounded-lg" src="" alt="" />
                        <div className="mt-8 lg:px-10 lg:mt-0">
                            <h1 className="font-semibold text-gray-800 dark:text-white ">
                                Help us improve our productivity
                            </h1>
                            <p className="mt-6 text-gray-500 dark:text-gray-400">
                                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                                tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                                aperiam dolorum, obcaecati corrupti aspernatur a. ”
                            </p>

                            <h3 className="mt-6 text-blue-500">Ronik Ederson</h3>
                            <p className="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;