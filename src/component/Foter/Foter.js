import React from "react";

import style from "../Foter/Foter.module.css";
import { RiCheckDoubleFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
const Foter = () => {
  return (
    <>
      <div className={style.footer}>
        <div className={style.container}>
          <div className={style.topfooter}>
            <div className={style.hashtag}>#JoinClothioLife</div>
            <div className={style.quote}>
              Play it our way. Unleash your style with Clothio’s vibrant fashion
            </div>
            <p className={style.quotepara}>
              A lifestyle for the bold and dynamic. For the trendsetters and
              trailblazers. Clothio moves with you, ready to seize every
              opportunity.
            </p>
            <div className={style.dataForm}>
              <form action="">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your email"
                />
                <button type="submit">
                  <RiCheckDoubleFill />
                </button>
              </form>
            </div>
          </div>

          <p className={style.line}></p>
          <div className={style.bottomfooter}></div>
          <div className={style.footerlink}>
            <div className={style.col1}>
              <p className={style.col_head}>Customer Support</p>
              <ul>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Children</a>
                </li>
              </ul>
            </div>
            <div className={style.col2}>
              <p className={style.col_head}>Customer Support</p>
              <ul>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Children</a>
                </li>
              </ul>
            </div>
            <div className={style.col3}>
              <p className={style.col_head}>Customer Support</p>
              <ul>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Children</a>
                </li>
              </ul>
            </div>
            <div className={style.col4}>
              <p className={style.col_head}>Customer Support</p>
              <ul>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Children</a>
                </li>
              </ul>
            </div>
            <div className={style.col5}>
              <p className={style.col_head}>Customer Support</p>
              <ul>
                <li>
                  <a href="#">Men</a>
                </li>
                <li>
                  <a href="#">Women</a>
                </li>
                <li>
                  <a href="#">Children</a>
                </li>
              </ul>
            </div>
          </div>
          <p className={style.line}></p>
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
            <div className={style.copyright}>
              &copy; Clothio STORE 2024-2025
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foter;
