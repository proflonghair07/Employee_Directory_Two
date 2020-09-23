import React, { useContext } from "react";
import { useGet } from "../hooks/API.js";
import "./Table.css";
import { EmployeeContext } from "./EmployeeContext.js";
import Button from "./Button.js";

function Table() {
  const { sortFunction } = useGet("https://randomuser.me/api/?results=100");
  const { displayedEmployees } = useContext(EmployeeContext);

  return (
    <table>
      <thead className="thead-height">
        <tr>
          <td>Picture</td>
          <td onClick={() => sortFunction("name")}>
            <Button>First Name</Button>
          </td>
          <td>Last Name</td>
          <td>Gender</td>
          <td>E-mail Address</td>
          <td>Phone Number</td>
          <td onClick={() => sortFunction("age")}>
            <Button>Age</Button>
          </td>
        </tr>
      </thead>
      <tbody>
        {displayedEmployees.map((employee) => {
          return (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.medium} alt="user portrait" />
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.gender}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.dob.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default Table;
