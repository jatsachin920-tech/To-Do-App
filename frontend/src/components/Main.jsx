import { useState } from "react";
import Form from "./Form.jsx"
import ShowTasks from "./ShowTasks.jsx";

export default function Main(){
let[tasks,setTasks]=useState([]);

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]); // Purane tasks + naya task
    }
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
  setTasks(updatedTasks);
  };

  return (
  <div className="app-container">
      <Form onAddTask={addTask} />
      <ShowTasks allTasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}