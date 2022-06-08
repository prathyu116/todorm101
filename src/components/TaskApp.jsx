import React, { useEffect, useState } from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";

const TaskApp = () => {
  const [todos, SetTods] = useState([
    {
      id: 1,
      text: "Push up",
      done: true,
      count: 2,
    },
    {
      id: 2,
      text: "Pull Up",
      done: true,
      count: 3,
    },
    {
      id: 3,
      text: "Squats",
      done: false,
      count: 1,
    },
    {
      id: 4,
      text: "Sprint",
      done: false,
      count: 5,
    },
    {
      id: 5,
      text: "Stairs",
      done: false,
      count: 200,
    },
  ]);
  // NOTE: do not delete `data-testid` key value pair
  const addTask = (tasks) => {
    console.log(tasks);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...tasks };
    SetTods([...todos, newTask]);
  };
  const deleteTask = (id) => {
    SetTods(todos.filter((task) => task.id !== id));
  };
  
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader todos={todos} />
      <AddTask addTask={addTask} />
      {/* Tasks */}
      <Task todos={todos} deleteTask={deleteTask} SetTods={SetTods} />
    </div>
  );
};

export default TaskApp;
