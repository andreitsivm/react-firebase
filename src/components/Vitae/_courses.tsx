import React from "react";
import styles from "./Vitae.module.scss";

export const Courses = () => {
  return (
    <div>
      <div className={styles.content}>
        <span className={styles.info__key}></span>{" "}
        <a
          href="https://www.youtube.com/playlist?list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8"
          target="_blank"
        >
          {" "}
          <h2>Reactjs — samurai way (free course)</h2>
        </a>
        Passed basical free reactjs course on Yotube by IT-incubator.by React,
        components lifecycle Redux(reducers, action,state,dispatch) local state
        hook(useState, useEffect function and class components,HOC side effects
        (fetch)
      </div>
      <div className={styles.content}>
        <div>
          <span className={styles.info__key}></span>{" "}
          <a
            href="https://www.udemy.com/course/react-2020-complete-guide/"
            target="_blank"
          >
            {" "}
            <h2>React JS. Практический Курс 2020 (вкл. Хуки, Классы, Redux)</h2>
          </a>
          <div> </div>
          Udemy React.js course. Everything that need to know about
          React.Studied from scratch to create applications on the most popular
          Frontend technology!
        </div>
      </div>
    </div>
  );
};
