import React from "react";
import Search from "./Search.js";
import "./Header.css";

function Navbar() {
  return (
    <div className="jumbotron">
      <div className="justify-content-center bold title">
        Employee Directory
      </div>
      <div className="justify-content-center">
        <div className="bold">Search for Employee by First Name: </div>
        <Search />
      </div>
    </div>
  );
}
export default Navbar;
