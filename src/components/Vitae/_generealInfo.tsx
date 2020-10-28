import React from "react";
import styles from "./Vitae.module.scss";

export const GenerealInfo = () => {
  return (
    <div className={styles.content}>
      <div>
        <span className={styles.info__key}>Name:</span> Mykhailo Andreitsiv
      </div>
      <div>
        <span className={styles.info__key}>Phone: </span> +38 (068) 339 44 59
      </div>
      <div>
        <span className={styles.info__key}>Email:</span>{" "}
        andreitsiv.mykhailo@gmail.com{" "}
      </div>

      <div>
        <span className={styles.info__key}>Skype:</span> riguer_94
      </div>
      <div>
        <span className={styles.info__key}>Social networks: </span>
        <a href="http://www.linkedin.com/in/andreitsivm" target="_blank">
          Linkedin
        </a>
      </div>
    </div>
  );
};
