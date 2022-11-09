import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const SingleService = () => {
    const { description, img, price, rating, title, _id } = useLoaderData()
    // console.log(title)
    return (
        <div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 px-2 md:px-8'>
                    <div className=''>This is Service of {title}

                    </div>
                    <div className=''>
                        <Review></Review>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleService;