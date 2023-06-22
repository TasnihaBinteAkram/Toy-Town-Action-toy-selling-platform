import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import S1 from "../../assets/slider/S1.png";
import S2 from "../../assets/slider/S2.png";
import S3 from "../../assets/slider/S3.png";
import S4 from "../../assets/slider/S4.png";
import S5 from "../../assets/slider/S5.png";
import S6 from "../../assets/slider/S6.png";
import S7 from "../../assets/slider/S7.png";
import S8 from "../../assets/slider/S8.png";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const Slider = () => {
  const slides = [S1, S2, S3, S4, S5, S6, S7, S8];
  return (
    <section className="max-w-screen-xl max-h-screen mt-20 lg:mt-40 mx-auto">
      <h1 className="section-title">Unleash Your Inner Hero</h1>
      <div className="mt-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={0}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 1.5,
            slideShadows: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
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
          className="mySwiper"
        >
          {slides.map((slide,i) => (
            <SwiperSlide key={i}>
              <img src={slide} alt="" className="w-2/3 h-2/3 mx-auto lg:mx-0 lg:h-full lg:w-full rounded-lg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
