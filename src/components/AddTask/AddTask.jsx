import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" placeholder="add task...📝" onChange={(e) => setText(e.target.value)} />
      <button
        data-testid="add-task-button"
        onClick={() => {
          const payload = {
            text: text,
            done: false,
            count: 1,
          };

          addTask(payload);
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
