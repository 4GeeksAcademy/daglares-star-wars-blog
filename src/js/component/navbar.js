import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-dark p-2">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
            style={{ maxHeight: "50px" }}
          />
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-danger">Favoritos 🖤</button>
        </Link>
      </div>
    </nav>
  );
};
