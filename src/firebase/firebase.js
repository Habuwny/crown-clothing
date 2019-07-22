import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


const config = {

    apiKey: "AIzaSyCUgihzhCz70WENpf5nDvCZKoCGPpJ_ZsI",
    authDomain: "crwn-clothing-96d23.firebaseapp.com",
    databaseURL: "https://crwn-clothing-96d23.firebaseio.com",
    projectId: "crwn-clothing-96d23",
    storageBucket: "",
    messagingSenderId: "701600323224",
    appId: "1:701600323224:web:e40f6264aeff8747"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firebasestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;


