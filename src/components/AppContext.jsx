// Establish App Context

import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [employees, setEmployees] = useState({});
  const [fetching, setFetching] = useState(false);
  const [searching, setSearching] = useState("");
  const [sorting, setSorting] = useState("alpha");
  const [sortImg, setSortImg] = useState("/img/arrow-up.svg");

  // Use the 'randomuser.me' API to generate list of randomised data for list
  // as JSON and pass to the state
  const fetchEmployeeData = async () => {
    let response = await fetch("https://randomuser.me/api/?results=200&nat=us");
    let data = await response.json();
    setEmployees(data.results);
    setFetching(fetching === false ? true : false);
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        employeeData: [employees, setEmployees],
        fetch: [fetching, setFetching],
        search: [searching, setSearching],
        sort: [sorting, setSorting],
        sortImgSrc: [sortImg, setSortImg],
      }}
    >
      {" "}
      {props.children}{" "}
    </AppContext.Provider>
  );
};
