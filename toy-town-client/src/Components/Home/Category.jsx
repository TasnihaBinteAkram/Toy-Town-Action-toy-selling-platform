import React, { useEffect, useState } from "react";
import CategoryCard from "../category/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.min.css'
import { useNavigation } from "react-router-dom";
import LoadSpinner from "../Spinner/LoadSpinner";

const Category = () => {
  const [category, setCategory] = useState("");
  const [data, setData] = useState([])
  const navigate = useNavigation()
    if(navigate.state == 'loading'){
        return <LoadSpinner></LoadSpinner>
    }
  useEffect(()=>{
    fetch(`https://toy-town-server-sigma.vercel.app/category?category=${category}`)
    .then(res => res.json())
    .then(data => {
        setData(data);
    })
  },[category])
  return (
    <section className="max-w-screen-xl mt-20 lg:mt-40 mx-auto">
      <h1 className="section-title">Shop By Category</h1>
      <div>
        <div className="lg:w-1/3 mx-auto flex justify-center mt-8">
          <button onClick={() => setCategory("marvel")} className={category=='marvel'?'active-tab':'inactive-tab'}>
            Marvel
          </button>
          <button onClick={() => setCategory("starwars")} className={category=='starwars'?'active-tab':'inactive-tab'}>
            Star Wars
          </button>
          <button onClick={() => setCategory("transformers")} className={category=='transformers'?'active-tab':'inactive-tab'}>
            Transformers
          </button>
        </div>
      </div>
      <div className="mt-12 px-4 flex justify-center py-8 mb-20">
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        navigation
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSlideChange={()=>console.log('change')}
      >
        {
                data.map(toy =><SwiperSlide key={toy._id}> 
                <CategoryCard 
                toy={toy}
                ></CategoryCard>
                </SwiperSlide>)
            }
        
      </Swiper>
            
      </div>
    </section>
  );
};

export default Category;
