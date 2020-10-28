import React from "react";
import styles from "./Vitae.module.scss";

export const Skills = () => {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        <li className={styles.list__item}>HTML, CSS, SCSS</li>
        <li className={styles.list__item}>TypeScript, JavaScript, ES5, ES6,</li>
        <li className={styles.list__item}>React/Redux</li>
        <li className={styles.list__item}>REST API</li>
        <li className={styles.list__item}>NextJS</li>
        <li className={styles.list__item}>Git, npm, yarn</li>
      </ul>
    </div>
  );
};
