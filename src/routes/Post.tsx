import React, { useEffect, useState } from "react";
import { Button } from "../components/Button/Button";
import { Layout } from "../components/Layout/Layout";
import { useHistory, useParams } from "react-router-dom";
import { IParams, IPost } from "../interfaces/interface";
import { SinglePost } from "../components/SinglePost/SinglePost";

export const Post: React.FC = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const history = useHistory();
  let { id }: IParams = useParams();
  const updateHandler = () => {
    history.push(`/post/update/${id}`);
  };
  const deleteHandler = () => {
    const confirmed = window.confirm("Do you really want delete the post?");
    if (confirmed) {
      fetch(
        `https://europe-west1-react-firebase-app-bd713.cloudfunctions.net/api/posts/${id}`,
        {
          method: "DELETE",
        }
      ).then(() => {
        history.push("/blog");
      });
    }
  };

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
        console.log(post);
        setPost(post);
      });
  }, []);

  if (post == null) {
    return (
      <Layout>
        <h2>Loading ...</h2>
      </Layout>
    );
  }

  return (
    <Layout>
      <SinglePost
        updateHandler={updateHandler}
        deleteHandler={deleteHandler}
        post={post}
      />
    </Layout>
  );
};
