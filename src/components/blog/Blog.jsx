import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleSpentTime }) => {
  const {
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div>
      <img
        className="md:mb-8 mb-4 rounded-md"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center md:gap-4 gap-2">
          <span>{reading_time} min read</span>
          <button
            className="text-red-600 hover:text-red-400"
            onClick={handleAddToBookmark(blog)}
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-4 md:mt-8 md:mb-2">{title}</h2>
      <p className="flex flex-row gap-2">
        {hashtags.map((hashtag, idx) => (
          <span key={idx}>
            <a href="">#{hashtag}</a>
          </span>
        ))}
      </p>
      <p>
        <button
          className="mt-4 text-blue-500 underline"
          onClick={handleSpentTime(reading_time)}
        >
          Mark as read
        </button>
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleSpentTime: PropTypes.number.isRequired,
};

export default Blog;
