import React from "react";
import { NavLink } from "react-router-dom";
import { IPost } from "../../interfaces/interface";
import { Button } from "../Button/Button";
import styles from "./SinglePost.module.scss";

interface IProps {
  updateHandler: () => void;
  deleteHandler: () => void;
  post: IPost;
}

export const SinglePost: React.FC<IProps> = ({
  updateHandler,
  deleteHandler,
  post,
}) => {
  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{post!.title}</h1>
      <p className={styles.body}>{post!.body}</p>
      <Button onClick={updateHandler}>Update Post</Button>
      <Button onClick={deleteHandler}>Delete Post</Button>
      <NavLink to="/blog">&#8592; Follow Back</NavLink>
    </div>
  );
};
