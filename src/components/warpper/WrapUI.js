/*import './App.css';*/
import AppBoiler from '../materialui/AppBoiler';
import HeaderDiv from '../materialui/Header';
import BottomBarDiv from '../materialui/Bottombar';
import { useState } from 'react';


function WrapUI() {

  const [isShow1, setShow]  = useState(true);
  const setShowValue1 = () => setShow(prev => prev = !prev);
  const [isShow2, setShow2]  = useState(true);
  const setShowValue2 = () => setShow2(prev => prev = !prev);

  return (
    <>
      <div className="MobileUI"> 
      <HeaderDiv />
      <div className='CustomAdmin'>
        
        <button className='BtnTmp1' onClick={setShowValue1}>Show/hide content UI</button>
        <button className='BtnTmp2' onClick={setShowValue2}>Show/hide bottom nav UI</button>
      </div>
      {isShow1 && <AppBoiler />}
      {isShow2 && <BottomBarDiv />}
      </div>
    </>
  );
}

export default WrapUI;