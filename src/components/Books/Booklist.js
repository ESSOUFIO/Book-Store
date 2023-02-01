import React from "react";
import { useSelector } from "react-redux";
import BookItem from "./BookItem";

const Booklist = () => {
  const { isLoading, books } = useSelector((state) => state.bookState);

  const bookList =
    books.length > 0
      ? books.map((book) => <BookItem key={book.id} book={book} />)
      : "There is no books available..";

  return (
    <div className="Booklist">
      <h4 className="mb-3">Booklist</h4>
      {isLoading ? "Loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default Booklist;
