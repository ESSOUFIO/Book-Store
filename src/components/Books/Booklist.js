import React from "react";
import BookItem from "./BookItem";

const Booklist = () => {
  return (
    <div className="Booklist">
      <h4 className="mb-3">Booklist</h4>
      <ul className="list-group">
        <BookItem />
        <BookItem />
        <BookItem />
      </ul>
    </div>
  );
};

export default Booklist;
