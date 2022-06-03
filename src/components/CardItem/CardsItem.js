import React from "react";
import { useState } from "react";
import Cards from "../Cards/Cards";
import './CardsItem.css'

const CardsItem = () => {
  const [titles, setTitle] = useState([
                      { title: "FrontEnd", imageUrl: 'https://cdn-icons.flaticon.com/png/512/5202/premium/5202983.png?token=exp=1654250511~hmac=d11e5450672337a59838d052901e54ae'},
    { title: "BackEnd", imageUrl: 'https://cdn-icons-png.flaticon.com/512/1119/1119022.png'},
    { title: "Data Analitika", imageUrl: 'https://cdn-icons-png.flaticon.com/512/1925/1925070.png'},
    { title: "Mobile", imageUrl: 'https://cdn-icons-png.flaticon.com/512/545/545245.png'},
    { title: "GameDev", imageUrl: 'https://cdn-icons-png.flaticon.com/512/13/13973.png'},
    { title: "QA", imageUrl: 'https://cdn-icons-png.flaticon.com/512/554/554200.png' },
    { title: "Sistem Administratoru", imageUrl: 'https://cdn-icons-png.flaticon.com/512/2082/2082800.png' },
    { title: "İnformasiya Təhlükəsizliyi ", imageUrl: 'https://cdn-icons-png.flaticon.com/512/2092/2092629.png' },
    { title: "Cloud Mühəndis", imageUrl: 'https://cdn-icons-png.flaticon.com/512/1793/1793151.png' },
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
