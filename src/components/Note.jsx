import React from "react";
import DeleteIcon from "../svgs/DeleteIcon";

const Note = ({ note, getNotes }) => {
  const { note: text, id } = note;
  const deleteNote = async () => {
    try {
      const response = await fetch(
        `https://firenote-wpa-default-rtdb.firebaseio.com/notes/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to Delete");
      }
      getNotes();
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <form className="card card-ctr">
      <h3>{text} </h3>
      <div onClick={deleteNote}>
        <DeleteIcon />
      </div>
    </form>
  );
};

export default Note;
