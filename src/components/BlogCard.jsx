// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

const BlogCard = ({ id, title, content }) => {
  return (
    <div className="card mb-6 p-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content.substring(0, 100)}...</p>
      <Link to={`/blog/${id}`} className="text-blue-500 hover:underline">
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
