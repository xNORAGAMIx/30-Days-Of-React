import TaskItem from "./TaskItem";
function TaskList({task}) {
    console.log(task);
  return (
    <ul className="task-list">
        {
            task.sort((a,b) => b.id - a.id).map(e => (
                <TaskItem
                    key={e.id}
                    task={e}/>
            ))
        }
    </ul>
  )
}

export default TaskList
