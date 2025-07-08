import React, { useState } from 'react';
import '../css/Todo.css';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please Input a task');
      return;
    }

    const newTask = { text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput('');
  };

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  const toggleCompleted = (taskIndex) => {
    const newTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  return (
    <div className="todocon">
      <h1>Task Manager</h1>

      <form className="todoform" onSubmit={addTask}>
        <input
          type="text"
          value={input}
          placeholder="Add a new Task...."
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul id="todo-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {task.text}
            <button onClick={() => toggleCompleted(index)}>
              {task.completed ? 'Completed' : 'Complete'}
            </button>
            <button className="delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
