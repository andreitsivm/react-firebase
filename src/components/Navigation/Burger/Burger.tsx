import React, { useState } from "react";
import styles from "./Burger.module.scss";
import { FaBars, FaDivide, FaTimes } from "react-icons/fa";
import { DropDownMenu } from "../../DropDownMenu/DropDownMenu";

export const Burger = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className={`${styles.menu__container}`}>
      <div className={styles.burger__menu}>
        {!open ? (
          <FaBars onClick={toggleMenu} className={styles.icon} />
        ) : (
          <DropDownMenu onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
};
