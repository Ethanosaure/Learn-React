import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import "../style/App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleCompleted(todo) {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div>
      <h1>To-Do-List</h1>
      <AddTask
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <div className="todo">
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <div
                onClick={() => handleCompleted(todo)}
                className={todo.completed ? "completed" : "toComplete"}
              >
                {todo.task}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
