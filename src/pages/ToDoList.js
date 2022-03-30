import React from "react";
import ToDo from "./ToDo";





const ToDoList = ({toDoList, handleTogggle, handleFilter}) =>{
    return(
        <div>
            {toDoList.map(todo =>{
                return(
                    <ToDo todo={todo} handleTogggle={handleTogggle} handleFilter={handleFilter}/>
                )
            })}
            <button style={{margin: '20px', color: 'blue'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};
export default ToDoList;