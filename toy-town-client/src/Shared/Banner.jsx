import React from 'react';
import banner from '../assets/banner/banner.jpg'

const Banner = ({children}) => {
    return (
        <div style={{backgroundImage:`url(${banner})`, backgroundPosition:`top`, backgroundRepeat:'no-repeat', backgroundSize:'120%'}} className='h-[200px] lg:h-[50vh] relative'>
            <div className='bg-cyan-950 bg-opacity-40 h-full lg:h-[50vh] '></div>
            <div className='absolute top-1/2 lg:top-1/2 lg:-translate-y-8 px-12 lg:px-20 bg-base-200 py-2 lg:py-4 rounded-r-lg'>
                <h1 className='text-cyan-600 font-bold text-xl lg:text-4xl'>{children}</h1>
            </div>
        </div>
    );
};

export default Banner;