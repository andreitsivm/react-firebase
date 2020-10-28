import React from "react";
import { Accordion } from "../Accordion/Accordion";
import { GenerealInfo } from "./_generealInfo";
import { Motivation } from "./_motivation";
import { Github } from "./_github";
import { Skills } from "./_skills";
import { Experience } from "./_experience";
import { Education } from "./_education";
import { Courses } from "./_courses";
import { Languages } from "./_languages";
import { Certificates } from "./_certificates";
import photo from "../../static/images/photo.jpg";
import styles from "./Vitae.module.scss";

export const Vitae = () => {
  return (
    <div className={styles.box}>
      <div className="photo">
        <img src={photo} alt="Photo" title="Mykhailo Andreitsiv" />
      </div>
      <div className="accordions">
        <Accordion title="General Info">
          <GenerealInfo />
        </Accordion>

        <Accordion title="Motivation">
          <Motivation />
        </Accordion>

        <Accordion title="Education">
          <Education />
        </Accordion>

        <Accordion title="Work experience">
          <Experience />
        </Accordion>

        <Accordion title="Primary skill and technologies ">
          <Skills />
        </Accordion>

        <Accordion title="Courses and trainings">
          <Courses />
        </Accordion>

        <Accordion title="Github">
          <Github />
        </Accordion>

        <Accordion title="Certificates">
          <Certificates />
        </Accordion>

        <Accordion title="Languages">
          <Languages />
        </Accordion>
      </div>
    </div>
  );
};
