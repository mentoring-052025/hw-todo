/*import './App.css';*/
import AppBoiler from '../html/AppBoiler';
import HeaderDiv from '../html/Header';
import BottomBarDiv from '../html/Bottombar';
import { useState } from 'react';


function WrapHTML() {

  const [isShow1, setShow]  = useState(true);
  const setShowValue1 = () => setShow(prev => prev = !prev);
  const [isShow2, setShow2]  = useState(true);
  const setShowValue2 = () => setShow2(prev => prev = !prev);

  return (
    <>
      <div className="MobileHTML"> 
      <HeaderDiv />
      <div className='CustomAdmin'>
        
        <button className='BtnTmp1' onClick={setShowValue1}>Show/hide content HTML</button>
        <button className='BtnTmp2' onClick={setShowValue2}>Show/hide bottom nav HTML</button>
      </div>
      {isShow1 && <AppBoiler />}
      {isShow2 && <BottomBarDiv />}
      </div>
    </>
  );
}

export default WrapHTML;