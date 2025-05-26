import { Routes, Route, useNavigate } from "react-router-dom";
import WrapHTML from "./components/wrapper/WrapHTML";
import WrapUI from "./components/wrapper/WrapUI";
import { useState } from "react";

function App() {
  /* states that control which version of the app to show, version are split into "wrappers" */
  /* it toggles the value either html or UI (html = version of the app with HTML UI components, UI = version with material UI components */
  const [showVer, setShowVer] = useState("html");
  const routepath = useNavigate();
  const setShowVerVal = () => {
    if (showVer === "html") {
      setShowVer("ui");
      routepath("testui");
    } else {
      setShowVer("html");
      /* goes back to previous page, in this first draft dev mode there are only two path - home and /testui, so going back will always go to "/" */
      /* routepath(-1);*/
      /* navitate to home */
      routepath("");
    }
  };

  return (
    <>
      <div className="AppWrapper">
        {/* <button onClick={setShowVerVal}>HTML/UI</button> */}
        {/* For learning purposes I will practice boht HTML and Material UI design and will try to replicate draft version of both*/}
        {/* Manipulate the true/false state in React Dev tools to pick which version to show; I will add a promp with useEffect to ask for the user to pick one on first load */}
        {/* {showVer === "html" && <WrapHTML />} */}
        {/* {showVer === "ui" && <WrapUI />} */}

        {/* Routes + Route must be always combined of React.Fragments */}
        {/* When return includes different elements, <Routes> must be wrapped only around the elements that are subject to routing */}
        <Routes>
          <Route path="/" element={<WrapHTML />} />
          <Route path="/testui" element={<WrapUI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
