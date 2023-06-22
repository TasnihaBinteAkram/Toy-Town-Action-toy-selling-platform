import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LgNavItems from "../Components/Navbar/LgNavItems";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { AuthContext } from "../Providers/AuthProvider";
import { HiOutlineUserCircle } from "react-icons/hi";
import logo from "../assets/logo/logocyan.png";

const NavBar = () => {
  const { user } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  return (
    <nav className="navbar px-8 py-4 lg:px-16 lg:py-6">
      <div className="flex items-center gap-2 flex-1">
        <div className="w-6 h-8 mt-3 lg:w-8 lg:h-10  lg:mt-2">
          <img src={logo} alt="" />
        </div>
        <Link
          to="/"
          className="font-bold normal-case text-xl lg:text-2xl  text-cyan-600"
        >
          Toy-Town
        </Link>
      </div>
      <div className="hidden lg:flex">
        <div className="flex gap-4 mr-6">
          <LgNavItems></LgNavItems>
        </div>

        {user ? (
          <div
            title={user?.displayName}
            className="w-12 h-12 text-2xl flex justify-center items-center rounded-full"
          >
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                className="rounded-full w-12 h-12 object-cover"
                alt="user"
              />
            ) : (
              <HiOutlineUserCircle></HiOutlineUserCircle>
            )}
          </div>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "link-text"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
      <div className="block lg:hidden">
        {isOpen ? (
          <HiOutlineX
            onClick={() => setOpen(!isOpen)}
            className="text-2xl text-cyan-600"
          ></HiOutlineX>
        ) : (
          <HiMenuAlt3
            onClick={() => setOpen(!isOpen)}
            className="text-2xl text-cyan-600"
          ></HiMenuAlt3>
        )}
      </div>
      {isOpen && (
        <div className="rounded-md bg-base-100 w-2/5 shadow-md pl-4 pr-8 py-4 flex flex-col gap-2 items-start absolute z-50 left-[50%] top-[10%]">
          <LgNavItems />
          {!user && (
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "link-text"
              }
              to="/login"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
