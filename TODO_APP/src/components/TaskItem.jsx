function TaskItem({ task }){
  return (
    <li className="task-item">
      <div className="task-group">
        <input 
            type="checkbox"
            checked={task.checked}/>
        <span>{task.name}</span>
        <button>*</button>
        <button>-</button>
      </div>
    </li>
  )  
}

export default TaskItem
