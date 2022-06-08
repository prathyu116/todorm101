import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";
const Task = ({ todos, deleteTask, SetTods }) => {
  // NOTE: do not delete `data-testid` key value pair
  const [done, setDone] = useState(false);

  const toggleTask = (id) => {
    SetTods(todos.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };
  console.log(todos)
  return (
    <>
      {todos.map((data) => {
        return (
          <li key={data.id} data-testid="task" className={styles.task}>
            <input type="checkbox" data-testid="task-checkbox" onChange={() => toggleTask(data.id)} checked={data.done ? "checked" : ""} />
            <div data-testid="task-text" style={data.done ? { textDecoration: "line-through" } : {}}>
              {data.text}
            </div>
            {/* Counter here */}
            <Counter datacount={data.count} />

            <button data-testid="task-remove-button" onClick={() => deleteTask(data.id)}>
              X
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Task;
