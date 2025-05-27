import "../../App.css";
import React, { ChangeEvent, useContext } from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../context/AppContext";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddButton from "./AddButton";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import {
  Paper,
  Card,
  Box,
  CardContent,
  Typography,
  CssBaseline,
} from "@mui/material";

function TaskList() {
  const { isMUI } = useContext(AppContext);

  const tasks = [
    {
      createdAt: 1,
      taskName: "My Todo Fill 1",
      isDone: false,
      completedAt: 0,
      isSaved: true,
      savedAt: 0,
      listId: 1,
    },
    {
      createdAt: 2,
      taskName: "My Todo Fill 2",
      isDone: false,
      completedAt: 0,
      isSaved: false,
      savedAt: 0,
      listId: 1,
    },
    {
      createdAt: 3,
      taskName: "My Todo New 3",
      isDone: false,
      completedAt: 0,
      isSaved: false,
      savedAt: 0,
      listId: 2,
    },
    {
      createdAt: 4,
      taskName: "Add checkbox",
      isDone: true,
      completedAt: 0,
      isSaved: false,
      savedAt: 0,
      listId: 3,
    },
    {
      createdAt: 5,
      taskName: "Add title/desc and save icon",
      isDone: false,
      completedAt: 0,
      isSaved: false,
      savedAt: 0,
      listId: 0,
    },
  ];

  const [taskState, setTasks] = useState(tasks);
  const [newTaskText, setNewTaskText] = useState("");
  const [name, setName] = useState("");

  // const [checked, setChecked] = useState(false);
  // push into array did not work
  // using "spread operator" : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  function AddTask2() {
    const newTask2 = {
      createdAt: Date.now(),
      taskName: name,
      isDone: false,
      completedAt: 0,
      isSaved: false,
      savedAt: 0,
    };

    if (newTask2.taskName !== "") {
      setTasks([...taskState, newTask2]);
      setName(""); // clear input
    }
  }

  // using "spread operator" : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  // considered using filter (create an array of tasks which do not need updating

  function handleCheckboxToggle(createdAt) {
    console.log("checkbox " + createdAt);
    const updatedTasks = taskState.map((task) =>
      task.createdAt === createdAt
        ? { ...task, isDone: !task.isDone, completedAt: Date.now() }
        : task
    );
    setTasks(updatedTasks);
  }

  function handleSaveToggle(createdAt) {
    const updatedSaved = taskState.map((task) =>
      task.createdAt === createdAt
        ? { ...task, isSaved: !task.isSaved, savedAt: Date.now() }
        : task
    );
    setTasks(updatedSaved);
  }

  const [currentTab, setTab] = useState(0);
  const [listFilter, setListFilter] = useState(taskState);
  const [listFiltered, setFiltered] = useState(false);

  function TaskListSelect() {
    const handleTabChange = (event, newTab) => {
      setTab(newTab);

      if (newTab === 0) {
        // const allList = taskState.filter((task) => task.listId >= 0);
        setFiltered(false);
        setTasks(taskState);
      } else {
        const filteredList = tasks.filter((task) => task.listId === newTab);
        setFiltered(true);
        setListFilter(filteredList);
      }
    };

    return (
      <Box
        sx={{
          maxWidth: { xs: "100%", sm: "100%" },
          // causes flicker when scrollable
          // bgcolor: "background.paper",
        }}
      >
        <Tabs
          value={currentTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="All" />
          <Tab label="List Two" />
          <Tab label="List Three" />
          <Tab label="List Four" />
          <Tab label="List Five" />
          <Tab label="List Six" />
          <Tab label="List Seven" />
        </Tabs>
      </Box>
    );
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

          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={task.isSaved}
            onChange={() => handleSaveToggle(task.createdAt)}
          />

          <Typography gutterBottom variant="body1" component="div">
            {task.createdAt}, {task.taskName}, {task.isDone}, {task.completedAt}
            , {task.savedAt}
          </Typography>
        </Paper>
      );
    });

  const TaskListItemsFilter = () =>
    listFilter.map((taskCat, index) => {
      return (
        <Paper
          sx={{ width: "100%", minHeight: 30 }}
          elevation={1}
          key={index + taskCat.createdAt}
        >
          <Checkbox
            checked={taskCat.isDone}
            onChange={() => handleCheckboxToggle(taskCat.createdAt)}
          />

          <Checkbox
            icon={<BookmarkBorderIcon />}
            checkedIcon={<BookmarkIcon />}
            checked={taskCat.isSaved}
            onChange={() => handleSaveToggle(taskCat.createdAt)}
          />

          <Typography gutterBottom variant="body1" component="div">
            {taskCat.createdAt}, {taskCat.taskName}, {taskCat.isDone},{" "}
            {taskCat.completedAt}, {taskCat.savedAt}
          </Typography>
        </Paper>
      );
    });

  return (
    <div className="TaskContainer">
      <TaskListSelect />
      <AddButton />
      <TextField
        id="outlined-controlled"
        label="Add Task"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      {isMUI && <Button onClick={AddTask2}>Add task</Button>}
      {!isMUI && <button>Add task button</button>}
      {/*CSSBaseline needs to go into into main container in app.js only once?*/}
      <CssBaseline />{" "}
      {/*CSSBaseline needs to go into into main container in app.js only once?*/}
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
          {!listFiltered && <TaskListItems />}
          {listFiltered && <TaskListItemsFilter />}
          {/* dynamic items*/}
        </Stack>
      </Box>
      <br></br>
      <br></br>
    </div>
  );
}

export default TaskList;
