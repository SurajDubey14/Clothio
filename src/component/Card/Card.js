import React from "react";
import style from "../Card/Card.module.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card}>
      <img src={props.data.img} alt="" />
      <div className={style.link}>
        {/* Create the link using the category or any unique identifier */}
        <Link to={`/listing/${props.data.link}`} className={style.CardTitle}>
          {props.data.title}
          {console.log(props.data.link)}
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Card;
