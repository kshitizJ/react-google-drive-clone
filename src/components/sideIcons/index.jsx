import { Add } from '@material-ui/icons'
import React from 'react'
import '../../styles/SideIcons.css'

const index = () => {
   return (
      <div className="sideIcons">
         <div className="sideIcons__top">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Calendar_icon_%282020%29.svg/1024px-Google_Calendar_icon_%282020%29.svg.png" alt="Google Calender" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png" alt="Google Keep" />
            <img src="https://img.utdstc.com/icon/9f7/0b4/9f70b4260a5a6c19400b6624d7d5808215ff175e7a04c871805d3d793443781f:200" alt="Google Tasks" />
         </div>
         <hr className="line" />
         <div className="sideIcon__plusIcon">
            <Add />
         </div>
      </div>
   )
}

export default index
