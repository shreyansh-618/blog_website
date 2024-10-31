import React from "react";
import { usePosts } from "../context/PostsContext";
import { Link } from "react-router-dom";

const Posts = () => {
  const { posts } = usePosts();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4">All Blogs</h2>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <div className="flex flex-wrap -mx-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 h-full flex flex-col">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 line-clamp-3">{post.content}</p>{" "}
                {/* Truncate after 3 lines */}
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 hover:underline mt-auto"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
