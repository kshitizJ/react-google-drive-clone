import React from 'react'
import { ArrowRight } from '@material-ui/icons'
import '../../styles/SideBarItem.css'

const SideBarItem = ({ active, arrow, icon, label }) => {
   return (
      <div className={active ? `sideBarItems active` : 'sideBarItems'
      }>
         <div className="sideBarItem__arrow">
            {arrow && (<ArrowRight />)}
         </div>
         <div className="sideBarItem__main">
            {icon}
            <p>{label}</p>
         </div>
      </div >
   )
}

export default SideBarItem
