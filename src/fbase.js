import * as firebase from "firebase/app";
import * as auth from "firebase/auth";
// import "firebase/firestore";
// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
console.log(process.env.REACT_APP_API_KEY);

console.log(process.env.REACT_APP_AUTH_DOMAIN);
// const firebaseConfig = {
//   apiKey: "AIzaSyD1_vZ-Tko8Aqeh-PNow2bufkEyn82-Qrs",
//   authDomain: "nwitter-40f7f.firebaseapp.com",
//   projectId: "nwitter-40f7f",
//   storageBucket: "nwitter-40f7f.appspot.com",
//   messagingSenderId: "576609382713",
//   appId: "1:576609382713:web:24828f09a294c5c91cf8e8",
// };

firebase.initializeApp(firebaseConfig);

// const authService = firebase.auth();
export const authService = auth;
// export const authService = firebase.auth;
