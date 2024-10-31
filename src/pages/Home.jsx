import BlogCard from "../components/BlogCard";

const Home = () => {
  const blogs = [
    { title: "First Blog", content: "This is the first blog content." },
    { title: "Second Blog", content: "This is the second blog content." },
  ];

  return (
    <div className="container mx-auto mt-8">
      {blogs.map((blog, index) => (
        <BlogCard key={index} title={blog.title} content={blog.content} />
      ))}
    </div>
  );
};

export default Home;
