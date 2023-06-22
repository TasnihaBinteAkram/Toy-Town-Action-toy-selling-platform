import React from 'react';
import NavBar from '../Shared/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-270px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            <Toaster></Toaster>
        </>
    );
};

export default Main;