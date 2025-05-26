import "../../App.css";
import React, { ChangeEvent, useContext } from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../context/AppContext";

import {
  Paper,
  Card,
  Box,
  CardContent,
  Typography,
  CssBaseline,
} from "@mui/material";

function TaskDone() {
  const { isMUI } = useContext(AppContext);

  const tasks = [
    { createdAt: 1, taskName: "Done 1", isDone: true, completedAt: 0 },
    { createdAt: 2, taskName: "Done 2", isDone: true, completedAt: 0 },
  ];

  const [taskState, setTasks] = useState(tasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [name, setName] = useState("Add new task here");

  // const [checked, setChecked] = useState(false);

  function AddTask2() {
    const newTask2 = {
      createdAt: Date.now(),
      taskName: name,
      isDone: false,
      completedAt: 0,
    };

    if (newTask2.taskName !== "") {
      setTasks([...taskState, newTask2]);
      setName(""); // clear input
    }
  }

  function handleCheckboxToggle(createdAt) {
    console.log("checkbox " + createdAt);
    const updatedTasks = taskState.map((task) =>
      task.createdAt === createdAt
        ? { ...task, isDone: !task.isDone, completedAt: Date.now() }
        : task
    );
    setTasks(updatedTasks);
  }

  const TaskListItems = () =>
    taskState.map((task, index) => {
      return (
        <Paper
          sx={{ width: "100%", minHeight: 30 }}
          elevation={1}
          key={index + task.createdAt}
        >
          <Checkbox
            checked={task.isDone}
            onChange={() => handleCheckboxToggle(task.createdAt)}
          />

          <Typography gutterBottom variant="body1" component="div">
            {task.createdAt}, {task.taskName}, {task.isDone}, {task.completedAt}
          </Typography>
        </Paper>
      );
    });

  return (
    <div className="TaskContainer">
      <CssBaseline />

      <Typography gutterBottom variant="h5" component="div">
        My Tasks {isMUI ? "Material UI" : "HTML"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          background: "white",
          padding: 2,
          pt: 4,
          pb: 4,
          width: "100%",
          borderRadius: 4,
        }}
      >
        <Stack spacing={2} direction="column" sx={{ width: "100%" }}>
          {/* dynamic items*/}
          <TaskListItems />
          {/* dynamic items*/}
        </Stack>
      </Box>
    </div>
  );
}

export default TaskDone;
