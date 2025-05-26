/*import * as React from "react"; */ /* importint all requires referencing import const as ref = React.useRef(null); */
import { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
  // const [value, setValue] = useState(0);
  const routepath = useNavigate();

  const bottomPaths = ["/wrapper", "/saved", "/done", "/lists"];
  const currentPath = useLocation();
  const pathOn = currentPath.pathname;
  const bottomIndex = bottomPaths.findIndex(
    (findValue) => findValue === pathOn
  );
  console.log(pathOn);
  console.log(bottomIndex);
  let navIndex = bottomIndex;
  console.log("cliked on " + navIndex);
  console.log("cliked on " + bottomIndex);

  return (
    <Container>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <CssBaseline /> {/* is this needed? */}
        <BottomNavigation
          showLabels
          value={navIndex}
          //onChange={(event, newValue) => {
          //  setValue(newValue);
          // }}
        >
          <BottomNavigationAction
            onClick={() => routepath("/wrapper")}
            label="Tasks"
            icon={<AddTaskIcon />}
          />
          <BottomNavigationAction
            onClick={() => routepath("/saved")}
            label="Important"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            onClick={() => routepath("/done")}
            label="Done"
            icon={<ArchiveIcon />}
          />
          <BottomNavigationAction
            onClick={() => routepath("/lists")}
            label="Lists"
            icon={<ListIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Container>
  );
}
