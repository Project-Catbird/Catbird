import firebase from "firebase/app";
import "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyAqHkilEykybKd9VL7QPLlwtEkE_Zu0XwQ",
  databaseURL: "gs://sunlit-analyst-318318.appspot.com/",
  authDomain: "sunlit-analyst-318318.firebaseapp.com",
  projectId: "sunlit-analyst-318318",
  storageBucket: "sunlit-analyst-318318.appspot.com",
  messagingSenderId: "767876054954",
  appId: "1:767876054954:web:41dd6f1c026243e3b575d3",
  measurementId: "G-2FY9FY7FSX"
};

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };