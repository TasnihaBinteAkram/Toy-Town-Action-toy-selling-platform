import React, { useEffect } from 'react';
import HomeBanner from '../Components/Home/HomeBanner';
import Category from '../Components/Home/Category';
import Slider from '../Components/Slider/Slider';
import BestSelling from '../Components/Home/BestSelling';
import pattern from "../assets/banner/pattern1.png";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { useNavigation } from 'react-router-dom';
import LoadSpinner from '../Components/Spinner/LoadSpinner';
import { Helmet } from 'react-helmet-async';
import Services from '../Components/Services/Services';
import ExtraBanner from '../Components/Home/ExtraBanner';
// ..
AOS.init();

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const navigate = useNavigation()
    if(navigate.state == 'loading'){
        
        return <LoadSpinner></LoadSpinner>
    }
    return (
        <div
        style={{ backgroundImage: `url(${pattern})` }}
        >
            <Helmet>
                <title>ToyTown | Home</title>
            </Helmet>
            <HomeBanner></HomeBanner>
            <div data-aos="fade-up" data-aos-duration="500"><Slider></Slider></div>
            <div data-aos="fade-up" data-aos-duration="500">
            <Category></Category>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
            <ExtraBanner/>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
            <BestSelling></BestSelling>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
            <Services></Services>
            </div>
            
        </div>
    );
};

export default Home;