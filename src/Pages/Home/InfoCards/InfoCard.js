import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card md:card-side text-white px-6   shadow-xl ${bgClass}`}>
      <figure className="mt-3 md:mt-0">
        <img src={icon} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
