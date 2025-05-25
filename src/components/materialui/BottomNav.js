import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ListIcon from "@mui/icons-material/List";
import Paper from "@mui/material/Paper";

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline /> {/* is this needed? */}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Tasks" icon={<AddTaskIcon />} />
          <BottomNavigationAction label="Important" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Done" icon={<ArchiveIcon />} />
          <BottomNavigationAction label="Lists" icon={<ListIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
