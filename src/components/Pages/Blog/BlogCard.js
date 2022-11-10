import React from 'react';

const BlogCard = ({blog}) => {
    const {title , img , description} = blog
    return (
        <div className="w-md md:w-lg overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img className="object-cover object-center w-full h-56" src={img} alt={title} />

            <div className="flex items-center px-6 py-3 bg-gray-900">
                <h1 className="mx-3 text-lg font-semibold text-white">{title}</h1>
            </div>

            <div className="px-6 py-4">
                <p className="py-2 text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;