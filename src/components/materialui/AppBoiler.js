import "../../App.css";
import TestCard from "./TestCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FixedBottomNavigation from "./FixedBottom";

function AppBoilerUI() {
  return (
    <div className="BoilerUI">
      <div className="BoilerUI-Fill">
        <p>This is a filler text for Material UI</p>
        <p>First tests with some example MUI elements</p>

        <TestCard />
        <br></br>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </div>
    </div>
  );
}

export default AppBoilerUI;
