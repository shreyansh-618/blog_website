import React, { createContext, useContext, useState, useEffect } from "react";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage when the component mounts
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  const addPost = (post) => {
    const updatedPosts = [...posts, post];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, deletePost }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  return useContext(PostsContext);
};
