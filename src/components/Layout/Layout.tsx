import React from "react";
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import styles from "./Layout.module.scss";

interface IProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <Header />
      </div>
      <main className={styles.content}>
        <Container>{children}</Container>
      </main>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
