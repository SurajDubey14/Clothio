import React from "react";
import style from "./Footer.module.css";
import { FaMobileAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const footer = () => {
  return (
    <>
      <div className={`${style.container} ${style.footer}`}>
        <div className={style.container_inr}>
          <footer className="">
            <section className={style.footer_link}>
              {/* First */}
              <div className={style.col}>
                <p className={style.col_head}>Company</p>
                <ul>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Careers</a>
                  </li>
                  <li>
                    <a href="">Comunity Intiatives</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* Second*/}
              <div className={style.col}>
                <p className={style.col_head}>Help & Support</p>
                <ul>
                  <li>
                    <a href="">Customer Services</a>
                  </li>
                  <li>
                    <a href="">Order Status</a>
                  </li>
                  <li>
                    <a href="">Shipping</a>
                  </li>
                  <li>
                    <a href="">Returns</a>
                  </li>
                  <li>
                    <a href="">Privacy</a>
                  </li>
                </ul>
              </div>
              {/* Third */}
              <div className={style.col}>
                <p className={style.col_head}>Store Near Me</p>
                <ul>
                  <li>
                    <a href="">Noida</a>
                  </li>
                  <li>
                    <a href="">Greater Noida</a>
                  </li>
                  <li>
                    <a href="">Delhi</a>
                  </li>
                  <li>
                    <a href="">Gurugram</a>
                  </li>
                  <li>
                    <a href="">Gorakhpur</a>
                  </li>
                </ul>
              </div>
              <div className={style.col}>
                <p className={style.col_head}>Customer Support</p>
                <ul>
                  <li>
                    <a href="">Timming : 10 AM- 7 PM (SUN- MON)</a>
                  </li>
                  <li>
                    <a href=""> Whatsapp : +91-9310745399</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/surajpandat_01/"
                    target="_blank">Instagram : @surajpandat_01</a>
                  </li>
                </ul>
              </div>
            </section>
            <div className={style.download_store}>
              <div className={style.download_content}>
                <FaMobileAlt />
                <div className={style.download_head}>
                  <p>experience the souled store app</p>
                </div>
              </div>
              <div className={style.download_Image}>
                <img src="/play-store.avif" alt="" />
                <img src="/app-store.avif" alt="" />
              </div>
            </div>
            <div className={style.footer_media}>
              <div className={style.media}>
                <div className={style.follow}>follow us : </div>
                <div className={style.Socialmedia_links}>
                  <a
                    href="https://www.linkedin.com/in/suraj-dubey-b83b15237/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bg3ALG04jQwCGj2AjLSfhYw%3D%3D"
                    target="_blank"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a href="https://github.com/SurajDubey14" target="_blank">
                    <TbBrandGithubFilled />
                  </a>
                  <a
                    href="https://www.instagram.com/surajpandat_01/"
                    target="_blank"
                  >
                    <RiInstagramFill />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100011569590964"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </div>
              </div>
              <div className={style.copyright}>&copy; Clothio STORE 2024-2025</div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default footer;
