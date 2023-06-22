import React from 'react';
import error from '../assets/error/error.gif'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ErrorPage = () => {
    return (
        <>
        <Helmet>
            <title>ToyTown | Error</title>
        </Helmet>
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <div>
                <img src={error} alt="" />
            </div>
            <Link to='/'><button className='my-btn'>Go to Homepage</button></Link>
        </div>
        </>
    );
};

export default ErrorPage;