import React, { useContext, useEffect, useState } from "react";
import SideBanner from "../Components/Login/SideBanner";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import spidy from "../assets/login/spidy.png";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import AOS from 'aos';

const Login = () => {
  const {user, login, googleLogin} = useContext(AuthContext);
  const [error, setError] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const handleLogin = (event) => {
    event.preventDefault();
    setError("")
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then(result => {
      // console.log(result.user);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(err => {
      if(err.message.includes('wrong-password')){
        setError("Wrong Password")
      }
      else if(err.message.includes('user-not-found')){
        setError("Unregistered user. Please register!")
      }
      else(setError(""))
      console.log(err.message);
    })
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(res => {
      // console.log(res.user);
    })
    .catch(err => {
      console.log(err.message);
      setError("An error occured!")
    })
  }

  return (
    <div>
      <Helmet>
            <title>ToyTown | Login</title>
        </Helmet>
      <h1 className="section-title mt-16">Welcome to Toy-Town!</h1>
      <div className="lg:shadow-xl lg:w-2/3 mx-auto mt-12 flex h-[600px]">
        <SideBanner>Login Now!</SideBanner>
        <div className="w-full lg:w-1/2">
          <img className="w-full h-1/4 object-cover" src={spidy} alt="" />
          <form onSubmit={handleLogin} className="px-10 -mt-3">
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
            <p className="text-xs text-red-600 mt-2">{error}</p>
            <Link className="text-sm font-bold text-cyan-600">
              Forgot Password?
            </Link>
            <div className="form-control">
              <input type="submit" value="Login" className="my-btn mt-6" />
            </div>
          </form>
          <div className="form-control mt-3 px-10">
            <button onClick={handleGoogleLogin} className="my-btn flex items-center justify-center gap-1.5">
              <AiOutlineGoogle className="text-xl mt-0.5" />
              <span>Google</span>
            </button>
          </div>
          <p className="text-sm font-bold text-cyan-600 text-center mt-2 w-full hover:underline">
            <Link to="/register">New Here? Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
