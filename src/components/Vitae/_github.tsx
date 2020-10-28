import React from "react";

export const Github = () => {
  return (
    <div>
      <h3>1. Project name: Simple Blog+CV</h3>
      <a href="https://github.com/andreitsivm/react-portfolio" target="_blank">
        GitHub
      </a>
      <p>
        <span style={{ fontWeight: "bold" }}>Description:</span> MVP Blog
        created with React. Can create new posts, update and delete existing
        posts. Design is very simple but all functionality is working.
      </p>
      <h3>
        2. Project name:{" "}
        <a href="https://andreitsivm.github.io/deploy/" target="_blank">
          Test task
        </a>
      </h3>
      <p>
        <a
          href="https://github.com/andreitsivm/deploy/tree/master"
          target="_blank"
        >
          GitHub
        </a>
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Description:</span> The web
        application is made according to the layout, pixel perfect, using the
        create-react-app, redux, scss. Adaptive to different devices,working
        form validation, fetching new users.
      </p>
    </div>
  );
};
