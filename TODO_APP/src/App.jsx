import { useState } from "react"
import CustomForm from "./components/CustomForm"
import TaskList from "./components/TaskList";
function App() {

  const [todoTasks, setTodoTasks] = useState([]);

  const addTask = (todoTasks) => {
    setTodoTasks(prevState => [...prevState,todoTasks]);

  }

  return (
    <>
        <CustomForm addTask={addTask}></CustomForm>
        <TaskList task={todoTasks}></TaskList>

    </>
  )
}

export default App
