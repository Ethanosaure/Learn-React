import { useState, useEffect } from "react";
import AddTask from "./AddTask";
import "../style/App.css";

function App() {
  const [input, setInput] = useState("");
  const savedTask = localStorage.getItem("task");
  const [todoList, setTodoList] = useState(
    savedTask ? JSON.parse(savedTask) : []
  );
  function handleCompleted(todo) {
    setTodoList((prevTodoList) =>
      prevTodoList.map((item) =>
        item.id === todo.id ? { ...item, completed: !item.completed } : item
      )
    );
  }
  function removeTask(id) {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  }
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="toDoList">
      <div className="title">
        <h1>To-Do-List</h1>
        <AddTask
          input={input}
          setInput={setInput}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </div>
      <div className="todo">
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <div
                onClick={() => handleCompleted(todo)}
                className={todo.completed ? "completed" : "toComplete"}
              >
                {todo.task}
                {todo.completed ? (
                  <button type="button" onClick={() => removeTask(todo.id)}>
                    remove
                  </button>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
