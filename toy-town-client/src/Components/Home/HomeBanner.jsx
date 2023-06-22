import React from "react";
import "./HomeBanner.css";
import pattern from "../../assets/banner/pattern1.png";
import heroes from "../../assets/banner/heroes.png";
import hammer from "../../assets/banner/hammer.png";
import purple from "../../assets/banner/purple.png";
import red from "../../assets/banner/red.png";
import shield from "../../assets/banner/shield.png";
import light from "../../assets/banner/light.png";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="relative h-[800px] lg:h-[90vh] w-[100vw]">
      <div
        style={{ backgroundImage: `url(${pattern})` }}
        className="flex opacity-[10%] h-[800px] lg:h-[90vh]"
      ></div>
      <div className="flex flex-col-reverse gap-6 lg:flex-row justify-between items-center lg:px-20 w-full absolute top-[10%]">
        <div className="space-y-4 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-wide text-cyan-600">
            Transform Playtime <br /> Into Epic Battles!
          </h1>
          <p className="text-lg lg:w-2/3">
            Welcome to the ultimate destination for action toy enthusiasts.
            Discover a universe where heroes rise, villains fall, and epic
            battles unfold. Unleash your imagination and let the action begin!
          </p>
          <div className="space-x-3">
            <Link to='/alltoys'><button className="my-btn mt-2">Explore Toys</button></Link>
            <Link to='/community'><button className="my-btn-outline">Join Our Community</button></Link>
          </div>
        </div>
        <div>
          <div className="parent w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-full flex justify-center items-center">
            <img className="" src={heroes} alt="" />
            <div className="absolute circle text-2xl w-8 h-8 rounded-full flex items-center">
              <img src={red} alt="" />
            </div>
            <div className="absolute circle1 text-2xl w-8 h-8 rounded-full">
              <img src={hammer} alt="" />
            </div>
            <div className="absolute circle2 text-2xl w-8 h-8 rounded-full">
              <img src={shield} alt="" />
            </div>
            <div className="absolute circle3 text-2xl w-8 h-8 rounded-full flex items-center">
              <img src={purple} alt="" />
            </div>
            <div className="absolute circle4 text-2xl w-8 h-8 rounded-full">
              <img src={light} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
