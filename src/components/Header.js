import React, { Fragment } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { error } = useSelector((state) => state.bookState);
  console.log("error: ", error);
  return (
    <Fragment>
      {error ? (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      ) : null}
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            Navbar
          </a>
          <form className="d-flex" role="search">
            <button className="btn btn-success" type="submit">
              Log In
            </button>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
