import { useState } from "react";
import AddTask from "./AddTask";
import "./App.css";

function App() {
  return (
    <div>
      <h1>To-Do-List</h1>
      <AddTask />
      <div className="ToDOList">
        <div>
          <h2>To-DO</h2>
        </div>
        <div>
          <h2>Doing</h2>
        </div>
        <div>
          <h2>Done</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
