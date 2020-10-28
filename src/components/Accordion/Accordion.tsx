import React, { useState } from "react";
import { Chevron } from "./Chevron";
import styles from "./Accordion.module.scss";
import classNames from "classnames";

interface AccoridonProps {
  title: string;
  children?: React.ReactNode;
  content?: string;
}

export const Accordion: React.FC<AccoridonProps> = ({
  title,
  content,
  children,
}) => {
  const [open, setOpen] = useState(true);

  const toggleHandler = () => {
    setOpen(!open);
  };

  const classes = classNames(styles.accordion, open && styles.open);

  return (
    <div className={classes}>
      <div className={styles.accordion__title} onClick={toggleHandler}>
        <span>{title}</span>
        <Chevron
          className={styles.chevron}
          width="30px"
          height="20px"
          fill="#fff"
        />
      </div>
      <div className={styles.accordion__content}>
        {content && content} {children && children}
      </div>
    </div>
  );
};
