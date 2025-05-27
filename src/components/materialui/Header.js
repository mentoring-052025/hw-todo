import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { AppContext } from "../../context/AppContext";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

/* lift state up and add to app version Context */

function Header() {
  const routepath = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  // the value and function are assigned from context
  const { isMUI, toggleVersion } = useContext(AppContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (isUpdate) => {
    setAnchorEl(null);
    if (isUpdate) {
      toggleVersion();
    } else {
      routepath("/hw-todo");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tasks
          </Typography>
          {
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => handleClose(false)}>Reload</MenuItem>
                <MenuItem onClick={() => handleClose(true)}>
                  {isMUI ? "Show HTML" : "Show MUI"}
                </MenuItem>
              </Menu>
            </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
