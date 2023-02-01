import React from "react";

const Header = () => {
  return (
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
  );
};

export default Header;
