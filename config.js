import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
     apiKey: "AIzaSyCXgjkcrhc9Q5kJqtAd1eGOmOYvsPaqKV0",
     authDomain: "crypto-media-28759.firebaseapp.com",
     projectId: "crypto-media-28759",
     storageBucket: "crypto-media-28759.appspot.com",
     messagingSenderId: "977324479",
     appId: "1:977324479:web:f52d3d1e49a2f958b8390a",
     measurementId: "G-LTHCQXMD8Q"
   };
   
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };