import React from "react";

const Header = (props) => {
  return (
    <h1>
      Header {props.greeting} {props.age}
    </h1>
  );
};

export default Header;
