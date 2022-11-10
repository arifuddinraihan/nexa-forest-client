import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blog = () => {
    useTitle("NexaForest- Blog")
    return (
        <div>
            <h2>This is blog Page.</h2>
        </div>
    );
};

export default Blog;