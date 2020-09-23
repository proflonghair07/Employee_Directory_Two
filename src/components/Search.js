import React, { useState, useContext } from "react";
import { EmployeeContext } from "./EmployeeContext.js";
import "./Search.css";

function Search() {
  const { employees, setDisplayedEmployees } = useContext(EmployeeContext);
  const [search, setSearch] = useState("");

  function updateSearch({ target }) {
    const searchTerm = target.value;
    setSearch(searchTerm);
    const filterResults = employees.filter(function (employee) {
      return employee.name.first
        .toLowerCase()
        .indexOf(searchTerm.toLowerCase()) !== -1
        ? true
        : false;
    });
    setDisplayedEmployees([...filterResults]);
  }
  return <input type="text" onChange={updateSearch} value={search}></input>;
}
export default Search;
