import React, { useEffect, useState } from 'react';
import CategoryCard from '../category/CategoryCard';

const BestSelling = () => {
    const [toys, setToys] = useState([]);
    const [seemore, setSeeMore] = useState(false)
    useEffect(()=>{
        fetch('https://toy-town-server-sigma.vercel.app/bestsellers')
        .then(res => res.json())
        .then(data => setToys(data))
    },[seemore])
    return (
        <section className="max-w-screen-xl mt-20 lg:mt-4 mx-auto mb-12">
            <h1 className="section-title">Our Bestselling Toys</h1>
            <div className='mt-12 px-4 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    toys.slice(0,seemore?6:3).map(toy => <CategoryCard
                    key={toy._id}
                    toy={toy}
                    ></CategoryCard>)
                }
                    
            </div>
            <div className='text-center mt-12'>
                <button onClick={()=> setSeeMore(!seemore)} className='my-btn'> {seemore?"Show Less":"Show More"}</button>
            </div>
            
        </section>
    );
};

export default BestSelling;