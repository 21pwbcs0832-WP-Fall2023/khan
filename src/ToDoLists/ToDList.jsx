import React from "react";

const ToDoList = (props) => {
  return ( 
    <> 
      <div className="todo-style flex items-center justify-between">
        <i className="fa fa-times cursor-pointer text-red-500" aria-hidden="true" onClick={() => props.onSelect(props.id)}></i>
        <li className="ml-4"> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoList;
