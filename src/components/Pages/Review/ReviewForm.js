import React, { useContext, useState } from 'react';
import { ValidateContext } from '../../contexts/AuthProvider';
import moment from 'moment/moment';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const ReviewForm = () => {
    const { user } = useContext(ValidateContext)
    const { _id, title } = useLoaderData()
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    const handleReviewSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const email = user?.email || 'unregistered';
        const reviewTime = form.time?.value;
        const clientReview = form.message?.value;

        const serviceReviewGiven = {
            service: _id,
            serviceName: title,
            customer: user?.displayName,
            email,
            clientReview,
            reviewTime
        }
        console.log(serviceReviewGiven)

        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(serviceReviewGiven)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    toast.success('your Review has added!', {
                        position: "top-right",
                        autoClose: 500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                }
            })
            .catch(err => console.error(err))

    }
    return (
        <div className='bg-white dark:bg-gray-900'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 my-16 px-6 md:px-16 lg:px-24 xl:px-0'>
                    <div className='text-start md:text-center'>
                        <h2 className='text-xl md:text-4xl text-slate-700 dark:text-slate-100 font-bold'>Every Review Matters</h2>
                        <p className='mt-6 text-md md:text-xl text-slate-700 dark:text-slate-100 font-semibold'>Please tell us and let others know about your experience over<br/>
                        <span className='text-accent dark:text-emerald-500'>{title}</span> Service.</p>
                    </div>
                    <div className='mt-8'>
                        <form className='container mx-auto' onSubmit={handleReviewSubmit}>
                            <div className="grid grid-cols-1 items-center gap-6 mt-4">
                                <div className='flex flex-col container mx-auto'>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="email">User Email</label>
                                    <input name="email" id="email" type="email"
                                        className="px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user?.email} disabled />
                                </div>
                                <div className='flex flex-col container mx-auto'>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="time">Review time</label>
                                    <input name="time" id="time" type="text"
                                        className="px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        defaultValue={currentTime}
                                        disabled />
                                </div>
                                <div className='flex flex-col container mx-auto'>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="messageConfirmation">Write Your Review</label>
                                    <textarea name="message" id="messageConfirmation" type="text"
                                        className="textarea px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Your Message" required />
                                </div>
                            </div>

                            <div className="flex justify-start mt-6">
                                <input className="btn rounded-3xl px-8 py-2.5 leading-5 text-slate-700 font-semibold bg-primary shadow-2xl hover:bg-teal-500" type="submit" value="Post your review" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewForm;