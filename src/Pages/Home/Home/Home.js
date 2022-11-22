import React from "react";
import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Exceptional from "../Exceptional/Exceptional";
import InfoCards from "../InfoCards/InfoCards";
import MakeAppointment from "../MakeAppointment/MakeAppointment";
import Services from "../Services/Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  useTitle("Home");
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Exceptional></Exceptional>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
