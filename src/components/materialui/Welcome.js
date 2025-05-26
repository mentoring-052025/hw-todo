import "../../App.css";
import React, { ChangeEvent, useContext } from "react";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../context/AppContext";
import { Routes, Route, useNavigate } from "react-router-dom";

import {
  Paper,
  Card,
  Box,
  CardContent,
  Typography,
  CssBaseline,
} from "@mui/material";

function Welcome() {
  const { isMUI, toggleVersion } = useContext(AppContext);
  const routepath = useNavigate();

  function enterDemo(button) {
    routepath("/wrapper");
    if (button === "html") {
      toggleVersion();
    }
  }

  return (
    <div className="Welcome">
      <Typography gutterBottom variant="h5" component="div">
        Welcome!
      </Typography>

      <Box
        sx={{
          display: "flex",
          background: "white",
          margin: "auto",
          padding: 2,
          pt: 4,
          pb: 4,
          width: "80%",
          height: "60%",
          borderRadius: 4,
        }}
      >
        <Stack
          spacing={2}
          direction="column"
          sx={{ width: "60%", height: "70%", margin: "auto" }}
        >
          <Button variant="contained" onClick={() => enterDemo("ui")}>
            Enter Material UI Demo
          </Button>
          <Button variant="outlined" onClick={() => enterDemo("html")}>
            Enter HTML Demo
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Welcome;
