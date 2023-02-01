import React from "react";

const AddForm = () => {
  return (
    <div className="AddForm col-6">
      <h3 className="mb-4 text-center">Insert Book</h3>

      <div className="my-3 row">
        <label htmlFor="title" className="col-sm-3 col-form-label">
          Title
        </label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="title" />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="price" className="col-sm-3 col-form-label">
          Price
        </label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="price" />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="description" className="col-sm-3 col-form-label">
          Description
        </label>
        <div className="col-sm-9">
          <textarea rows={2} className="form-control" id="description" />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default AddForm;
