import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const TodoContext = createContext();


// eslint-disable-next-line react/prop-types
export const TodoProvider = ({children}) => {
    
    const [todo,setTodo] = useState([]);

    const addTask = (task) => {
        setTodo(prev => [...prev,task]);
    }

    const deleteTask = (id) => {
        const newTodo = todo.filter(task => task.id !== id);
        setTodo(newTodo);
    }

    const updateTask = (id, task) => {
        setTodo((prev) => prev.map((ele) => (
            ele.id === id ? task : ele
        )))
    }

    useEffect(() => {
        const localTodo = JSON.parse(localStorage.getItem("todos"));

        if (localTodo && localTodo.length > 0){
            setTodo(localTodo);
        }
        //console.log(localTodo);
    },[])

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo])

    return(
        <TodoContext.Provider value={{todo, addTask, deleteTask, updateTask}}>
            {children}
        </TodoContext.Provider>
    )
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTodo = () => {
    return useContext(TodoContext);
};