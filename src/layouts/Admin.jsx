import React, { useState } from 'react'
import Language from '../Components/navbar/language';
import Sidebar from '../Components/sidebar/sidebar'
import MainTabControl from '../Components/Tabs/TabControl/MainTabControl';
import './Admin.css'

function Admin() {
  
    const [dropDown, setDropDown] = useState(false);
    const [flagDropDown, setFlagDropDown] = useState(false);


    const handleClickLanguage=()=>{
        setFlagDropDown(!flagDropDown)
        setDropDown(false)
    }
  return (
    <div className="mainparent" onClick={()=> {
        if(dropDown === true || flagDropDown===true) {
            setFlagDropDown(false);
            setDropDown(false);
        }
        
    }}>
        <div className="header" >
            <div className="hederLeft">
            <div className="profileImg"><div><img src="" alt="" /></div></div>
            <span className="profileName"><div>حسین درودی</div></span>
            
            <div className="logOut" onClick={()=>{setDropDown(!dropDown); setFlagDropDown(false);}}>
                <div className="logOutReletive">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                    <div className="dropdown-content"  style={{display : dropDown ? 'flex' : 'none'}}>
                        <div>
                            
                            <img src="" alt="" className="dropImg" />
                            <a className='dropDownLink' href="#home">پروفایل</a>
                        </div>
                        
                        <div>
                            
                            <img src="" alt="" className="dropImg" />
                            <a className='dropDownLink' href="#home">خروج</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Icon"></div>
             </div>
            <div className="headerMid"></div>
            <div className="headerRight">
            <Language click={handleClickLanguage} open={flagDropDown}/>
                
                <div className="thirdIcon"><div><i className="fa fa-bell" aria-hidden="true"></i></div></div>
                <div className="secondIcon"><div><i className="fa fa-home" aria-hidden="true"></i></div></div>
                <div className="firstIcon"><div><i className="fa fa-bars" aria-hidden="true"></i></div></div>

            </div>
        </div>
        <div className="main">
           
            <div className="mainRight">
              <Sidebar/>
            </div>
            <div className="mainLeft">
              <MainTabControl/>
            </div>
        </div>
        <div className="footer">
            <div className="rightFooter">راست</div>
            <div className="middleFooter">وسط</div>
            <div className="leftFooter">چپ</div>
        </div>
    </div>
  )
}

export default Admin