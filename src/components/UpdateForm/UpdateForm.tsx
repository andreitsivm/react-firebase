import React, { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { ModalContext } from "../../context/ModalContext";
import { IParams } from "../../interfaces/interface";
import { Button } from "../Button/Button";
import { Layout } from "../Layout/Layout";
import styles from "./UpdateForm.module.scss";

export const UpdateForm = () => {
  const history = useHistory();

  const intitState = { title: "", body: "" };
  const [formData, setFormData] = useState(intitState);
  const { title, body } = formData;

  let { id }: IParams = useParams();
  const modal = useContext(ModalContext);

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  useEffect(() => {
    fetch(
      `https://europe-west1-react-firebase-app-bd713.cloudfunctions.net/api/posts/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((post) => {
        setFormData(post);
      });
  }, []);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  type FormValues = {
    title: string;
    body: string;
  };
  const updatePost: SubmitHandler<FormValues> = () => {
    fetch(
      `https://europe-west1-react-firebase-app-bd713.cloudfunctions.net/api/posts/update/${id}`,
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
        modal.openModal("Congratulations", "The post is updated");
        history.push(`/post/${id}`);
      }
    });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(updatePost)}>
        <div className={styles.form__group}>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleFormChange}
            className={`${styles.form__controll} ${
              errors.title && styles.error
            }`}
            name="title"
            ref={register({
              required: "Post title is required",
              minLength: {
                value: 3,
                message: "Post title shoud be at least 3",
              },
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
            className={`${styles.form__controll} ${
              errors.body && styles.error
            }`}
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
        <div className={styles.manage}>
          <Button>Update Post</Button>
          <NavLink className={styles.link} to={`/post/${id}`}>
            &#10006; Cancel
          </NavLink>
        </div>
      </form>
    </Layout>
  );
};
