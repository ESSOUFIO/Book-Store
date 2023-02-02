import React from "react";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { bookInfo } = useSelector((state) => state.bookState);

  return (
    <div className="BookDetails">
      <h4 className="mb-3">Book Details</h4>
      {!bookInfo ? (
        <div className="alert alert-secondary" role="alert">
          There is no book selected yet, please select!
        </div>
      ) : (
        <ul>
          <li>
            ID: <b>{bookInfo.id}</b>
          </li>
          <li>
            Title: <b>{bookInfo.title}</b>
          </li>
          <li>
            Description: <b>{bookInfo.description}</b>
          </li>
          <li>
            Price: <b>{bookInfo.price}</b>
          </li>
          <li>
            Username: <b>{bookInfo.userName}</b>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BookDetails;
