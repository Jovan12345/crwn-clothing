import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBj3x9vaFHk_lo9ZNuiwbMpwQ7jOlHNvog",
    authDomain: "crwn-db-1b2dd.firebaseapp.com",
    databaseURL: "https://crwn-db-1b2dd.firebaseio.com",
    projectId: "crwn-db-1b2dd",
    storageBucket: "crwn-db-1b2dd.appspot.com",
    messagingSenderId: "172631405230",
    appId: "1:172631405230:web:5233804bcefe2d8dd6333f",
    measurementId: "G-FWZZR44T2V"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;