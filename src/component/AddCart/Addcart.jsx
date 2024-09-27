import React from "react";
import style from "../AddCart/addCart.module.css";
const Addcart = (props) => {
  return (
    <>
      <div className={style.cartContainer}>
        <div className={style["container-inr"]}>
          <div className={style.img}>
            <img src={props.src} alt="" />
            <div className={style.link}>
              <a target="_blank" href="#" className={style.CartCardTitle}>
                {props.Carttitle}
              </a>
            </div>
          </div>
          <div className={style.cardTitle}>
            <p className={style.title}>{props.title}</p>
          </div>
          <div className={style.price}>
            <p className={style.offprice}>&#8377;{props.price}</p>
            <p className={style.Orgprice}>&#8377;{props.org}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcart;
