import React from "react";
import style from "../Header/Header.module.css";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.container_inr}>
          <div className={style.header}>
            <div className={style.logo}>
              <Link to="/">
                <p>Clothio</p>
              </Link>
            </div>
            <div className={style.menu}>
              <nav>
                <ul>
                  <li>
                    <Link to="/Men">Men</Link>
                    {/* <a href="">Men</a> */}
                  </li>
                  <li>
                  <Link to="/Women">Women</Link>
                    {/* <a href="">Women</a> */}
                  </li>
                  <li>
                  <Link to="/listing">Listing</Link>
                    {/* <a href="">Children</a> */}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
