import React from "react";
import Header from "../component/Header/Header";
import Discount from "../component/Discount/Discount";
import Footer from "../component/Footer/Footer";
import style from "../Layout/Layout.module.css";
const Layout = (props) => {
  return (
    <>
      <Discount />
      <Header />
      <div className={style["main-wrp"]}>{props.children}</div>
      <Footer />
    </>
  );
};

export default Layout;
