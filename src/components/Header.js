import React from "react";
import './header.css';

const Header = () => {

  return (
    <header className="header">
      <h1>todo App</h1>
      <p>
        Add todo item and mark as completed or delete it when done.
      </p>
    </header>
  );
};

export default Header;