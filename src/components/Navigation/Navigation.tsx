import React from "react";
import { NavLink } from "react-router-dom";
import { Burger } from "./Burger/Burger";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav>
      <Burger />
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
    </nav>
  );
};
