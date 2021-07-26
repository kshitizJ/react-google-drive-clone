import React from 'react'
import DriveLogo from '../../media/google-drive-logo.png'
import SearchIcon from '@material-ui/icons/Search';
import { Apps, HelpOutline, OfflinePinOutlined, SettingsOutlined, Tune } from '@material-ui/icons';
import '../../styles/Header.css'

const index = ({ userPhoto }) => {
   return (
      <div className="header">
         <div className="header__logo">
            <img src={DriveLogo} alt="logo" />
            <span>Drive</span>
         </div>
         <div className="header__searchContainer">
            <div className="header__searchBar">
               <SearchIcon className="icon" />
               <input type="text" name="" id="" placeholder="Search in Drive" />
               <Tune className="icon" />
            </div>
         </div>
         <div className="header__icons">
            <span>
               <OfflinePinOutlined className="icon" />
               <HelpOutline className="icon" />
               <SettingsOutlined className="icon" />
            </span>
            <Apps className="icon" />
            <img src={userPhoto} alt="user profile" />
         </div>
      </div>
   )
}

export default index
