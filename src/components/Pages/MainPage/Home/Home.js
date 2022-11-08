import React from 'react';
import NewsLetter from '../NewsLetter/NewsLetter';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';
import WorkGallery from '../WorkGallery/WorkGallery';

const Home = () => {
    return (
        <div>
            <h2>This is Home Page.</h2>
            <Services></Services>
            <Subscription></Subscription>
            <WorkGallery></WorkGallery>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;