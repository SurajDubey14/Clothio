import React from "react";
import style from "../Login/Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={style["Login-container"]}>
      <div className={style["container-inr"]}>
        <div className={style.box}>
          <h1>Clothio</h1>

          <div className={style.form}>
            <p>Log in</p>
            <p>Enter your email and we'll send you a login code</p>

            <form action="">
              <p className={style.creadentialData}>Email</p>
              <input type="email" />
              <button type="submit">Continue</button>
            </form>
            <div className={style.privacy}>
              <Link to="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
