import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { addTask } from '../redux/reducer';

import "../css/main.css";

//A state argument will get passed to this method, and it will return state

const mapStateToProps = (state) => {
    return {
    tasks: state,
    };
};

//This function takes dispatch as an argument and dispatches an action to the reducer.

const mapDispatchToProps = (dispatch) => {
    return {
    addTask: (obj) => dispatch(addTask(obj)),
    };
};

const Tasks = (props) =>{

    const [task, setTask] = useState("");
  
    const add = () => {
        if (task === "") {
        alert("Input cannot be Empty");
        } else {
        props.addTask({
            id: Math.floor(Math.random() * 1000),
            item: task,
            completed: false,
        });
        setTask("");
        }
  };

    const handleChange = (e) =>{
        setTask(e.target.value);
    }

    return(
        <div className="container">
            <TextField id="standard-basic" label="Enter value" variant="standard"
                type="text"
                onChange={(e) => handleChange(e)}
                value={task}
            />
            <Button variant="contained" style={{ marginLeft: "4%" }}
                onClick={() => add()}
            >
                Add
            </Button>
            <br />

            {/* <ul>
                {props.tasks.length > 0 &&
                props.tasks.map((item) => {
                    return <li key={item.id}>{item.item}</li>;
                })}
            </ul> */}

        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
