import { useState } from "react";

const User = (props) => {
  let [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <h3>Name: {props.name}</h3>
      <h3>Location: {props.location}</h3>
      <h3>Contact : 63857-18845</h3>
      <h4>Functional Components</h4>
    </div>
  );
};
export default User;
