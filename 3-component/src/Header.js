import React from "react";

// TODO
// const Header = (props) => {
const Header = ({ title }) => {
  return (
    <header>
      {/* <h2 className="container">{props.title}</h2> */}
      <h2 className="container">{title}</h2>
    </header>
  );
};

export default Header;
