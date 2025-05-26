import "../../App.css";
import TestCard from "./TestCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Paper, Card, Box, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
/* import FixedBottomNavigation from "./FixedBottom";*/

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

function AppBoilerUI() {
  return (
    <div className="BoilerUI">
      <div className="BoilerUI-Fill">
        <p>This is a filler text for Material UI</p>
        <p>First tests with some example MUI elements</p>

        <Box sx={{ width: "95%", background: "white", p: 2, borderRadius: 4 }}>
          <Stack spacing={2}>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Box>

        <br></br>

        <Box
          sx={{
            display: "flex",
            background: "white",
            padding: 2,
            width: "95%",
            borderRadius: 4,
            /*,
            "& > :not(style)": {
              m: 3,
              width: "95%",
              height: 80,
            },*/
          }}
        >
          <Stack spacing={2} direction="column" sx={{ width: "100%" }}>
            <Paper sx={{ width: "95%", minHeight: 30 }} elevation={1}>
              <Typography gutterBottom variant="body1" component="div">
                test text
              </Typography>
            </Paper>

            <Paper sx={{ width: "95%", minHeight: 30 }} elevation={1}>
              <Typography gutterBottom variant="body1" component="div">
                test text
              </Typography>
            </Paper>
          </Stack>
        </Box>

        <br></br>
        <br></br>

        <TestCard />
        <br></br>
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <br></br>
        <br></br>

        <Card>
          <CardContent>
            <Typography gutterBottom variant="span" component="div">
              span. to do text
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default AppBoilerUI;
