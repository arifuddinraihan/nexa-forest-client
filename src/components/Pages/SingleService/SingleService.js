import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { BsFillArrowRightCircleFill } from "react-icons/bs";

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
                                    <h2 className="text-center block mt-2 text-4xl font-extrabold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{title}</h2>
                                    <p className='text-center my-1'><span className="text-sm text-blue-600 uppercase dark:text-blue-400 font-bold">Service</span></p>
                                    <p className='text-center my-1 text-sm uppercase dark:text-blue-400 font-bold text-blue-600'>Price :
                                        <span className="text-emerald-800 dark:text-slate-50">${price}</span></p>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-semibold">{description}</p>
                                </div>

                                <div className="mt-4">
                                    <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-2">
                                        <div className="">
                                            <button className='btn btn-success gap-4'>
                                                Get this Service  <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                                            </button>
                                        </div>
                                        <div>
                                            <span className="mx-1 text-md text-gray-600 dark:text-gray-300 md:text-lg">Rating : {rating}</span>
                                        </div>
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