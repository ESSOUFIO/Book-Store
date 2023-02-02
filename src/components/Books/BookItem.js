import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook, getBookInfo } from "../../Store/bookSlice";
import { useSelector } from "react-redux";

const BookItem = ({ book }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.authState);

  return (
    <div className="list-group-item d-flex justify-content-between">
      <p className="my-1 fw-semibold">{book.title}</p>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(getBookInfo(book.id))}
        >
          Read
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteBook(book.id))}
          disabled={!isLoggedIn}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
