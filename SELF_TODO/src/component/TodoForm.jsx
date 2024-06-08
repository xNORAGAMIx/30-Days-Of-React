import { useState } from "react"
import { useTodo } from "../context/TodoContext";

function TodoForm() {
    const { addTask } = useTodo();

    const [task,setTask] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })

        setTask("");

        console.log(task);
    };

  return (
    <div className="container">
        <h1 className="app-name">TODO&apos;s</h1>
      <div className="wrapper">
        <form 
            className="form"
            onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                    minLength={3}
                    maxLength={40}
                    placeholder="Enter Task Here"/>
                <button><i className="fa-solid fa-plus"></i></button>
        </form>
      </div>
    </div>
  )
}

export default TodoForm
