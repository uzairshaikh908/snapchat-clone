import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDTYQ4JYx_XcboAeKj_h43PqaALAC_ynqo",
    authDomain: "snapchat-clone-yt-314c7.firebaseapp.com",
    projectId: "snapchat-clone-yt-314c7",
    storageBucket: "snapchat-clone-yt-314c7.appspot.com",
    messagingSenderId: "844329523963",
    appId: "1:844329523963:web:67109cb454a8d258e5ee5e"
  };
  const firebaseApp = firebase.initializeApp(firebaseconfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider};
