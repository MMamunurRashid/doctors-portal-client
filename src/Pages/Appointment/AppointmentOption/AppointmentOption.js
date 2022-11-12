import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;
  return (
    <div className="card shadow-xl ">
      <div className="card-body text-center">
        <h2 className=" text-primary text-xl md:text-2xl font-bold">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "TRY ANOTHER DAY"}</p>
        <p className="font-semibold">
          {slots.length > 0 ? slots.length : "NO "}{" "}
          {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </p>
        <div className="card-actions justify-center">
          <label
            disabled={slots.length === 0}
            onClick={() => setTreatment(appointmentOption)}
            htmlFor="booking-modal"
            className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
