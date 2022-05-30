import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import './CardsItem.css'

const CardsItem = () => {
  const [titles, setTitle] = useState([
    { title: "FrontEnd", imageUrl: 'https://static.thenounproject.com/png/1442732-200.png'},
    { title: "BackEnd", imageUrl: 'https://www.pinclipart.com/picdir/big/102-1020519_cloud-server-clipart-transparent-server-png-download.png' },
    { title: "QA", imageUrl: 'https://cdn3.iconfinder.com/data/icons/web-mobile-development/709/virus_bug_testing_qa_search_dev-512.png' },
    { title: "Data Analitika", imageUrl: 'https://cdn3.iconfinder.com/data/icons/web-mobile-development/709/virus_bug_testing_qa_search_dev-512.png' },
    { title: "Mobile", imageUrl: 'https://cdn3.iconfinder.com/data/icons/web-mobile-development/709/virus_bug_testing_qa_search_dev-512.png' },
    { title: "Sistem Administratoru", imageUrl: 'https://cdn3.iconfinder.com/data/icons/web-mobile-development/709/virus_bug_testing_qa_search_dev-512.png' },
    { title: "Game", imageUrl: 'https://cdn3.iconfinder.com/data/icons/web-mobile-development/709/virus_bug_testing_qa_search_dev-512.png' },
    { title: "QA", imageUrl: 'https://cdn3.iconfinder.com/data/icons/web-mobile-development/709/virus_bug_testing_qa_search_dev-512.png' },
  ]);

  return (
    <ul className="card">
      {titles.map((title) => (
        <li className="cards__item">
          <Cards {...title} />
        </li>
      ))}
    </ul>
  );
};

export default CardsItem;
