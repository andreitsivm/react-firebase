import styles from "./Button.module.scss";
import React from "react";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ onClick, children }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};
