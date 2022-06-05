import React from "react";
import CardsItem from "../../components/CardItem/CardsItem";
import Header from "../../components/Header/Header";
import "./MainPage.css";
import App1 from "./App1.js";

const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <div className="cardsItem">
        <CardsItem />
      </div>
      <div className="Trees">
        <App1 />
      </div>
    </div>
  );
};

export default MainPage;
