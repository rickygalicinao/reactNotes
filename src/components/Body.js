import React, { useState } from "react";

const Body = (props) => {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const [users, setUsers] = useState([
    { name: "Ricky", age: 22 },
    { name: "Ricky2", age: 23 },
    { name: "Ricky3", age: 24 },
  ]);

  const data = users.map((user) => {
    return (
      <div>
        <p>{user.name} </p>
        <p>{user.age} </p>
      </div>
    );
  });
  return (
    <div>
      <h1>Body {props.country} </h1>
      <p>Count is {count}</p>
      <button onClick={handleClick}>+</button>
      {data}
    </div>
  );
};

export default Body;
