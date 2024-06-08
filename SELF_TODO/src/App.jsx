import TodoForm from "./component/TodoForm"
import TaskList from "./component/TaskList"
import { TodoProvider } from "./context/TodoContext"

function App() {
  
  return (
    <TodoProvider>
      <TodoForm></TodoForm>
      <TaskList></TaskList>
    </TodoProvider>
  )
}

export default App
