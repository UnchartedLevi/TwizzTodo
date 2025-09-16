import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function Note(props) {
  const [show, setShow] = useState(true);

  function handleClick() {
    // First trigger zoom-out
    setShow(false);
  }

  return (
    <Zoom
      in={show}
      timeout={300}
      onExited={() => props.onDelete(props.id)} // only remove from list after animation
    >
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>

        <Fab onClick={handleClick}>
          <DeleteIcon />
        </Fab>
      </div>
    </Zoom>
  );
}

export default Note;
