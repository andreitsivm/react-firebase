import React from "react";
import styles from "./Footer.module.scss";
import { FaYoutube, FaReact, FaFacebook, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.media}>
        <a className={styles.media_icons} href="#">
          <FaYoutube className={styles.icon} title="YouTube" />
        </a>
        <a className={styles.media_icons} href="#">
          <FaReact className={styles.icon} title="React" />
        </a>
        <a className={styles.media_icons} href="#">
          <FaFacebook className={styles.icon} title="Facebook" />
        </a>
        <a className={styles.media_icons} href="#">
          <FaLinkedin className={styles.icon} title="Linkedin" />
        </a>
      </div>
      &#174; By Andreitsiv Mykhailo 2020
    </footer>
  );
};
