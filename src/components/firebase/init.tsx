
import * as firebase from "firebase/app";
// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";
// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2Q4fowDsJJiGJwXBXw_d6r1mgJyLwMMU",
    authDomain: "letsgrof.firebaseapp.com",
    databaseURL: "https://letsgrof.firebaseio.com",
    projectId: "letsgrof",
    storageBucket: "letsgrof.appspot.com",
    messagingSenderId: "133159260872",
    appId: "1:133159260872:web:fe53f715be06f4bfd8cbfd",
    measurementId: "G-CLDSD2SEYH"
  };

export function mountDB(){
    try{
        firebase.initializeApp(firebaseConfig);
    }catch {
        console.log('fb already in use');
    }
    return firebase.firestore();
}