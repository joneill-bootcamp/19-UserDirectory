// Employee Search function

import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const EmployeeSearch = () => {
  const { search } = useContext(AppContext);
  let [searching, setSearching] = search;
  const handleChange = (e) => {
    setSearching((searching = e.target.value));
  };

  return (
    <React.Fragment>
      <header>
        <h1>RocketSpace Employee/Contractor Roster</h1>
      </header>

      <section className="filterBar">
        <input
          // Allow user to enter part employee name and update in real time
          type="text"
          placeholder="Filter by Name..."
          value={searching}
          onChange={handleChange}
        />
      </section>
    </React.Fragment>
  );
};

export default EmployeeSearch;
