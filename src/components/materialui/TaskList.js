import "../../App.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import {
  Paper,
  Card,
  Box,
  CardContent,
  Typography,
  CssBaseline,
} from "@mui/material";

function TaskList() {
  const tasks = [
    { id: 1, taskName: "My Todo Fill 1" },
    { id: 2, taskName: "My Todo Fill 2" },
    { id: 3, taskName: "My Todo New 3" },
    { id: 4, taskName: "Add checkbox" },
    { id: 5, taskName: "Add title/desc and save icon" },
  ];

  const TaskListItems = () =>
    tasks.map((task, index) => {
      return (
        <Paper
          sx={{ width: "100%", minHeight: 30 }}
          elevation={1}
          key={index + task.taskName}
        >
          <Typography gutterBottom variant="body1" component="div">
            {task.taskName}
          </Typography>
        </Paper>
      );
    });

  return (
    <div className="TaskContainer">
      <CssBaseline />
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
        {/* hard coded fill items - start block*/}
        <Stack spacing={2} direction="column" sx={{ width: "100%" }}>
          <Paper sx={{ width: "100%", minHeight: 30 }} elevation={1}>
            <Typography gutterBottom variant="body1" component="div">
              {tasks[0].taskName}
            </Typography>
          </Paper>

          <Paper sx={{ width: "100%", minHeight: 30 }} elevation={1}>
            <Typography gutterBottom variant="body1" component="div">
              {tasks[1].taskName}
            </Typography>
          </Paper>
          {/* hard coded fill items - end block*/}

          {/* dynamic items*/}
          <TaskListItems />
          {/* dynamic items*/}
        </Stack>
      </Box>
    </div>
  );
}

export default TaskList;
