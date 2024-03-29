import React, { useState, useEffect } from 'react'
import { db } from '../../firebase'
import FileItem from './fileItem'
import '../../styles/FileView.css'
import FileCard from './fileCard'

const FilesView = () => {
   const [files, setFiles] = useState([])

   useEffect(() => {
      db.collection('myFiles').onSnapshot(snapshot => {
         setFiles(snapshot.docs.map(doc => ({
            id: doc.id,
            item: doc.data()
         })))
      })
   }, [])

   return (
      <div className="fileView">
         <div className="fileView__row">
            {/* file cards */}
            {
               files.slice(0, 5).map(({ id, item }) => (
                  <FileCard name={item.caption} />
               ))
            }
         </div>
         <div className="fileView__titles">
            <div className="fileView__titles--left">
               <p>Name</p>
            </div>
            <div className="fileView__titles--right">
               <p>Last Modified</p>
               <p>Files size</p>
            </div>
         </div>
         {
            files.map(({ id, item }) => (
               <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
            ))
         }
         <hr className="line" />
      </div>
   )
}

export default FilesView
