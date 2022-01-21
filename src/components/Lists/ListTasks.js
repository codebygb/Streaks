import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function ListTasks(props) {
  const dateArray = () => {
    const dateArray = [];
    for (let index = -3; index < 4; index++) {
      const date = new Date();
      date.setDate(date.getDate() + index);
      dateArray.push(date.toString().slice(4, 15));
    }
    return dateArray;
  };
  const rowData = [
    { streak: 12, task: "Task 1", "Aug 26 2021": true },
    { streak: 12, task: "Task 2", "Aug 26 2021": true, "Aug 27 2021": true },
    { streak: 12, task: "Task 3", "Aug 26 2021": true, "Aug 27 2021": true },
    { streak: 12, task: "Task 4", "Aug 26 2021": true, "Aug 27 2021": true },
    { streak: 12, task: "Task 5", "Aug 26 2021": true, "Aug 27 2021": true },
    { streak: 12, task: "Task 5", "Aug 26 2021": true, "Aug 27 2022": true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: "80vh", width: "80vw" }}>
      <AgGridReact rowData={rowData}>
        <AgGridColumn field="task" pinned></AgGridColumn>
        {dateArray().map((d) => (
          <AgGridColumn field={d}></AgGridColumn>
        ))}
        <AgGridColumn field="streak" pinned></AgGridColumn>
      </AgGridReact>
    </div>
  );
}
