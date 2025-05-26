import TaskList from "../materialui/TaskList";
import BottomNav from "../materialui/BottomNav";
import Header from "../materialui/Header";
import { useState } from "react";

function WrapUI() {
  const [isShow1, setShow] = useState(true);
  const setShowValue1 = () => setShow((prev) => (prev = !prev));
  const [isShow2, setShow2] = useState(true);
  const setShowValue2 = () => setShow2((prev) => (prev = !prev));

  return (
    <>
      <div className="MobileUI">
        {isShow1 && <TaskList />}
        {isShow2 && <BottomNav />}
      </div>
    </>
  );
}

export default WrapUI;
