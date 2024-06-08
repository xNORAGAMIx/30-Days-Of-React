import { useTodo } from "../context/TodoContext"
import TaskItem from "./TaskItem";

function TaskList() {
    const {todo} = useTodo();

  return (
    <ul className="list">
        {
            todo.sort((a,b) => b.id-a.id).map((task) => (
                <TaskItem task={task}
                    key={task.id}/>
            ))
        }
    </ul>
  )
}

export default TaskList
