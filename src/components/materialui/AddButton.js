import "../../App.css";
import React, { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import {
  Paper,
  Card,
  Box,
  CardContent,
  Typography,
  CssBaseline,
} from "@mui/material";

function AddButton() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="medium" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}

export default AddButton;
