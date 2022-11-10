import React from 'react';
import { toast } from 'react-toastify';

const NewsLetter = () => {
    const newsLetterHandle = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email?.value;

        fetch(`https://nexa-forest-server-side.vercel.app/newsletter-users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                email : email
            })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    toast.success('WOW! You just subscribe our Newsletter!', {
                        position: "bottom-center",
                        autoClose: 1500,
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
            <section className="container-mx-auto">
                <div className="max-w-3xl px-6 py-16 mx-auto text-center">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Want to know about our daily deals?</h1>
                    <p className="max-w-md mx-auto mt-5 text-gray-500 dark:text-gray-400">Please input your email, and we will deliver daily deals and new Service information to you mail box.</p>

                    <form onSubmit={newsLetterHandle}
                    className="flex flex-col mt-8 space-y-3 sm:space-y-0 sm:flex-row sm:justify-center sm:-mx-2">
                        <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="Email Address" required/>

                            <button className="btn rounded-md px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-500 sm:mx-2 hover:bg-teal-600 focus:outline-none focus:bg-teal-600">
                                News Letter Subscribe
                            </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;