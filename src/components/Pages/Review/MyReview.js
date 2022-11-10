import React, { useContext, useEffect, useState } from 'react';
import { ValidateContext } from '../../contexts/AuthProvider';
import MyReviewRow from './MyReviewRow';
import { toast } from 'react-toastify';


const MyReview = () => {
    const { user } = useContext(ValidateContext)
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [user?.email])

    const handleDelete = id => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== id)
                    setReviews(remaining)
                    toast.success('Your Review has deleted!', {
                        position: "top-center",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                }
            })
    }
    return (
        <div className='bg-white dark:bg-gray-900'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 my-16 px-6 md:px-16 lg:px-24 xl:px-0'>
                    <div className='text-start md:text-center'>
                        <h2 className='text-xl md:text-4xl text-slate-700 dark:text-slate-100 font-bold'>You can see your all
                            <span className='text-accent dark:text-teal-500'> reviews </span>
                            here</h2>
                    </div>
                    <div className='mt-8'>
                        <div className='container mx-auto' >
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">

                                    <thead>
                                        <tr>
                                            <th>
                                                <label>
                                                    <input type="checkbox" className="checkbox" disabled />
                                                </label>
                                            </th>
                                            <th>Service Name</th>
                                            <th>Review</th>
                                            <th>Rating</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            reviews.map(review =>
                                                <MyReviewRow key={review._id}
                                                    review={review}
                                                    handleDelete={handleDelete}
                                                ></MyReviewRow>)
                                        }
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;