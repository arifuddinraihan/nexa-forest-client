import React, { useContext } from 'react';
import { ValidateContext } from '../../contexts/AuthProvider';

const ReviewForm = () => {
    const { user } = useContext(ValidateContext)
    return (
        <div className='bg-white dark:bg-gray-900'>
            <div className='container px-8'>
                <div className='flex flex-col my-16'>
                    <div className='text-start md:text-center'>
                        <h2 className='text-xl md:text-4xl text-slate-700 dark:text-slate-100 font-bold'>Every Review Matters</h2>
                        <p className='mt-6 text-md md:text-xl text-slate-700 dark:text-slate-100 font-semibold'>Please tell us and let others know about experience over this service.</p>
                    </div>
                    <div className='mt-8'>
                        <form className='container mx-auto'>
                            <div class="grid grid-cols-1 gap-6 mt-4">
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="email">User Email</label>
                                    <input name="email" id="email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user?.email} />
                                </div>
                                <div>
                                    <label class="text-gray-700 dark:text-gray-200" for="messageConfirmation">Write Your Review</label>
                                    <textarea name="message" id="messageConfirmation" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Your Message" required />
                                </div>
                            </div>

                            <div class="flex justify-start mt-6">
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