import Tasks from "../components/task";
import TaskItem from "../components/taskItem";
import DisplayTasks from "../components/displayTasks";

import "../css/main.css";

const TaskPage = () =>{
    return (
      <div className="container">
        <Tasks />
        <TaskItem />
        <DisplayTasks />
      </div>
    );
  }
  
  export default TaskPage;  
