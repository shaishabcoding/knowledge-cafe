import PropTypes from "prop-types";
import BookMark from "../bookmark/BookMark";
const BookMarks = ({ bookmarks, spentTime }) => {
  return (
    <div className="md:w-1/3 my-4 flex flex-col gap-4">
      <div className="bg-gray-200 rounded-lg p-4 text-xl font-semibold text-blue-600">
        Spent time on read : {spentTime} min
      </div>
      <div className="bg-gray-200 rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">
          Bookmarked Blogs : {bookmarks.length}
        </h2>
        <div className="flex flex-col gap-4">
          {bookmarks.map((bookmark, idx) => (
            <BookMark key={idx} bookmark={bookmark} spentTime={spentTime} />
          ))}
        </div>
      </div>
    </div>
  );
};

BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  spentTime: PropTypes.number.isRequired,
};

export default BookMarks;
