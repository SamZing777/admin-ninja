import React, { useState } from "react";
import { connect } from "react-redux";
import Button from '@mui/material/Button';
import {
  addTask,
  completeTask,
  removeTask,
  updateTask,
} from "../redux/reducer";

import TaskItem from "./taskItem";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTask(obj)),
    removeTask: (id) => dispatch(removeTask(id)),
    updateTask: (obj) => dispatch(updateTask(obj)),
    completeTask: (id) => dispatch(completeTask(id)),
  };
};

const DisplayTasks = (props) => {
  const [sort, setSort] = useState("active");
  const [variant1, setVariant1] = useState("outlined");
  const [variant2, setVariant2] = useState("outlined");
  const [variant3, setVariant3] = useState("outlined");

  const active = () =>{
    setSort("active")
    setVariant1("contained")
    setVariant2("outlined")
    setVariant3("outlined")
  }

  const completed = () =>{
    setSort("completed")
    setVariant2("contained")
    setVariant1("outlined")
    setVariant3("outlined")
  }

  const all = () =>{
    setSort("all")
    setVariant3("contained")
    setVariant1("outlined")
    setVariant2("outlined")
  }

  return (
    <div className="">
      <div className="status">
        <Button variant={variant1}
          onClick={() => active()}
        >
          Active
        </Button>

        <Button variant={variant2}
          onClick={() => completed()}
        >
          Completed
        </Button>

        <Button variant={variant3}
          onClick={() => all()}
        >
          All
        </Button>
      </div>

      <ul>

          {props.tasks.length > 0 && sort === "active"
            ? props.tasks.map((item) => {
                return (
                  item.completed === false && (
           
                    <TaskItem
                      key={item.id}
                      item={item}
                      removeTask={props.removeTask}
                      updateTask={props.updateTask}
                      completeTask={props.completeTask}
                    />
                        
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.tasks.length > 0 && sort === "completed"
            ? props.tasks.map((item) => {
                return (
                  item.completed === true && (
                    <TaskItem
                      key={item.id}
                      item={item}
                      removeTask={props.removeTask}
                      updateTask={props.updateTask}
                      completeTask={props.completeTask}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.tasks.length > 0 && sort === "all"
            ? props.tasks.map((item) => {
                return (
                  <TaskItem
                    key={item.id}
                    item={item}
                    removeTask={props.removeTask}
                    updateTask={props.updateTask}
                    completeTask={props.completeTask}
                  />
                );
              })
            : null}
   
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTasks);
