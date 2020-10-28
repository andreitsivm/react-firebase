import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./DropDownMenu.module.scss";
import { Logo } from "../Logo/Logo";
import { NavLink } from "react-router-dom";

interface Props {
  onClick: () => void;
}

export const DropDownMenu: React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.drop__container}>
      <div className={styles.header}>
        <Logo />
        <FaTimes onClick={onClick} className={styles.icon} />
      </div>
      <div className={styles.menu}>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          exact
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink
          className={styles.link}
          activeClassName={styles.active}
          to="/add"
        >
          New Post
        </NavLink>
      </div>
    </div>
  );
};
