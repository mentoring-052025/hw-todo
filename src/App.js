import WrapHTML from './components/wrapper/WrapHTML';
import WrapUI from './components/wrapper/WrapUI';
import { useState } from 'react';


function App() {

  /* states that control which version of the app to show, version are split into "wrappers" */
  /* it toggles the value either html or UI (html = version of the app with HTML UI components, UI = version with material UI components */
  const [showVer, setShowVer]  = useState("html");
  const setShowVerVal = () =>  setShowVer(showVer === "html" ? "ui": "html");

  return (
    <>
    
      <div className="AppWrapper"> 
        <button onClick={setShowVerVal}>HTML/UI</button>
      {/* For learning purposes I will practice boht HTML and Material UI design and will try to replicate draft version of both*/}
      {/* Manipulate the true/false state in React Dev tools to pick which version to show; I will add a promp with useEffect to ask for the user to pick one on first load */}
      {showVer === "html" && <WrapHTML />}
      {showVer === "ui" && <WrapUI />}
      </div>
    </>
  );
}

export default App;
