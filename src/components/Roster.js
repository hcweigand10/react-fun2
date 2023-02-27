import React, {useState} from "react";
import Employee from "./Employee";

export default function Roster() {
  const [totalCount, setTotalCount] = useState(0)
  const joesRole = "Intern II";

  const employeesArray = [
    { id: 1, name: "Joe", role: "Intern" },
    { id: 2, name: "Eli", role: "Jester" },
    { id: 3, name: "Justus", role: "CFO" },
    { id: 4, name: "Matthew", role: "Senior Dev" },
  ];

  const employeeCards = employeesArray.map((employee) => {
    return <Employee name={employee.name} role={employee.role} totalCount={totalCount} setTotalCount={setTotalCount}/>
  })

  return (
    <div className="row">
      {employeeCards}
      <button>Total count: {totalCount}</button>
    </div>
  );
}
