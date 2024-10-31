import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { PostsProvider } from "./context/PostsContext";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
import Posts from "./pages/Posts";
import BlogDetail from "./pages/BlogDetail";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-blog" element={<CreateBlog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </PostsProvider>
    </AuthProvider>
  );
}

export default App;
