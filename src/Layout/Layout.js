import React from "react";
import Header from "../component/Header/Header";
import Discount from "../component/Discount/Discount";
import Foter from "../component/Foter/Foter";
import style from "../Layout/Layout.module.css";
const Layout = (props) => {
  return (
    <>
      <Discount />
      <Header />
      <div className={style["main-wrp"]}>{props.children}</div>
      <Foter />
    </>
  );
};

export default Layout;
