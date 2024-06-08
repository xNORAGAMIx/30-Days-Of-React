import { useState } from "react";

function CustomForm({ addTask }) {

    const [task,setTask] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        console.log(task);
        setTask("");

        addTask({
            name: task,
            checked: false,
            id: Date.now()
        })
    }
  return (
    <div className="wrapper">
      <form 
        onSubmit={handleForm}>
        <input 
            type="text"
            placeholder="Enter Task Here"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            maxLength={60} />
        <button>+</button>
      </form>
    </div>
  )
}

export default CustomForm
