import React from "react";
import img from "../../../assets/images/treatment.png";

const Exceptional = () => {
  return (
    <div>
      <div className="card md:card-side flex  bg-base-100 shadow-xl md:mt-40 mt-20">
        <figure className="px-10 py-10">
          <img src={img} className="md:w-2/3 rounded-lg" alt="Album" />
        </figure>
        <div className="flex flex-col justify-center w-1/2 gap-3 md:mx-10 mx-5">
          <h2 className="md:text-5xl text-3xl">
            Exceptional Dental Care, on Your Terms
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <button className="btn btn-primary w-1/3 ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
