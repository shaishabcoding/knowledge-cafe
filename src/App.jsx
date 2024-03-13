import { useState } from "react";
import Blogs from "./components/blogs/Blogs";
import BookMarks from "./components/bookmarks/BookMarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [spentTime, setSpentTime] = useState(0);

  const handleAddToBookmark = (blog) => () => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleSpentTime = (min) => () => {
    setSpentTime(spentTime + min);
  };

  return (
    <>
      <Header />
      <main className="md:flex max-w-5xl md:mx-auto mx-4 gap-8">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleSpentTime={handleSpentTime}
        />
        <BookMarks bookmarks={bookmarks} spentTime={spentTime} />
      </main>
    </>
  );
}

export default App;
