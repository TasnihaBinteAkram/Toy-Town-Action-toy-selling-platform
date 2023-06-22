import React from 'react';
import { BsTruck, BsWhatsapp, BsCart3, BsEmojiSmile } from "react-icons/bs";
const Services = () => {
    return (
        <div className='max-w-screen-xl mt-16 lg:mt-24 mx-auto'>
            <h1 className="section-title">Our Srvices</h1>
            <div className='px-4 mt-16 grid gap-6 grid-cols-2 lg:grid-cols-4'>
                <div className='text-center bg-base-200 rounded-md shadow-lg px-6 py-6'>
                    <div className='flex justify-center mb-4'>
                        <BsTruck className='text-4xl lg:text-6xl text-cyan-700'></BsTruck>
                    </div>
                    <p className='font-medium'>Fast Delivery</p>
                    <p>7 days a week</p>
                </div>
                <div className='text-center bg-base-200 rounded-md shadow-lg px-6 py-6'>
                    <div className='flex justify-center mb-4'>
                        <BsWhatsapp className='text-4xl lg:text-6xl text-cyan-700'></BsWhatsapp>
                    </div>
                    <p className='font-medium'>Contact on Whatsapp</p>
                    <p>24/7 Available</p>
                </div>
                <div className='text-center bg-base-200 rounded-md shadow-lg px-6 py-6'>
                    <div className='flex justify-center mb-4'>
                        <BsCart3 className='text-4xl lg:text-6xl text-cyan-700'></BsCart3>
                    </div>
                    <p className='font-medium'>Bulk Inquiry</p>
                    <p>Email - toytown@gmail.com</p>
                </div>
                <div className='text-center bg-base-200 rounded-md shadow-lg px-6 py-6'>
                    <div className='flex justify-center mb-4'>
                        <BsEmojiSmile className='text-4xl lg:text-6xl text-cyan-700'></BsEmojiSmile>
                    </div>
                    <p className='font-medium'>Quality Assurance</p>
                    <p>Every product is original and of high quality</p>
                </div>

            </div>
        </div>
    );
};

export default Services;