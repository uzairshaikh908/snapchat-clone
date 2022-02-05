import firebase from "firebase"; 
   const firebaseConfig = {
    apiKey: "AIzaSyDzDv8gwFyg-3zGwUIUePXde91nU3jhwRI",
    authDomain: "snapchat-clone-yt-76f2f.firebaseapp.com",
    databaseURL: "https://snapchat-clone-yt-76f2f-default-rtdb.firebaseio.com",
    projectId: "snapchat-clone-yt-76f2f",
    storageBucket: "snapchat-clone-yt-76f2f.appspot.com",
    messagingSenderId: "182556155299",
    appId: "1:182556155299:web:e2834ba1535f9af50f0e16"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, storage, provider};
  // export default firebase;