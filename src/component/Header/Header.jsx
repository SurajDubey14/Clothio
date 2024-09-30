import React from "react";
import style from "../Header/Header.module.css";

import { Link } from "react-router-dom";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
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
                    <Link to="/Men">Home</Link>
                  </li>
                  <li>
                    <Link to="/Women">Collection</Link>
                  </li>
                  <li>
                    <Link to="/listing">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/listing">Track Your Order</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={style.credential}>
              <nav>
                <ul>
                  <li>
                    <Link to="/Men">
                      <IoIosSearch />
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <IoPersonOutline />
                    </Link>
                  </li>
                  <li>
                    <Link to="/listing">
                      <RiShoppingBagLine />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hamburger"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
