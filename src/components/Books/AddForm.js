import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insertBook } from "../../Store/bookSlice";

const InitBook = {
  title: "",
  description: "",
  price: "",
  userName: "",
};

const AddForm = () => {
  const [newBook, setNewBook] = useState(InitBook);
  const { isLoggedIn } = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    setNewBook({
      ...newBook,
      [target.id]: target.value,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const bookID = Math.floor(Math.random() * 100);
    dispatch(insertBook({ ...newBook, id: bookID }));
    setNewBook(InitBook);
  };

  return (
    <div className="AddForm col-6">
      <h3 className="mb-4 text-center">Insert Book</h3>
      <form onSubmit={formSubmit}>
        <div className="my-3 row">
          <label htmlFor="title" className="col-sm-3 col-form-label">
            Title
          </label>
          <div className="col-sm-9">
            <input
              type="text"
              className="form-control"
              id="title"
              value={newBook.title}
              onChange={inputHandler}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="price" className="col-sm-3 col-form-label">
            Price
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="price"
              value={newBook.price}
              onChange={inputHandler}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="description" className="col-sm-3 col-form-label">
            Description
          </label>
          <div className="col-sm-9">
            <textarea
              rows={2}
              className="form-control"
              id="description"
              value={newBook.description}
              onChange={inputHandler}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!isLoggedIn}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
