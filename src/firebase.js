import firebase from "firebase";

const firebaseConfig = {
   apiKey: "AIzaSyDnl0ETvGZzCwFxFUzfElThwAja2YiFyK4",
   authDomain: "drive-clone-application.firebaseapp.com",
   projectId: "drive-clone-application",
   storageBucket: "drive-clone-application.appspot.com",
   messagingSenderId: "644491836432",
   appId: "1:644491836432:web:3dafcd757c66d9e4685e95"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

const storage = firebase.storage()

const db = firebaseApp.firestore()

export { auth, db, provider, storage }