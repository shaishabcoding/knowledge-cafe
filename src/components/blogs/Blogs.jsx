import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleSpentTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3 my-4">
      <div className="flex flex-col md:gap-16 gap-10">
        {blogs.map((blog) => (
          <Blog
            handleAddToBookmark={handleAddToBookmark}
            key={blog.id}
            blog={blog}
            handleSpentTime={handleSpentTime}
          />
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func.isRequired,
  handleSpentTime: PropTypes.number.isRequired,
};

export default Blogs;
