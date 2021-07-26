import { useState } from 'react';
import './App.css';
import FilesView from './components/filesView/filesView';
import Header from './components/header'
import SideBar from './components/sideBar'
import SideIcons from './components/sideIcons'
import GDriveLogo from './media/google-drive-logo.png'
import { auth, provider } from './firebase'

function App() {
   const [user, setUser] = useState()

   const handleLogin = () => {
      if (!user) {
         auth.signInWithPopup(provider).then((result) => (
            setUser(result.user)
         ))
      }
   }

   // first we need authentication
   return (
      <div className="app">
         {/* header */}
         {/* 
            if auth == true:
               sidebar
               filesView
               sideIcons
         */}

         {/* if auth == false:
               login page
         */}
         {
            user ? (
               <>
                  <Header userPhoto={user.photoURL} />
                  <div className="app_main">
                     <SideBar />
                     <FilesView />
                     <SideIcons />
                  </div>
               </>
            ) : (
               <div className="app__login">
                  <img src={GDriveLogo} alt="Google Drive" />
                  <button onClick={handleLogin}>Log in to Google Drive</button>
               </div>
            )
         }
      </div>
   );
}

export default App;
