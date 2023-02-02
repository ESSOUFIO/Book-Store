import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../Store/authSlice";

const Header = () => {
  const { error } = useSelector((state) => state.bookState);
  const { isLoggedIn } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
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
            <button
              className="btn btn-success"
              type="button"
              onClick={() => dispatch(logInOut())}
            >
              {isLoggedIn ? "Log Out" : "Log In"}
            </button>
          </form>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
