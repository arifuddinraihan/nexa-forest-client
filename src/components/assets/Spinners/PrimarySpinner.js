import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
const PrimarySpinner = () => {
    return (
        <div className='flex justify-center content-center min-h-screen items-center dark:bg-slate-900'>
            <FadeLoader
                color="#5def34"
                size={100}
            />
        </div>
    );
};

export default PrimarySpinner;