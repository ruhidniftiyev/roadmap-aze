import React from "react";
import CardsItem from "../../components/CardItem/CardsItem";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import SideBar from "../../components/SideBar/SideBar";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div id="main">
        <Header />

        {/* <SearchBox/> */}
        <div className="cardsItem">
          <CardsItem />
        </div>
      </div>
      <SideBar />
    </>
  );
};

export default MainPage;
