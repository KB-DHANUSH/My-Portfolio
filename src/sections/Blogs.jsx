// src/sections/Blogs.jsx
import { blogs } from "../constants/index";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <section className="c-space section-spacing cursor-none relative z-10" id="blogs">
      <h2 className="text-heading">My Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}

        {/* Extra 6th card for "Read Others" */}
        <BlogCard
          key="read-others"
          title="Read Others"
          description="Check out all my stories on Medium."
          date=""
          link="https://medium.com/@kbdhanush1528"
        />
      </div>
    </section>
  );
};

export default Blogs;
