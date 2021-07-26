import React from 'react'
import NewFile from './newFile'
import SideBarItem from './sideBarItem'
import { AddToQueueOutlined, CloudOutlined, DeleteOutline, DevicesOutlined, QueryBuilder, StarBorder, SupervisorAccountOutlined } from '@material-ui/icons'
import '../../styles/SideBar.css'

const index = () => {
   return (
      <div className="sideBar">
         {/* new file */}
         <NewFile />
         <div className="sideBar__itemsContainer">
            {/* sidebarItems */}
            <SideBarItem active arrow icon={(<AddToQueueOutlined className="icon" />)} label={'My Drive'} />
            <SideBarItem arrow icon={(<DevicesOutlined className="icon" />)} label={'Computers'} />
            <SideBarItem icon={(<SupervisorAccountOutlined className="icon" />)} label={'Shared with me'} />
            <SideBarItem icon={(<QueryBuilder className="icon" />)} label={'Recent'} />
            <SideBarItem icon={(<StarBorder className="icon" />)} label={'Stared'} />
            <SideBarItem icon={(<DeleteOutline className="icon" />)} label={'Trash'} />
            <hr className="line" />
            {/* sidebar element */}
            <SideBarItem icon={(<CloudOutlined className="icon" />)} label={'Storage'} />
         </div>
      </div>
   )
}

export default index
