import React from "react";

const Navbar = ({getNotes}) => {
  return (
    <section className="nav">
      <h1 className="logo">FireNote</h1>
      <button onClick={getNotes}>Show Notes</button>
    </section>
  );
};

export default Navbar;
