import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { usePosts } from "../context/PostsContext"; // Import the Posts context

const BlogDetail = () => {
  const { id } = useParams();
  const { posts } = usePosts(); // Use the posts from context
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Find the blog post by ID
    const foundBlog = posts.find((post) => post.id === parseInt(id));
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [id, posts]);

  if (!blog) return <p className="text-center mt-8">Loading...</p>;

  return (
    <div className="container mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-600 mb-2">
        By {blog.author} on {blog.date}
      </p>
      {blog.image && (
        <img
          src={blog.image}
          alt="Blog Post"
          className="w-full h-auto max-h-80 object-cover rounded-lg mb-4"
        />
      )}
      <p className="text-gray-800 mt-4">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
