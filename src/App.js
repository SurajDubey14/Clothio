import Header from "./component/Header/Header";
import Banner from "./component/BannerSection/Banner";
// import Footer from "./component/Footer/Footer";
import Category from "./component/Category/Category";
import { motion, useScroll } from "framer-motion";
import style from "../src/App.module.css";
import Slider from "./component/Slider/Silder";
import Discount from "./component/Discount/Discount";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import AppRoutes from "./routes";
// import Jeans from "./component/listing/Jeans";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
    <AppRoutes/>
    </>
  );
}

export default App;
