import { useState } from "react";

function AddTask({ input, setInput, todoList, setTodoList }) {
  function createTask() {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        progression: "todo",
      },
    ]);
    setInput("");
  }
  return (
    <div>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button onClick={() => createTask()} type="button">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
