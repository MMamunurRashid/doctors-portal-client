import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../../hooks/useTitle";

const MyAppointment = () => {
  useTitle("My Appointment");
  const { user } = useContext(AuthContext);

  const url = `https://doctors-portal-server-five.vercel.app/bookings?email=${user.email}`;
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="">
      <h1 className="text-3xl mb-3"> My Appointments</h1>
      <table className="table sm:w-full table-zebra">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Treatment</th>
            <th>Date</th>
            <th>Time</th>
            <th>Fees</th>
            <th>payment</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, idx) => (
            <tr key={booking._id}>
              <th>{idx + 1}</th>
              <td>{booking.patient}</td>
              <td>{booking.treatment}</td>
              <td>{booking.appointmentDate}</td>
              <td>{booking.slot}</td>
              <td>{booking.price}</td>
              <td>
                {booking.price && !booking.paid && (
                  <Link
                    to={`/dashboard/payment/${booking._id}`}
                    className="btn btn-primary btn-sm"
                  >
                    Pay
                  </Link>
                )}
                {booking.price && booking.paid && (
                  <button className="btn  text-white btn-sm btn-disabled">
                    Paid
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppointment;
