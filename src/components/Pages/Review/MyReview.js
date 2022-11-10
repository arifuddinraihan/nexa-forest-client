import React, { useContext, useEffect, useState } from 'react';
import { ValidateContext } from '../../contexts/AuthProvider';
import MyReviewRow from './MyReviewRow';
import { toast } from 'react-toastify';


const MyReview = () => {
    const { user, loading, setLoading , logOut } = useContext(ValidateContext)
    const [reviews, setReviews] = useState([])
    const [reviewId, setReviewId] = useState("")
    useEffect(() => {
        fetch(`https://nexa-forest-server-side.vercel.app/reviews?email=${user?.email}` , {
            headers: {
                authorization: `Bearer ${localStorage.getItem('nexa-token')}`
            },
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => setReviews(data))
            .catch(err => console.error(err))
    }, [user?.email])
    const handleDelete = id => {
        fetch(`https://nexa-forest-server-side.vercel.app/reviews/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {

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

    const handleReviewUpdate = id => {
        setReviewId(id)
        // console.log("Review Button Working", id)
    }
    const reviewUpdateForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewRating = form.rating?.value;
        const updatedReviewText = form.message?.value;
        // console.log("Review Update form working", reviewRating, updatedReviewText)
        fetch(`https://nexa-forest-server-side.vercel.app/reviews/${reviewId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ updatedReview: updatedReviewText, updatedRating: reviewRating })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = reviews.filter(rev => rev._id !== reviewId)
                    const updatedReview = reviews.find(rev => rev._id === reviewId)
                    updatedReview.clientReview = updatedReviewText
                    updatedReview.rating = reviewRating
                    const newReview = [updatedReview, ...remaining]
                    setReviews(newReview)
                    form.reset()
                    toast.success("your Review has updated!", {
                        position: "bottom-center",
                        autoClose: 700,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark"
                    })
                }
            })
    }
    const clearModalData = () => {
        if (loading) {
            return <h2>loading...</h2>
        }
    }
    setLoading(false)
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
                            {reviews.length === 0
                                ?
                                <h2 className='text-error dark:text-red-500 text-center font-semibold my-4'>You have not write any reviews yet</h2>
                                : <></>}
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
                                                    handleReviewUpdate={handleReviewUpdate}
                                                ></MyReviewRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" onClick={clearModalData} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Review of : {reviewId?.serviceName}</h3>
                        <form className="mt-4" onSubmit={reviewUpdateForm}>
                            <p className="text-sm text-gray-700 dark:text-accent font-semibold">
                                Your Review Details
                            </p>

                            <input type="number" name="rating" placeholder='input 1 to 5 number'
                                className="block my-4 w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                            <textarea type="text" name="message" placeholder='Your updated Review' required
                                className="block my-4 w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />

                            <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                <input type="submit"
                                    className="w-full px-4 py-2 mt-3 text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-500 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReview;