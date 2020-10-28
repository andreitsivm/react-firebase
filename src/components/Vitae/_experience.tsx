import React from "react";
import styles from "./Vitae.module.scss";

export const Experience = () => {
  return (
    <div className={styles.content}>
      <span className={styles.info__key}>Position:</span> Main brewer
      <div>
        <span className={styles.info__key}>Company:</span> Guild live beer LTD,{" "}
        <a href="http://www.pivnoygnom.com.ua" target="_blank">
          "Pivnoy Gnom brewery"
        </a>
      </div>
      <div>
        <span className={styles.info__key}> Work period:</span> 2015 - 2020
      </div>
      <div>
        <span className={styles.info__key}>
          Responsibilities and achievements:
        </span>{" "}
        I was engaged in the full cycle of production and fermentation of beer,
        quality control of materials and products. Carried out personnel
        management, ordering materials, developing beverage recipes.I did my job
        well and responsibly.
      </div>
    </div>
  );
};
