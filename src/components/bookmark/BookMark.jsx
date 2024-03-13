import PropTypes from "prop-types";

const BookMark = ({ bookmark }) => {
  return (
    <h3 className="text-lg bg-gray-50 p-4 rounded-lg">{bookmark.title}</h3>
  );
};

BookMark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default BookMark;
