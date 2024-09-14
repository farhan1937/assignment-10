import React from 'react';
import Navbar from '../Navbar/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;