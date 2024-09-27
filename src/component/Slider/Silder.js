import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "../Slider/Slider.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Silder = () => {
  return (
    <>
      <div className={style.Secitionhead}>
        Our Gallery
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}
      >
        <SwiperSlide>
          <img className={style.swiperimg} src="/slide1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperimg} src="/slide2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperimg} src="/slide3.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={style.swiperimg} src="/slide4.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Silder;
