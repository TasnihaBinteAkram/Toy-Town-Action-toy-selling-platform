import React from "react";
import bg from "../../assets/banner/banner3.jpg";
const ExtraBanner = () => {
  return (
    <>
      <h1 className="section-title">Kids Love our toys</h1>
      <div
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
        }}
        className="h-[500px] max-w-screen-xl mx-auto bg-cover bg-center my-24"
      ></div>
    </>
  );
};

export default ExtraBanner;
