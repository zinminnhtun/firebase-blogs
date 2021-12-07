import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDgA16CNTuZQ9NsARtzgj7ZpuWZGPOkChc",
    authDomain: "fireblogsyt-6128c.firebaseapp.com",
    projectId: "fireblogsyt-6128c",
    storageBucket: "fireblogsyt-6128c.appspot.com",
    messagingSenderId: "597431443746",
    appId: "1:597431443746:web:3dd73c4b8a5315f952c57b"

};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { timestamp };
export default firebaseApp.firestore();