import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";
import { Button } from "../Button/Button";
import { SubmitHandler, useForm } from "react-hook-form";

import styles from "./AddForm.module.scss";

export const AddForm = () => {
  const intitState = { title: "", body: "" };
  const [formData, setFormData] = useState(intitState);
  const { title, body } = formData;

  const history = useHistory();
  const modal = useContext(ModalContext);

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  type FormValues = {
    title: string;
    body: string;
  };
  const sendPost: SubmitHandler<FormValues> = () => {
    fetch(
      "https://europe-west1-react-firebase-app-bd713.cloudfunctions.net/api/posts/add",
      {
        method: "POST",
        body: JSON.stringify({
          title,
          body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    ).then((response) => {
      if (response.ok) {
        modal.openModal("Congratulation", response.statusText);
      }
      setFormData(intitState);
      history.push("/blog");
    });
  };

  return (
    <form onSubmit={handleSubmit(sendPost)}>
      <div className={styles.form__group}>
        <label htmlFor="title">Title</label>
        <input
          onChange={handleFormChange}
          className={`${styles.form__controll} ${errors.title && styles.error}`}
          name="title"
          ref={register({
            required: "Post title is required",
            minLength: { value: 3, message: "Post title shoud be at least 3" },
            maxLength: {
              value: 100,
              message: "Post title should be at most 100 characters",
            },
          })}
          type="text"
          id="title"
          placeholder="Post title"
          value={title}
        />
        <span className={styles.error__message}>
          {errors.title && errors.title.message}
        </span>
      </div>
      <div className={styles.form__group}>
        <label htmlFor="body">Awesome post</label>
        <textarea
          className={`${styles.form__controll} ${errors.body && styles.error}`}
          onChange={handleFormChange}
          rows={15}
          ref={register({
            required: "Post is required",
            minLength: {
              value: 10,
              message: "Post title shoud be at least 10",
            },
          })}
          name="body"
          value={body}
          id="body"
          placeholder="Tell your story..."
        />
        <span className={styles.error__message}>
          {errors.body && errors.body.message}
        </span>
      </div>
      <Button>Create Post</Button>
    </form>
  );
};
