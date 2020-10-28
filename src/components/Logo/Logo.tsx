import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Logo.module.scss";
import { FaMountain } from "react-icons/fa";

export const Logo = () => {
  return (
    <NavLink to="/" className={styles.link}>
      <div className={styles.logo}>
        <FaMountain className={styles.logo_icon} />
        <div className={styles.logo_text}>developer</div>
      </div>
    </NavLink>
  );
};
