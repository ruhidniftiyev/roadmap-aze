import React from "react";
import CardsItem from "../../components/CardItem/CardsItem";
import Header from "../../components/Header/Header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="cardsItem">
        <CardsItem />
      </div>
    </div>
  );
};

export default MainPage;
