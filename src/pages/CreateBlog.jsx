import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../context/PostsContext";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addPost } = usePosts();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: JSON.parse(localStorage.getItem("user")).name, // Get the username from localStorage
      date: new Date().toLocaleDateString(), // Get the current date in a readable format
    };
    addPost(newPost);
    navigate("/posts");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6 animate-fade-in">
          Create a New Blog Post
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your blog title"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-40 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your blog content here..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg transform transition duration-300 hover:bg-indigo-700 hover:scale-105"
          >
            Post Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
