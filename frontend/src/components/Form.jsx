import { useState } from "react";
import "./Form.css";

export default function Form({ onAddTask }){
 let [input,setInput]=useState("");
 
 let handleInputChange=(event)=>{
    setInput(event.target.value);
 }

 let handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() !== "") { 
    onAddTask(input);
    setInput("");
    }
  };

    return(
       <>
  <h1 className="text-center mt-4">To-Do App</h1>
  <form className="custom-form" onSubmit={handleSubmit}>
    <div className="d-flex justify-content-center mt-3"> 
      <input 
        type="text" 
        className="form-control w-50" 
        placeholder="Enter task" 
        value={input}
        onChange={handleInputChange}
      />
      &nbsp;&nbsp;
      <input 
        className="btn btn-primary ms-2" 
        type="submit" 
        value="Submit"
      />
    </div>
  </form>
   <h2 className="text-center mt-4">Your Tasks!</h2>
</>
    );
}