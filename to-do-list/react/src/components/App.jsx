import { useState } from "react";
import AddTask from "./AddTask";
import "../style/App.css";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  function changeDoing(todo) {
    setDoingList((prev) => [
      ...prev,
      {
        id: todo.id,
        task: todo.task,
        progression: "doing",
      },
    ]);
    setTodoList((prev) => prev.filter((t) => t.id !== todo.id));
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
              <div onClick={() => changeDoing(todo)}>{todo.task}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
