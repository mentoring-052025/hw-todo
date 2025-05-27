import TaskList from "../materialui/TaskList";
import BottomNav from "../materialui/BottomNav";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import BottomBarDiv from "../html/Bottombar";
import AppBoiler from "../html/AppBoilerHTML";
import TaskDone from "../materialui/TaskDone";

function PageLists() {
  const { isMUI, toggleVersion } = useContext(AppContext);
  // const isMUI = useContext(AppContext);

  return (
    <>
      <div className="MobileWrap">
        <p>Placeholder for adding lists</p>
        {isMUI && <BottomNav />}
        {!isMUI && <BottomBarDiv />}
      </div>
    </>
  );
}

export default PageLists;
