/*import './App.css';*/
import AppBoilerUI from "../materialui/AppBoiler";
import TaskList from "../materialui/TaskList";
import HeaderUI from "../materialui/HeaderUI";
/*import BottomBarUI from "../materialui/BottombarUI";
import FixedBottomNavigation from "../materialui/FixedBottom";*/
import BottomNav from "../materialui/BottomNav";
import Header from "../materialui/Header";
import { useState } from "react";

function WrapUI() {
  const [isShow1, setShow] = useState(true);
  const setShowValue1 = () => setShow((prev) => (prev = !prev));
  const [isShow2, setShow2] = useState(true);
  const setShowValue2 = () => setShow2((prev) => (prev = !prev));
  const [isAdmin, setAddmin] = useState(false);

  return (
    <>
      <div className="MobileUI">
        <Header />
        {isAdmin && (
          <div className="CustomAdmin">
            <button className="BtnTmp1" onClick={setShowValue1}>
              Show/hide content UI
            </button>
            <button className="BtnTmp2" onClick={setShowValue2}>
              Show/hide bottom nav UI
            </button>
          </div>
        )}
        {/* isShow1 && <AppBoilerUI />*/}
        {isShow1 && <TaskList />}
        {isShow2 && <BottomNav />}
      </div>
    </>
  );
}

export default WrapUI;
