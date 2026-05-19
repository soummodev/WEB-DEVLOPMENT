import React, { useState } from "react";
import "./t.css";

function To() {
  const [task, stask] = useState([]);
  const [newtask, sntask] = useState("");

  const hi = (event) => {
    sntask(event.target.value);
  };

  const at = () => {
    if (newtask.trim() !== "") {
      stask((t) => [...t, newtask]);
      sntask("");
    }
  };

  const dt = (index) => {
    const utask = task.filter((_, i) => i !== index);
    stask(utask);
  };

  const mtu = (index) => {
    if (index > 0) {
      const udtask = [...task];
      [udtask[index], udtask[index - 1]] = [udtask[index - 1], udtask[index]];
      stask(udtask);
    }
  };

  const mtd = (index) => {
    if (index < task.length - 1) {
      const udtask = [...task];
      [udtask[index], udtask[index + 1]] = [udtask[index + 1], udtask[index]];
      stask(udtask);
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <input
        type="text"
        value={newtask}
        onChange={hi}
        placeholder="Enter task..."
      />

      <button className="add-task" onClick={at}>
        Add Task
      </button>

      <ul>
        {task.map((t, index) => (
          <li key={index}>
            <span>{t}</span>

            <div>
              <button  className="delete-task" onClick={() => dt(index)}>
                Delete
              </button>
              <button className="move-up" onClick={() => mtu(index)}>
                Up
              </button>
              <button className="move-down" onClick={() => mtd(index)}>
                Down
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default To;
