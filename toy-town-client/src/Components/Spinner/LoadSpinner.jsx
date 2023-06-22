import React from 'react';
import shield from "../../assets/banner/shield.png"

const LoadSpinner = () => {
    return (
        <div className='min-h-[calc(100vh-200px)] flex justify-center items-center'>
            <img src={shield} alt="" className='w-14 h-14 animate-spin'/>
        </div>
    );
};

export default LoadSpinner;