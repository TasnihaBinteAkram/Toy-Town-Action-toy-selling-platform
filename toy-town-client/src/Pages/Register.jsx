import React, { useContext, useEffect, useState } from "react";
import SideBanner from "../Components/Login/SideBanner";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import spidy from "../assets/login/spidy.png";
import { AuthContext } from "../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const {createUser, auth, logOut } = useContext(AuthContext);
  const [regUser, setregUser] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [error, setError] = useState("")
  const handleRegister = (event) => {
    setError("")
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    createUser(email, password)
      .then((res) => {
        setregUser(res.user);
        logOut()
          .then(() => {})
          .catch((err) => {});
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            // console.log("updated");
          })
          .catch((err) => {
            console.log(err.message);
          });
      })

      .catch((err) => {
        console.log(err.message);
        if (err.message.includes("weak-password")){
          setError("Password must be 6 characters")
        }
        else if(err.message.includes('email-already-in-use')){
          setError("Email is already registered")
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>ToyTown | Register</title>
      </Helmet>
      <h1 className="section-title mt-16">Welcome to Toy-Town!</h1>
      <div className=" shadow-xl w-2/3 mx-auto mt-12 flex h-[600px]">
        <SideBanner regUser={regUser}>
          {regUser ? "Welcome! Please Login" : "Register Now!"}
        </SideBanner>
        <div className={regUser ? "hidden" : "w-1/2"}>
          <img className="w-full h-1/4 object-cover" src={spidy} alt="" />
          <form onSubmit={handleRegister} className="px-10 -mt-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-cyan-600">
                  Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered border-cyan-500"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-cyan-600">
                  Email
                </span>
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered border-cyan-500"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-cyan-600">
                  Password
                </span>
              </label>
              <input
                required
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered border-cyan-500"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-cyan-600">
                  Photo URL
                </span>
              </label>
              <input
                type="url"
                placeholder="photo url"
                name="photo"
                className="input input-bordered border-cyan-500"
              />
            </div>
            <p className="text-xs text-red-600 mt-1">{error}</p>
            <div className="form-control">
              <input type="submit" value="Register" className="my-btn mt-6" />
            </div>
          </form>
          <p className="text-sm font-bold text-cyan-600 text-center mt-2 w-full hover:underline">
            <Link to="/login">Already Registered? Login now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;