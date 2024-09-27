import React from "react";
import style from "../Category/Category.module.css";
import Card from "../Card/Card";
// import NavigateButton from './NavigateButton';
// import { useNavigate } from 'react-router-dom';
// const NavigateButton = () => {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/'); // Navigate to the About page

const CardData = [
  {
    id: "1",
    title: "Shoes",
    img: "Shoes.jpg",
    link: "shoes",
  },
  {
    id: "2",
    title: "jeans",
    img: "j1.jpg",
    link: "jeans",
  },
  {
    id: "3",
    title: "tshirt",
    img: "tshirt.jpg",
    link: "tshirt",
  },
];
//   };
const Category = () => {
  return (
    <>
      <div className={style.Category}>
        <div className={style.text}>Category :</div>
        {CardData.map((value, index) => {
          return <Card key={index} data={value} />;
        })}
      </div>
    </>
  );
};

export default Category;

