import React, { useContext } from "react";
import login from '../../assets/login/login.jpg'
import { AuthContext } from "../../Providers/AuthProvider";

const SideBanner = ({regUser,children}) => {
  const {user} = useContext(AuthContext)
  return (
    <>
      <div className={regUser?"w-full relative":"w-1/2 relative"}>
        <div
          style={{
            backgroundImage: `url(${login})`,
            backgroundPosition: `center`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
          }}
          className="h-[100%]"
        >
          <div className="bg-cyan-950 bg-opacity-70 h-full lg:h-full "></div>
          <h1 className="text-white text-5xl font-bold text-center absolute top-1/2 translate-x-1/2">
            {children}
          </h1>
        </div>
      </div>
    </>
  );
};

export default SideBanner;