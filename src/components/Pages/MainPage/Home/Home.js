import React from 'react';
import useTitle from '../../../../hooks/useTitle';
import Cover from '../Cover/Cover';
import NewsLetter from '../NewsLetter/NewsLetter';
import Services from '../Services/Services';
import Subscription from '../Subscription/Subscription';
import WorkGallery from '../WorkGallery/WorkGallery';
import WebFeatures from '../WebFeatures/WebFeatures';

const Home = () => {
    useTitle("NexaForest- Home")
    return (
        <div className='container mx-auto'>
            <Cover></Cover>
            <Services></Services>
            <WebFeatures></WebFeatures>
            <Subscription></Subscription>
            <WorkGallery></WorkGallery>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;