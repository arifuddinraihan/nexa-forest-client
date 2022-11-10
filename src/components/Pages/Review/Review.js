import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ValidateContext } from '../../contexts/AuthProvider';
import ReviewCard from './ReviewCard';

const Review = ({ serviceInfo }) => {
    const { _id } = serviceInfo
    const { user } = useContext(ValidateContext)
    const [reviewDetails, setReviewDetails] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviewDetails(data)
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className='container mx-auto'>
                <div className='flex flex-col mx-4'>
                    <div className='flex flex-col md:flex-row justify-between text-start gap-4'>
                        <h1 className="text-xl md:text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                            What our <span className="text-blue-500">customers</span> <br className='hidden md:block' /> are saying
                        </h1>
                        <Link to={`/write-reviews/${_id}`}
                            className='btn btn-sm md:btn-lg btn-primary shadow-lg'>
                            {
                                user ? "Write a review" : "Login before writing a review"
                            }
                        </Link>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
                        {
                            reviewDetails.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;