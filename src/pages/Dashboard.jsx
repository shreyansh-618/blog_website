import React from "react";
import { usePosts } from "../context/PostsContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { posts, deletePost } = usePosts();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      {/* Create Blog Button */}
      <Link
        to="/create-blog"
        className="bg-indigo-600 text-white px-4 py-2 rounded-md mb-4 inline-block hover:bg-indigo-700"
      >
        Create Blog
      </Link>

      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="mt-2">
                {post.content.length > 100
                  ? `${post.content.substring(0, 100)}...`
                  : post.content}
              </p>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
              <button
                onClick={() => deletePost(post.id)}
                className="text-red-500 hover:underline mt-2 ml-4"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
