/*import * as React from "react"; */ /* importint all requires referencing import const as ref = React.useRef(null); */
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ListIcon from "@mui/icons-material/List";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/material"; /* add all imports  into one row */

export default function BottomNav() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <CssBaseline /> {/* is this needed? */}
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
    </Container>
  );
}
