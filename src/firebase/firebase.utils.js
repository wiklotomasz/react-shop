import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1chWAJQ06IqLJ3a7faqEaiMq1yafHXac",
    authDomain: "react-shoper.firebaseapp.com",
    databaseURL: "https://react-shoper.firebaseio.com",
    projectId: "react-shoper",
    storageBucket: "react-shoper.appspot.com",
    messagingSenderId: "577310332133",
    appId: "1:577310332133:web:50f6db3fe08a8eaa40700c"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;