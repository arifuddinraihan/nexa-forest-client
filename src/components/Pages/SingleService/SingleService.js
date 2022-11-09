import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleService = () => {
    const { description, img, price, rating, title, _id } = useLoaderData()
    // console.log(title)
    return (
        <div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 px-2 md:px-8'>
                    <div className='py-8'>
                        <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                            <PhotoProvider
                                speed={() => 800}
                                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                            >
                                <PhotoView src={img}>
                                    <img className="object-cover w-full h-96" src={img} style={{ objectFit: 'cover' }} alt={title} />
                                </PhotoView>
                            </PhotoProvider>
                            <div className="p-6">
                                <div>
                                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Service</span>
                                    <a href="#" className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</a>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center">
                                        <div className="flex items-center">
                                            <img className="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                                            <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">Jone Doe</a>
                                        </div>
                                        <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-4'>
                        <Review></Review>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleService;