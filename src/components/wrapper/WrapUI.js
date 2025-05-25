/*import './App.css';*/
import AppBoilerUI from '../materialui/AppBoiler';
import HeaderUI from '../materialui/HeaderUI';
import BottomBarUI from '../materialui/BottombarUI';
import { useState } from 'react';


function WrapUI() {

  const [isShow1, setShow]  = useState(true);
  const setShowValue1 = () => setShow(prev => prev = !prev);
  const [isShow2, setShow2]  = useState(true);
  const setShowValue2 = () => setShow2(prev => prev = !prev);

  return (
    <>
      <div className="MobileUI"> 
      <HeaderUI />
      <div className='CustomAdmin'>
        
        <button className='BtnTmp1' onClick={setShowValue1}>Show/hide content UI</button>
        <button className='BtnTmp2' onClick={setShowValue2}>Show/hide bottom nav UI</button>
      </div>
      {isShow1 && <AppBoilerUI />}
      {isShow2 && <BottomBarUI />}
      </div>
    </>
  );
}

export default WrapUI;