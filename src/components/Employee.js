import React, {useState} from "react";

export default function Employee(props) {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count+1)
    //count = 3 // bad
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name.split("").reverse().join("-")}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.role}</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="card-link">
          Card link
        </a>
        <button onClick={() => props.setTotalCount(props.totalCount+1)}>Click Me! Count: {count}</button>
      </div>
    </div>
  );
}
