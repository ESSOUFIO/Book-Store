import React from "react";
import BookDetails from "./BookDetails";
import Booklist from "./Booklist";

const BookContainer = () => {
  return (
    <div className="BookContainer py-3 mb-3">
      <div className="row">
        <div className="col">
          <Booklist />
        </div>

        <div className="col">
          <BookDetails />
        </div>
      </div>
    </div>
  );
};

export default BookContainer;
