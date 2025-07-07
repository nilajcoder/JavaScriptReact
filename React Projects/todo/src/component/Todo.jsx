import React, { useState } from 'react'

import '../css/Todo.css'

const Todo = () => {

    const [tasks, setTask] = useState([]);
    const [input, setInput] = useState("")

    const addTask = (e) => {
        e.preventDefault();
        if (input.trim() === "") {
            alert("Please Input a task ")
            return;
        }
        setTask([...tasks, input])
        setInput("")


    };




    const deleteTask = (taskToDelete) => {
        const newTasks = tasks.filter((task) => task !== taskToDelete);
        setTask(newTasks);
    };


    return (
        <div className='todocon'>

            <h1>To Do </h1>

            <form className='todoform' onSubmit={addTask}>

                <input type=" text" value={input} placeholder='Add a new Task....' onChange={(e) => setInput(e.target.value)} />

                <button type='submit'>Add </button>


            </form>


            <ul id="todo-list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}{" "}
                        <button className="delete" onClick={() => deleteTask(task)}>Delete</button>
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default Todo
