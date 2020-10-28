import React, { useEffect, useState } from "react";
import { Card } from "../components/Card/Card";
import { Layout } from "../components/Layout/Layout";

interface IPost {
  title: string;
  body: string;
  _id: number;
  userId: number;
}

const Blog = () => {
  const [posts, setPosts] = useState<Array<IPost>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://europe-west1-react-firebase-app-bd713.cloudfunctions.net/api/posts"
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.reverse());
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout>
        <h1>Loading...</h1>
      </Layout>
    );
  }

  if (posts.length === 0) {
    return (
      <Layout>
        <h1>There are no posts...</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      {posts.map((post: IPost) => (
        <div key={post._id}>
          <Card title={post.title} body={post.body} id={post._id} />
        </div>
      ))}
    </Layout>
  );
};
export default Blog;
