import { Divider, IconButton, InputBase, Paper } from "@material-ui/core";
import React from "react";
import AddTaskIcon from "@material-ui/icons/AddTask";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";

export default function AddTask({ addTask }) {
  const [task, setTask] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const addTaskHandler = (event) => {
    console.log(task, desc);
    event.preventDefault();
    addTask((prev) => [...prev, { task, desc }]);
    setTask("");
    setDesc("");
  };

  return (
    <Paper
      component="div"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        backgroundColor: "#fdd",
      }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <GraphicEqIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Add New Task"
        inputProps={{ "aria-label": "add task name" }}
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <Divider
        sx={{ height: "40px", width: 2, m: 0.5 }}
        orientation="vertical"
      />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Task Description"
        inputProps={{ "aria-label": "add task desc" }}
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      <Divider sx={{ height: "100%", m: 0.5 }} orientation="vertical" />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={addTaskHandler}
      >
        <AddTaskIcon />
      </IconButton>
    </Paper>
  );
}
