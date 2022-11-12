import React from "react";
import chair from "../../../assets/images/chair.png";
import img from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="">
      <div
        className="hero py-20 sm:py-60"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="sm:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="sm:mr-6 w-full flex justify-center">
            <></>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
