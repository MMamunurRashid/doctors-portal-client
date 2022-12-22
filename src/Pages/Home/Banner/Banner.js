import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div
      className="hero bg-base-200"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse sm:my-40 my-7">
        <img src={chair} className="sm:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className=" text-3xl sm:text-5xl font-bold">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link
            to="/appointment"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
