import React from "react";
import styles from "./Vitae.module.scss";

export const Education = () => {
  return (
    <div className={styles.content}>
      <div>
        <span className={styles.info__key}>University: </span>Lviv Polytechnic
        National University (Lviv, Ukraine)
      </div>
      <div>
        <span className={styles.info__key}>Specialization: </span>Master degree
        in Food Technology, Brewing and wine making
      </div>
      <div>
        <span className={styles.info__key}>Grade: </span>High grade
      </div>
    </div>
  );
};
