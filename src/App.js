import { useState } from "react";
import "./App.css";
import AddTask from "./components/Tasks/AddTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Streaks</h1>
      <AddTask addTask={setTasks} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
