import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./components/materialui/Header";
import WrapHTML from "./components/wrapper/WrapHTML";
import WrapUI from "./components/wrapper/WrapUI";
import { CssBaseline } from "@mui/material";
import { useState, useContext } from "react";
import { AppProvider, AppContext } from "./context/AppContext";
import Wrapper from "./components/pages/wrapper";
import Welcome from "./components/materialui/Welcome";
import TaskDone from "./components/materialui/TaskDone";
import PageDone from "./components/pages/done";

function App() {
  /* states that control which version of the app to show, version are split into "wrappers" */
  /* it toggles the value either html or UI (html = version of the app with HTML UI components, UI = version with material UI components */

  const routepath = useNavigate();
  const bottomPaths = ["/wrapper", "/saved", "/done", "/lists"];
  const currentPath = useLocation();
  const pathOn = currentPath.pathname;
  const bottomIndex = bottomPaths.findIndex((value) => value === pathOn);
  console.log(pathOn);
  console.log(bottomIndex);

  return (
    <>
      <AppProvider>
        <CssBaseline />
        <div className="AppWrapper">
          {/* For learning purposes I will practice boht HTML and Material UI design and will try to replicate draft version of both*/}
          {/* Manipulate the true/false state in React Dev tools to pick which version to show; I will add a promp with useEffect to ask for the user to pick one on first load */}
          {/* {showVer === "html" && <WrapHTML />} */}
          {/* {showVer === "ui" && <WrapUI />} */}

          {/* Routes + Route must be always combined of React.Fragments */}
          {/* When return includes different elements, <Routes> must be wrapped only around the elements that are subject to routing */}
          <Header />
          <Routes>
            <Route path="/hw-todo" element={<Welcome />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/wrapper" element={<Wrapper />} />
            <Route path="/done" element={<PageDone />} />
          </Routes>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
