import React from "react";
import style from "../BannerSection/banner.module.css";

const Banner = () => {
  return (
    <>
      <div className={`${style.container} ${style.SD_Banner}`}>
        <div className={style.container_inr}>
          <div className={style.banner}>
              <h1>Redefining elegance, style, and comfort</h1>
              <p> <span className={style.logoSpan}>Clothio</span> embodies elegance and individuality, merging timeless style with modern trends. Our garments prioritize comfort and sophistication, empowering you to embrace your unique fashion journey with confidence.</p>
            {/* <div className={style.banner_right}>
              <img src="/About.png" alt="" height={550}/>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
