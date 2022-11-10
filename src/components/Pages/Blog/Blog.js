import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import BlogCard from './BlogCard';

const Blog = () => {
    useTitle("NexaForest- Blog")
    const blogs = useLoaderData()
    console.log(blogs)
    return (
        <div className='bg-white dark:bg-gray-900'>
            <div className='min-h-screen'>
                <div className='container mx-auto px-4 md:px-8 lg:px-12 xl:px-0 grid grid-cols-1'>
                    <div className='py-12 mb-6'>
                        <div className="text-center">
                            <h1 className="text-xl md:text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">
                                Welcome to <span className='text-teal-600'> NexaForest <br className='block md:hidden'/>Blog page</span>
                            </h1>
                            <p className="text-sm lg:text-lg max-w-screen-md px-2 md:px-8 lg:px-0 md:mx-auto mt-4 text-gray-500">
                                Read the regular blogs here.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-4 md:gap-16 xl:24'>
                        {
                            blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;