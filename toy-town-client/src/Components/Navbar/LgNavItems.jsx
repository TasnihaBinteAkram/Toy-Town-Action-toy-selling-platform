import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";

const LgNavItems = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link-text")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link-text")}
        to="/blogs"
      >
        Blogs
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active-link" : "link-text")}
        to="/alltoys"
      >
        All Toys
      </NavLink>
      {user && (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-link" : "link-text"
            }
            to="/mytoys"
          >
            My Toys
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-link flex items-center gap-1"
                : "link-text flex items-center gap-1"
            }
            to="/addtoy"
          >
            <FaPlus className="text-sm mt-1"></FaPlus> <span>Toy</span>
          </NavLink>
        </>
      )}
      {user && (
        <Link className="link-text" onClick={handleLogOut}>
          Log Out
        </Link>
      )}
    </>
  );
};

export default LgNavItems;
