import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {

    const serviceAddForm = event => {
        event.preventDefault()
        const form = event.target;
        const serviceName = form.name?.value;
        const serviceImage = form.photoURL?.value;
        const servicePrice = form.price?.value;
        const serviceRating = form.rating?.value;
        const serviceDetails = form.details?.value;

        fetch(`https://nexa-forest-server-side.vercel.app/services`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                title: serviceName,
                img: serviceImage,
                price: servicePrice,
                rating: serviceRating,
                description: serviceDetails,
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    toast.success('Your Service has been added!', {
                        position: "bottom-center",
                        autoClose: 900,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
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
                        <h2 className='text-xl md:text-4xl text-slate-700 dark:text-slate-100 font-bold'>Add your desire Service here</h2>
                    </div>
                    <div className='mt-8'>
                        <form className='container mx-auto' onSubmit={serviceAddForm}>
                            <div className="grid grid-cols-1 items-center gap-6 mt-4">
                                <div className='flex flex-col container mx-auto'>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="email">Service Name</label>
                                    <input name="name" type="text"
                                        className="px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                                </div>
                                <div className='flex flex-col container mx-auto'>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="email">Service Cover Image Photo URL (only)</label>
                                    <input name="photoURL" type="text"
                                        className="px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                                </div>
                                <div className='flex flex-col container mx-auto'>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="email">Service Price</label>
                                    <input name="price" type="number"
                                        className="px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                                </div>
                                <div className='flex flex-col container mx-auto'>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="time">Default Service Rating</label>
                                    <input name="rating" type="number"
                                        className="px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                                </div>

                                <div className='flex flex-col container mx-auto'>
                                    <label className="text-gray-700 dark:text-gray-200" htmlFor="messageConfirmation">Service Description</label>
                                    <textarea name="details" type="text"
                                        className="textarea px-4 py-2 mt-2 text-gray-700 bg-white border border-slate-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring text-md md:text-lg md:text:" placeholder="Your Message" required />
                                </div>
                            </div>

                            <div className="flex justify-start mt-6">
                                <input className="btn rounded-3xl px-8 py-2.5 leading-5 text-slate-700 font-semibold bg-primary shadow-2xl hover:bg-teal-500" type="submit" value="Create A Service" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;