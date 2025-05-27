import TaskList from "../materialui/TaskList";
import BottomNav from "../materialui/BottomNav";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import BottomBarDiv from "../html/Bottombar";
import AppBoiler from "../html/AppBoilerHTML";

function PageAll() {
  const { isMUI, toggleVersion } = useContext(AppContext);
  // const isMUI = useContext(AppContext);

  return (
    <>
      <div className="MobileWrap">
        {isMUI && <TaskList />}
        {isMUI && <BottomNav />}
        {!isMUI && <AppBoiler />}
        {!isMUI && <BottomBarDiv />}
      </div>
    </>
  );
}

export default PageAll;
