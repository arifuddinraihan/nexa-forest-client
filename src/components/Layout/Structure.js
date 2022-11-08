import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Common/Footer/Footer';
import Navbar from '../Pages/Common/Navbar/Navbar';

const Structure = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Structure;