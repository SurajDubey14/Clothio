import React from "react";
import Layout from "../../Layout/Layout";
import Slider from "../../component/Slider/Silder";
import Banner from "../../component/BannerSection/Banner";
import Category from "../../component/Category/Category";


const Home = () => {
  return (
  
      <Layout>
        <Banner />
        <Slider />
        <Category />
      </Layout>
   
  );
};

export default Home;
