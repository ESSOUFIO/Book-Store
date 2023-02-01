import React, { useEffect } from "react";
import BookDetails from "./BookDetails";
import Booklist from "./Booklist";
import { useDispatch } from "react-redux";
import { getBooks } from "../../Store/bookSlice";

const BookContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
