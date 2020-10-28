import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.scss";

interface IProps {
  id: number;
  title: string;
  body: string;
  subtitle?: string;
}

export const Card: React.FC<IProps> = ({ title, body, subtitle, id }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <h2>{title}</h2>
      </div>
      {subtitle && (
        <div className={styles.card__subtitle}>
          <span>{subtitle}</span>
        </div>
      )}
      <div className={styles.card__body}>
        <>{body}</>
      </div>
      <NavLink className={styles.card__link} to={`/post/${id}`}>
        <h4>Read post</h4>
      </NavLink>
    </div>
  );
};
