import React from "react";
import { Switch, Route } from "react-router-dom";
import { UpdateForm } from "./components/UpdateForm/UpdateForm";
import { AddPost } from "./routes/AddPost";
import Blog from "./routes/Blog";
import { Home } from "./routes/Home";
import { Post } from "./routes/Post";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/add" component={AddPost} />
      <Route path="/post/:id" exact component={Post} />
      <Route path="/post/update/:id" exact component={UpdateForm} />
    </Switch>
  );
};
