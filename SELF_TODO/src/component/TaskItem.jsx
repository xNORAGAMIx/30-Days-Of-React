/* eslint-disable react/prop-types */

import { useState } from "react"
import { useTodo } from "../context/TodoContext";

function TaskItem({task}) {
    const [isChecked,setChecked] = useState(task.checked);
    const [taskName,setTaskName] = useState(task.name);
    const [isToggled,setToggled] = useState(false);
    
    const {deleteTask, updateTask} = useTodo();

    const handleChange = () => {
        setChecked(prev => !prev)
    }

    const handleClick = () => {
        deleteTask(task.id);
        console.log(task.id);
    }

    const handleEdit = () => {
        if(isChecked === true) return alert("You cannot edit checked tasks!")
        updateTask(task.id,{...task, name: taskName});
        setToggled(prev => !prev)
        console.log(taskName);
    }

  return (
    <li className="items">
        <div className="item-wrapper">
            <input 
                className="list-item"
                type="checkbox"
                value={isChecked}
                onChange={handleChange} />
            <input 
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                readOnly={!isToggled}
                type="text" />
            <button className="edit" onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></button>
            <button className="delete" onClick={handleClick}><i className="fa-solid fa-trash"></i></button>
        </div>
    </li>
  )
}

export default TaskItem
