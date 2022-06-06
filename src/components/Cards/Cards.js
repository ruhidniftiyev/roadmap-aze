import React from "react";
import "../Cards/Cards.css";

const Cards = (props) => {
  const { title, imageUrl } = props;

  return (
    <div className="cards">
      <div className="card__image">
        <img src={imageUrl} alt="" />
      </div>
      <p className="card__title">{title}</p>
      
    </div>
  );
};

export default Cards;
