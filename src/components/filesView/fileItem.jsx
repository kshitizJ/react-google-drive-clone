import React from 'react'
import '../../styles/FileItem.css'
import { Description } from '@material-ui/icons'

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {

   const fileData = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth() + 1]} ${timestamp?.toDate().getFullYear()}`

   const getReadableFileSizeString = (fileSizeInBytes) => {
      let i = -1;
      const byteUnit = [' KB', ' MB', ' GB', ' TB', ' PB', ' EB', ' ZB', ' YB']
      do {
         fileSizeInBytes = fileSizeInBytes / 1024;
         i++;
      } while (fileSizeInBytes > 1024)
      return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnit[i]
   };

   return (
      <div className="fileItem">
         <a href={fileUrl} target="_blank" download>
            <div className="fileItem--left">
               <Description />
               <p>{caption}</p>
            </div>
            <div className="fileItem--right">
               <p>{fileData}</p>
               <p>{getReadableFileSizeString(size)}</p>
            </div>
         </a>
      </div>
   )
}

export default FileItem
