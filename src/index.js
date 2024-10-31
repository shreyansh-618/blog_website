import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { PostsProvider } from "./context/PostsContext"; // Import PostsProvider
import "./styles/main.css";

ReactDOM.render(
  <AuthProvider>
    <PostsProvider>
      <App />
    </PostsProvider>
  </AuthProvider>,
  document.getElementById("root")
);
