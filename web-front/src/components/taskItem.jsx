import React, { useRef } from "react";
import { IconButton, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { completeTask, removeTask, updateTask } from "../redux/reducer";

import "../css/main.css";

const TaskItem = (props) => {
  
  const { item, updateTask, removeTask, completeTask } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTask({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  // Check if item exists before accessing its properties
          if (!item) {
            return <div></div>; // Or any other appropriate loading state
          }

  return (
    <div
      key={item.id}
      className=""
    >
      <TextField id="outlined-basic" label="" variant="outlined"
          inputRef={inputRef}
          disabled={inputRef}
          defaultValue={item.item}
          onKeyUp={(e) => update(item.id, inputRef.current.value, e)}
       />

      <div className="row">
        <IconButton aria-label="update" color="secondary"
          onClick={() => changeFocus()}>
          <EditIcon />
        </IconButton>

        <IconButton aria-label="delete" color="error"
          onClick={() => removeTask(item.id)}>
          <DeleteIcon />
        </IconButton>
        
        {item.completed === false && (
          <IconButton aria-label="done" color="success"
            onClick={() => completeTask(item.id)}>
            <DoneAllIcon />
          </IconButton>
        )}

        <div className="checked">
          {item.completed && 
            <span className="completed">
              <CheckCircleIcon color="success" />
            </span>
          }
        </div>

      </div>

    </div>
  );
};

export default TaskItem;
