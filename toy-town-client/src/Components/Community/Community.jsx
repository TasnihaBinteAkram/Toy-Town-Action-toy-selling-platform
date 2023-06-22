import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadSpinner from '../Spinner/LoadSpinner';

const Community = () => {
    return (
        <div className='min-h-[calc(100vh-200px)] flex justify-center items-center gap-4'>
            <Helmet>
                <title>Toytown | Community</title>
            </Helmet>
            <h1 className="text-4xl font-bold text-cyan-700">
                Comming Soon!
            </h1>
            <LoadSpinner></LoadSpinner>
            
        </div>
    );
};

export default Community;