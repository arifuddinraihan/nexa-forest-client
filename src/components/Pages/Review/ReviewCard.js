import React from 'react';

const ReviewCard = ({ review }) => {
    const { client, clientImg, clientReview, rating, reviewTime, serviceName } = review
    return (
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex justify-center -mt-16 md:justify-end">
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt={client}
                    src={clientImg} />
            </div>

            <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">Rating: {rating}</h2>

            <p className="mt-2 text-gray-600 dark:text-gray-200">{clientReview}</p>

            <div className="flex flex-row-reverse justify-between mt-4">
                <p className="text-sm font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{client}</p>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-300" tabIndex="0" role="link">{reviewTime ? reviewTime.slice(0, 18) : undefined}</p>
            </div>
        </div>
    );
};

export default ReviewCard;