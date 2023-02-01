import React from "react";

const BookItem = () => {
  return (
    <div className="list-group-item d-flex justify-content-between">
      <p className="my-1 fw-semibold">An Item</p>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">
          Read
        </button>
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
