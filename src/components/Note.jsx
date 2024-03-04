import React from "react";

const Note = ({ note }) => {
  return (
    <form className="card card-ctr">
      <h3>{note}</h3>
    </form>
  );
};

export default Note;
