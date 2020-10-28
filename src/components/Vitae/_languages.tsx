import React from "react";
import styles from "./Vitae.module.scss";

export const Languages = () => {
  return (
    <div className={styles.content}>
      <div>
        <span className={styles.info__key}>English</span> - intermediate
      </div>
      <div>
        <span className={styles.info__key}>Russian</span> - fluent{" "}
      </div>
      <div>
        <span className={styles.info__key}>Ukrainian</span> - native
      </div>
    </div>
  );
};
